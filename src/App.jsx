/* eslint-disable react/prop-types */
import './styles/App.css'
import { Form } from './components/userData/sideForm'
import { ResumeTemplate } from './components/resume/resume'
import { useState } from 'react'

export default function App() {
  // State variables for user input
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [profileDesc, setProfileDesc] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
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

  const cityCountry =
    city !== '' && country !== ''
      ? `${city}, ${country}`
      : city !== '' || country !== ''
      ? `${city} ${country}`
      : ''

  const handleEvent = (setEvent, e) => {
    setEvent(e.target.value)
  }

  const handlePrev = (setEvent, arr, e) => {
    setEvent([...arr, e.target.value])
  }

  return (
    <main className="flex">
      <Form
        jobTitle={(e) => handleEvent(setJobTitle, e)}
        firstName={(e) => handleEvent(setFirstName, e)}
        lastName={(e) => handleEvent(setLastName, e)}
        email={(e) => handleEvent(setEmail, e)}
        phone={(e) => handleEvent(setPhone, e)}
        city={(e) => handleEvent(setCity, e)}
        country={(e) => handleEvent(setCountry, e)}
        profileDesc={(e) => handleEvent(setProfileDesc, e)}
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
      />

      <ResumeTemplate
        firstName={firstName}
        lastName={lastName}
        jobTitle={jobTitle}
        profileDescription={profileDesc}
        email={email}
        phone={phone}
        cityCountry={cityCountry}
        jobHistory={prevPositions.map((job, index) => (
          <div key={index}>
            {!job.position && !job.employer ? (
              ''
            ) : (
              <>
                <p className="font-semibold text-[1.1rem]">
                  {job.position}{' '}
                  {job.employer && job.position ? `at ${job.employer}` : ''}
                  <br />
                  <span className="font-normal text-[1rem]">
                    {job.start && job.end ? `${job.start} to ${job.end}` : ''}
                  </span>
                </p>
                <p>{job.description}</p>
              </>
            )}
          </div>
        ))}
        training={prevTraining.map((training, index) => (
          <div key={index}>
            <>
              <p className="font-semibold text-[1.1rem]">
                {training.qualification && training.entity
                  ? `${training.qualification} in`
                  : ''}{' '}
                {training.entity}
                <br />
                <span className="font-normal text-[1rem]">
                  {training.start && training.end
                    ? `${training.start} to ${training.end}`
                    : ''}
                </span>
              </p>
              <p>{training.description}</p>
            </>
          </div>
        ))}
      />
    </main>
  )
}
