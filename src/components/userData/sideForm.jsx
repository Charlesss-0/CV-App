import { v4 as uuid } from 'uuid'
import { useState } from 'react'
import styled from 'styled-components'
import ContentEditable from 'react-contenteditable'

import { ContactInfo } from './contact'
import { AddSection } from './section'
import { SkillsList } from './skills'
import { CustomSectionPicker } from './customSection'
import { UserForm } from './form'

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

// Form component definition with props
export function Form({
  jobTitle,
  firstName,
  lastName,
  email,
  phone,
  city,
  country,
  profileDesc
}) {
  // State variables for different sections of the form
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
    // Main container for the form with styling
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
        jobTitle={jobTitle}
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        city={city}
        country={country}
        profileDesc={profileDesc}
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
                      description: 'Description'
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
                      description: 'Description'
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
  )
}
