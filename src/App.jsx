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

  const store = (setEvent, arr, e) => {
    setEvent([...arr, e.target.value])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (skillInput.trim() !== '') {
      setSkills((skill) => [...skill, skillInput])
    }
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

  const [skillInput, setSkillInput] = useState('')
  const [skills, setSkills] = useState([])

  const [inputTitle, setInputTitle] = useState([])
  const [customEntity, setCustomEntity] = useState([])

  const prevPositionsList = (
    prevJobPositions,
    prevJobName,
    startDate,
    endDate,
    description
  ) => {
    return prevJobPositions.map((position, index) => {
      return {
        position: position,
        employer: prevJobName[index],
        start: startDate[index],
        end: endDate[index],
        description: description[index]
      }
    })
  }

  const prevTraining = (entity, qualification, start, end, description) => {
    return entity.map((entity, index) => {
      return {
        entity: entity,
        qualification: qualification[index],
        start: start[index],
        end: end[index],
        description: description[index]
      }
    })
  }

  // const prevTraining = entity.map((entity, index) => {
  //   return {
  //     entity: entity,
  //     qualification: qualification[index],
  //     start: trainingStart[index],
  //     end: trainingEnd[index],
  //     description: trainingDescription[index]
  //   }
  // })

  const links = label.map((link, index) => {
    return {
      label: link,
      url: url[index]
    }
  })

  const customList = (inputTitle, customEntity) => {
    return inputTitle.map((title, index) => {
      return {
        title: title,
        entity: customEntity[index]
      }
    })
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
        prevJobTitle={(e) => store(setPrevJobPosition, prevJobPosition, e)}
        prevEmployer={(e) => store(setPrevJobName, prevJobName, e)}
        startDate={(e) => store(setStartDate, startDate, e)}
        endDate={(e) => store(setEndDate, endDate, e)}
        description={(e) => store(setDescription, description, e)}
        prevEntity={(e) => store(setEntity, entity, e)}
        prevQualification={(e) => store(setQualification, qualification, e)}
        trainingStart={(e) => store(setTrainingStart, trainingStart, e)}
        trainingEnd={(e) => store(setTrainingEnd, trainingEnd, e)}
        trainingDescription={(e) =>
          store(setTrainingDescription, trainingDescription, e)
        }
        label={(e) => store(setLabel, label, e)}
        url={(e) => store(setUrl, url, e)}
        skillOnChange={(e) => setSkillInput(e.target.value)}
        submit={(e) => handleSubmit(e)}
        entity={(e) => store(setCustomEntity, customEntity, e)}
        inputTitle={(e) => store(setInputTitle, inputTitle, e)}
      />

      <ResumeTemplate
        firstName={userInput.firstName}
        lastName={userInput.lastName}
        jobTitle={userInput.jobTitle}
        profileDescription={userInput.profileDesc}
        email={userInput.email}
        phone={userInput.phone}
        cityCountry={cityCountry}
        jobHistory={mapJobHistory(
          prevPositionsList(
            prevJobPosition,
            prevJobName,
            startDate,
            endDate,
            description
          )
        )}
        training={mapTrainingItem(
          prevTraining(
            entity,
            qualification,
            trainingStart,
            trainingEnd,
            trainingDescription
          )
        )}
        label={mapLinks(links)}
        skills={mapSkills(skills)}
        customList={mapCustomList(customList(inputTitle, customEntity))}
      />
    </main>
  )
}

function mapJobHistory(jobs) {
  return jobs.map((job, index) => {
    const content =
      job.position && job.employer ? (
        <p className="font-semibold text-[1.1rem]">
          {job.position} at {job.employer} <br />
          {job.start && job.end ? (
            <span className="font-normal text-[1rem]">
              {job.start} to {job.end}
            </span>
          ) : (
            <span className="font-normal text-[1rem]">
              {job.start} {job.end}
            </span>
          )}
        </p>
      ) : (
        <p className="font-semibold text-[1.1rem]">
          {job.position} {job.employer} <br />
          {job.start && job.end ? (
            <span className="font-normal text-[1rem]">
              {job.start} to {job.end}
            </span>
          ) : (
            <span className="font-normal text-[1rem]">
              {job.start} {job.end}
            </span>
          )}
        </p>
      )

    return (
      <div key={index}>
        {content}
        <p>{job.description}</p>
      </div>
    )
  })
}

function mapTrainingItem(trainings) {
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

function mapLinks(links) {
  return links.map((link, i) => (
    <a
      key={i}
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className="underline text-[#435585]"
    >
      {link.label}
    </a>
  ))
}

function mapSkills(skills) {
  return skills.map((skill, i) => <li key={i}>{skill}</li>)
}

function mapCustomList(customList) {
  return customList.map((list, index) => {
    const content =
      list.title && list.entity ? (
        <span>
          {list.title} in {list.entity}
        </span>
      ) : (
        <span>
          {list.title} {list.entity}
        </span>
      )

    return (
      <p key={index} className={list.title || list.entity ? 'text-[1rem]' : ''}>
        {content}
      </p>
    )
  })
}
