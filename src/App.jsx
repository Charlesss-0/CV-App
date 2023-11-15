/* eslint-disable react/prop-types */
import './styles/App.css'
import { Form } from './components/userData/sideForm'
import { ResumeTemplate } from './components/resume/resume'
import { useState } from 'react'

export default function App() {
  // State variables for user input
  const [userInput, setUserInput] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    profileDesc: '',
    email: '',
    phone: '',
    country: '',
    city: ''
  })

  const handleChange = (key, e) => {
    setUserInput((input) => ({
      ...input,
      [key]: e.target.value
    }))
  }

  const [prevJobPosition, setPrevJobPosition] = useState([])
  const [prevJobName, setPrevJobName] = useState([])
  const [startDate, setStartDate] = useState([])
  const [endDate, setEndDate] = useState([])
  const [description, setDescription] = useState([])

  const [entity, setEntity] = useState([])
  const [qualification, setQualification] = useState([])
  const [trainingStart, setTrainingStart] = useState([])
  const [trainingEnd, setTrainingEnd] = useState([])
  const [trainingDescription, setTrainingDescription] = useState([])

  const [label, setLabel] = useState([])
  const [url, setUrl] = useState([])

  const handlePrev = (setEvent, arr, e) => {
    setEvent([...arr, e.target.value])
  }

  const prevPositions = prevJobPosition.map((position, index) => {
    return {
      position: position,
      employer: prevJobName[index],
      start: startDate[index],
      end: endDate[index],
      description: description[index]
    }
  })

  const prevTraining = entity.map((entity, index) => {
    return {
      entity: entity,
      qualification: qualification[index],
      start: trainingStart[index],
      end: trainingEnd[index],
      description: trainingDescription[index]
    }
  })

  const links = label.map((link, index) => {
    return {
      label: link,
      url: url[index]
    }
  })

  const mapJobHistory = (jobs) => {
    return jobs.map((job, index) => (
      <div key={index}>
        {!job.position && !job.employer ? (
          ''
        ) : (
          <>
            {job.employer && job.position && (
              <p className="font-semibold text-[1.1rem]">
                {job.position} at {job.employer} <br />
                <span className="font-normal text-[1rem]">
                  {job.start && job.end ? `${job.start} to ${job.end}` : ''}
                </span>
              </p>
            )}
            <p>{job.description}</p>
          </>
        )}
      </div>
    ))
  }

  const mapTrainingItem = (trainings) => {
    return trainings.map((training, index) => (
      <div key={index}>
        {training.qualification && training.entity && (
          <>
            <p className="font-semibold text-[1.1rem]">
              {training.qualification} in {training.entity} <br />
              <span className="font-normal text-[1rem]">
                {training.start && training.end
                  ? `${training.start} to ${training.end}`
                  : ''}
              </span>
            </p>
            <p>{training.description}</p>
          </>
        )}
      </div>
    ))
  }

  const mapLinks = (links) => {
    return links.map((link, i) => (
      <div key={i}>
        <a
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="underline text-[#0766AD]"
        >
          {link.label}
        </a>
      </div>
    ))
  }

  const cityCountry =
    userInput.city !== '' && userInput.country !== ''
      ? `${userInput.city}, ${userInput.country}`
      : userInput.city !== '' || userInput.country !== ''
      ? `${userInput.city} ${userInput.country}`
      : ''

  return (
    <main className="flex">
      <Form
        jobTitle={(e) => handleChange('jobTitle', e)}
        firstName={(e) => handleChange('firstName', e)}
        lastName={(e) => handleChange('lastName', e)}
        email={(e) => handleChange('email', e)}
        phone={(e) => handleChange('phone', e)}
        city={(e) => handleChange('city', e)}
        country={(e) => handleChange('country', e)}
        profileDesc={(e) => handleChange('profileDesc', e)}
        prevJobTitle={(e) => handlePrev(setPrevJobPosition, prevJobPosition, e)}
        prevEmployer={(e) => handlePrev(setPrevJobName, prevJobName, e)}
        startDate={(e) => handlePrev(setStartDate, startDate, e)}
        endDate={(e) => handlePrev(setEndDate, endDate, e)}
        description={(e) => handlePrev(setDescription, description, e)}
        prevEntity={(e) => handlePrev(setEntity, entity, e)}
        prevQualification={(e) =>
          handlePrev(setQualification, qualification, e)
        }
        trainingStart={(e) => handlePrev(setTrainingStart, trainingStart, e)}
        trainingEnd={(e) => handlePrev(setTrainingEnd, trainingEnd, e)}
        trainingDescription={(e) =>
          handlePrev(setTrainingDescription, trainingDescription, e)
        }
        label={(e) => handlePrev(setLabel, label, e)}
        url={(e) => handlePrev(setUrl, url, e)}
      />

      <ResumeTemplate
        firstName={userInput.firstName}
        lastName={userInput.lastName}
        jobTitle={userInput.jobTitle}
        profileDescription={userInput.profileDesc}
        email={userInput.email}
        phone={userInput.phone}
        cityCountry={cityCountry}
        jobHistory={mapJobHistory(prevPositions)}
        training={mapTrainingItem(prevTraining)}
        label={mapLinks(links)}
      />
    </main>
  )
}
