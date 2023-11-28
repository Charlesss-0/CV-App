import './styles/App.css'
// import { Form } from './components/userData/sideForm'
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

const Editable = ({ content, onChange }) => {
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
        <Editable content="Add title" />
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

  const handleChange = (key, e) => {
    setUserInput((input) => ({
      ...input,
      [key]: e.target.value
    }))
  }

  const store = (setEvent, arr, e) => {
    setEvent([...arr, e.target.value])
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   if (skillInput.trim() !== '') {
  //     setSkills((skill) => [...skill, skillInput])
  //   }
  // }

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

  // const [label, setLabel] = useState([])
  // const [url, setUrl] = useState([])

  // const [skillInput, setSkillInput] = useState('')
  // const [skills, setSkills] = useState([])

  // const [inputTitle, setInputTitle] = useState([])
  // const [customEntity, setCustomEntity] = useState([])

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

  // const prevTraining = entity.map((entity, index) => {
  //   return {
  //     entity: entity,
  //     qualification: qualification[index],
  //     start: trainingStart[index],
  //     end: trainingEnd[index],
  //     description: trainingDescription[index]
  //   }
  // })

  // const links = label.map((link, index) => {
  //   return {
  //     label: link,
  //     url: url[index]
  //   }
  // })

  // const customList = (inputTitle, customEntity) => {
  //   return inputTitle.map((title, index) => {
  //     return {
  //       title: title,
  //       entity: customEntity[index]
  //     }
  //   })
  // }

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
                        title: 'Job title',
                        titleTwo: 'Employer',
                        start: 'Start date',
                        end: 'End date',
                        description: 'Description',
                        onChange: (e) => {
                          if (e.target.name === 'Job title') {
                            store(setPrevJobPosition, prevJobPosition, e)
                          } else if (e.target.name === 'Employer') {
                            store(setPrevJobName, prevJobName, e)
                          } else if (e.target.name === 'Start date') {
                            store(setStartDate, startDate, e)
                          } else if (e.target.name === 'End date') {
                            store(setEndDate, endDate, e)
                          } else if (e.target.name === 'Description') {
                            store(setDescription, description, e)
                          }
                        }
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
                        onChange: (e) => {
                          if (e.target.name === 'Training') {
                            store(setEntity, entity, e)
                          } else if (e.target.name === 'Qualification') {
                            store(setQualification, qualification, e)
                          } else if (e.target.name === 'Start date') {
                            store(setTrainingStart, trainingStart, e)
                          } else if (e.target.name === 'End date') {
                            store(setTrainingEnd, trainingEnd, e)
                          } else if (e.target.name === 'Description') {
                            store(
                              setTrainingDescription,
                              trainingDescription,
                              e
                            )
                          }
                        }
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
                        titleTwo: 'URL'
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
              title: 'Competencies',
              description: `
              Make a list of your personal skills and experience levels
              to see your strengths and optimize your keywords.
            `
            }
          ]}
        />

        {/* SkillsList component for displaying skills */}
        <SkillsList />

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
            training: mapTrainingItem(prevTraining())
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

// function mapLinks(links) {
//   return links.map((link, i) => (
//     <a
//       key={i}
//       href={link.url}
//       target="_blank"
//       rel="noreferrer"
//       className="underline text-[#435585]"
//     >
//       {link.label}
//     </a>
//   ))
// }

// function mapSkills(skills) {
//   return skills.map((skill, i) => <li key={i}>{skill}</li>)
// }

// function mapCustomList(customList) {
//   return customList.map((list, index) => {
//     const content =
//       list.title && list.entity ? (
//         <span>
//           {list.title} in {list.entity}
//         </span>
//       ) : (
//         <span>
//           {list.title} {list.entity}
//         </span>
//       )

//     return (
//       <p key={index} className={list.title || list.entity ? 'text-[1rem]' : ''}>
//         {content}
//       </p>
//     )
//   })
// }
