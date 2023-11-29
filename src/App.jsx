import './styles/App.css'
import { ResumeTemplate } from './components/resume/resume'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components'
import ContentEditable from 'react-contenteditable'

import { ContactInfo } from './components/userData/contact'
import { AddSection } from './components/userData/section'
import { SkillsList } from './components/userData/skills'
import { CustomSectionPicker } from './components/userData/customSection'
import { UserForm } from './components/userData/form'

const EditableWrapper = styled.div`
  display: flex;
  font-size: 1.3rem;

  & > i {
    align-items: center;
    font-size: 1.5rem;
    padding: 0.5rem;
    color: #0174be;
  }

    &:hover {
      cursor: text;

      & > i {
        display: flex;
      }
    }

    &:focus {
      outline: 2px solid #0174be;

      & > i {
        display: none;
      }
    }
  }
`

const EditableContent = ({ content, onChange }) => {
  return (
    <EditableWrapper>
      <ContentEditable
        onChange={onChange}
        html={content}
        className="p-[0.5rem] rounded-[5px] font-[1.3rem] items-center grow outline-none"
      />
      <i className="fi fi-rr-pen-circle hidden"></i>
    </EditableWrapper>
  )
}

const CustomSectionList = ({ section }) => {
  const { key, component } = section
  const title = component.props.fields[0].title

  return (
    <li key={key} className="flex flex-col">
      {title === 'Title' ? (
        <EditableContent content="Add title" />
      ) : (
        <span className="text-[1.3rem] font-medium p-[0.5rem]">{title}</span>
      )}
      {component}
    </li>
  )
}

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

  // Common handleChange function for user input
  const handleChange = (key, e) => {
    setUserInput((input) => ({
      ...input,
      [key]: e.target.value
    }))
  }

  // Common store function for updating state arrays
  const store = (setEvent, arr, e) => {
    setEvent([...arr, e])
  }

  // Common handleSubmit function
  const handleSubmit = (e, skillInput) => {
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

  const [customObj, setCustomObj] = useState([])

  const handleJobChange = (e) => {
    const { name, value } = e.target

    if (name === 'Job title') {
      store(setPrevJobPosition, prevJobPosition, value)
    } else if (name === 'Employer') {
      store(setPrevJobName, prevJobName, value)
    } else if (name === 'Start date') {
      store(setStartDate, startDate, value)
    } else if (name === 'End date') {
      store(setEndDate, endDate, value)
    } else if (name === 'Job') {
      store(setDescription, description, value)
    }
  }

  const handleTrainingChange = (e) => {
    const { name, value } = e.target

    if (name === 'Training') {
      store(setEntity, entity, value)
    } else if (name === 'Qualification') {
      store(setQualification, qualification, value)
    } else if (name === 'Start date') {
      store(setTrainingStart, trainingStart, value)
    } else if (name === 'End date') {
      store(setTrainingEnd, trainingEnd, value)
    } else if (name === 'Description') {
      store(setTrainingDescription, trainingDescription, value)
    }
  }

  const handleLinksChange = (e) => {
    const { name, value } = e.target

    if (name === 'Label') {
      store(setLabel, label, value)
    } else if (name === 'URL') {
      store(setUrl, url, value)
    }
  }

  const prevPositionsList = () => {
    return prevJobPosition.map((position, index) => {
      return {
        position: position,
        employer: prevJobName[index],
        start: startDate[index],
        end: endDate[index],
        description: description[index]
      }
    })
  }

  const prevTraining = () => {
    return entity.map((entity, index) => {
      return {
        entity: entity,
        qualification: qualification[index],
        start: trainingStart[index],
        end: trainingEnd[index],
        description: trainingDescription[index]
      }
    })
  }

  const linksList = () => {
    return label.map((link, index) => {
      return {
        label: link,
        url: url[index]
      }
    })
  }

  const cityCountry =
    userInput.city !== '' && userInput.country !== ''
      ? `${userInput.city}, ${userInput.country}`
      : userInput.city !== '' || userInput.country !== ''
      ? `${userInput.city} ${userInput.country}`
      : ''

  const [job, setJob] = useState([])
  const [training, setTraining] = useState([])
  const [links, setLinks] = useState([])
  const [customList, setCustomList] = useState([])

  // Function to handle changes in the custom section list
  const handleCustomListChange = (newList) => {
    setCustomList(newList)
  }

  // Function to handle adding new items to the different sections of the form
  const handleEvent = (setEvent, arr, newArr) => {
    setEvent([...arr, newArr])
  }

  return (
    <main className="flex">
      <div
        className="
            bg-[#efefef] 
            w-[80vw] 
            h-screen 
            rounded-e-[15px] 
            p-[2rem] 
            flex 
            flex-col 
            overflow-auto
            select-none
            "
        id="cv-form-section"
      >
        {/* Contact information section */}
        <ContactInfo
          fields={[
            {
              jobTitle: (e) => handleChange('jobTitle', e),
              firstName: (e) => handleChange('firstName', e),
              lastName: (e) => handleChange('lastName', e),
              email: (e) => handleChange('email', e),
              phone: (e) => handleChange('phone', e),
              city: (e) => handleChange('city', e),
              country: (e) => handleChange('country', e),
              profileDesc: (e) => handleChange('profileDesc', e)
            }
          ]}
        />

        {/* Section for adding work experience */}
        <AddSection
          fields={[
            {
              title: 'Work Experience',
              description: `Please indicate your relevant experience from the last 10 years and dates in this section.
              Start with the most recent position.`,
              btnText: 'Add job',
              id: uuid(),
              onClick: () =>
                handleEvent(
                  setJob,
                  job,
                  <UserForm
                    fields={[
                      {
                        name: 'Job',
                        title: 'Job title',
                        titleTwo: 'Employer',
                        start: 'Start date',
                        end: 'End date',
                        description: 'Description',
                        onChange: (e) => handleJobChange(e)
                      }
                    ]}
                  />
                ),
              list: job
            }
          ]}
        />

        {/* Section for adding training information */}
        <AddSection
          fields={[
            {
              title: 'Training',
              description: `If applicable, include your most recent academic achievements and dates here.`,
              btnText: 'Add training',
              id: uuid(),
              onClick: () =>
                handleEvent(
                  setTraining,
                  training,
                  <UserForm
                    fields={[
                      {
                        title: 'Training',
                        titleTwo: 'Qualification',
                        start: 'Start date',
                        end: 'End date',
                        description: 'Description',
                        onChange: (e) => handleTrainingChange(e)
                      }
                    ]}
                  />
                ),
              list: training
            }
          ]}
        />

        {/* Section for adding links to social networks and websites */}
        <AddSection
          fields={[
            {
              title: 'Links to social networks and websites',
              description: `
              Now you can add links to the sites you want employers to see.
              It can be a link to your portfolio, your LinkedIn profile, or your personal website.
            `,
              btnText: 'Add link',
              id: uuid(),
              onClick: () =>
                handleEvent(
                  setLinks,
                  links,
                  <UserForm
                    fields={[
                      {
                        title: 'Label',
                        titleTwo: 'URL',
                        onChange: (e) => handleLinksChange(e)
                      }
                    ]}
                  />
                ),
              list: links
            }
          ]}
        />

        {/* Section for adding competencies and skills */}
        <AddSection
          fields={[
            {
              title: 'Skills',
              description: `
              Make a list of your personal skills and experience levels
              to see your strengths and optimize your keywords.
            `
            }
          ]}
        />

        {/* SkillsList component for displaying skills */}
        <SkillsList
          skillOnChange={(e) => setSkillInput(e.target.value)}
          submit={(e) => handleSubmit(e, skillInput)}
        />

        {/* Section for adding custom sections */}
        <AddSection
          fields={[
            {
              title: 'Add Section',
              description: `
              Add a custom section to showcase your strengths on other areas
            `
            }
          ]}
        />

        {/* Display custom sections from the list */}
        <ul>
          {customList.map((section) => (
            <CustomSectionList key={section.key} section={section} />
          ))}
        </ul>

        {/* CustomSectionPicker for selecting and adding custom sections */}
        <CustomSectionPicker
          customList={customList}
          onCustomListChange={handleCustomListChange}
          setCustomObj={setCustomObj}
        />
      </div>

      <ResumeTemplate
        fields={[
          {
            jobTitle: userInput.jobTitle,
            firstName: userInput.firstName,
            lastName: userInput.lastName,
            email: userInput.email,
            phone: userInput.phone,
            cityCountry: cityCountry,
            profileDesc: userInput.profileDesc,
            jobHistory: mapJobHistory(prevPositionsList()),
            training: mapTrainingItem(prevTraining()),
            links: mapLinks(linksList()),
            skills: mapSkills(skills),
            customList: mapCustomList(customObj)
          }
        ]}
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
      {training.qualification && training.entity ? (
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
      ) : (
        <>
          <p className="font-semibold text-[1.1rem]">
            {training.qualification} {training.entity} <br />
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
    return <li key={index}>{list.Title}</li>
  })
}
