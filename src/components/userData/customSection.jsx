import { v4 as uuid } from 'uuid'
import { UserForm } from './form'
import styled from 'styled-components'
import { useState } from 'react'

// Styled component for custom list item
const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem;
  border-radius: 10px;
  border: 1px solid #afafaf;
  transition: all 0.05s ease-in-out;

  &:hover {
    cursor: pointer;
    color: #0174be;
  }
`

// CustomSectionPicker component renders a list of customizable sections that can be added.
export function CustomSectionPicker({ customList, onCustomListChange }) {
  // Predefined list of customizable sections with names and icons
  const customizableSections = [
    { name: 'Custom section', icon: 'fi fi-sr-settings-sliders' },
    { name: 'Extracurricular activities', icon: 'fi fi-sr-seedling' },
    { name: 'Hobbies', icon: 'fi fi-sr-puzzle-alt' },
    { name: 'Reference', icon: 'fi fi-sr-person-circle-check' },
    { name: 'Courses', icon: 'fi fi-sr-book-copy' },
    { name: 'Practices', icon: 'fi fi-sr-trophy-star' },
    { name: 'Language', icon: 'fi fi-sr-language' }
  ]

  const [customInput, setCustomInput] = useState({
    'title': [],
    'city': [],
    'activity': [],
    'employer': [],
    'hobby': [],
    'reference': [],
    'contact': [],
    'course': [],
    'institution': [],
    'practice': [],
    'entity': [],
    'language': [],
    'proficiency': [],
    'description': []
  })
  console.log(customInput)

  const stateSetters = [
    {
      'Title': setCustomInput.title,
      'City': setCustomInput.city,
      'Activity': setCustomInput.activity,
      'Employer': setCustomInput.employer,
      'Hobby': setCustomInput.hobby,
      'Reference': setCustomInput.reference,
      'Contact': setCustomInput.contact,
      'Course': setCustomInput.course,
      'Institution': setCustomInput.institution,
      'Practice': setCustomInput.practice,
      'Entity': setCustomInput.entity,
      'Language': setCustomInput.language,
      'Proficiency': setCustomInput.proficiency,
      'Description': setCustomInput.description
    }
  ]

  const setEvent = (setState, e) => {
    const { name, value } = e.target

    setState((prev) => ({ ...prev, [name]: value }))
  }

  const handleChange = (e) => {
    const { name } = e.target

    const setState = stateSetters[name]

    setEvent(setState, e)
  }

  // Function to add a section to the custom list
  const addToList = (section) => {
    // Create a new item with an icon, corresponding component, and a unique key
    const updatedList = [
      ...customList,
      {
        icon: section.icon,
        component: getComponent(section.icon),
        key: uuid()
      }
    ]
    // Update the custom list using the provided callback function
    onCustomListChange(updatedList)
  }

  const createUserForm = (title, titleTwo, onChange) => {
    return (
      <UserForm
        fields={[
          {
            title,
            titleTwo,
            description: 'Description',
            onChange
          }
        ]}
      />
    )
  }

  // Function to get the component based on the provided icon
  const getComponent = (icon) => {
    // Mapping of icons to UserForm components with predefined fields
    const componentMap = {
      'fi fi-sr-settings-sliders': createUserForm('Title', 'City', handleChange),
      'fi fi-sr-seedling': createUserForm('Activity', 'Employer', handleChange),
      'fi fi-sr-puzzle-alt': createUserForm('Hobby', null, handleChange),
      'fi fi-sr-person-circle-check': createUserForm('Reference, contact', handleChange),
      'fi fi-sr-book-copy': createUserForm('Course', 'Institution', handleChange),
      'fi fi-sr-trophy-star': createUserForm('Practice', 'Entity', handleChange),
      'fi fi-sr-language': createUserForm('Language', 'Proficiency', handleChange)
    }

    // Return the component based on the provided icon
    return componentMap[icon]
  }

  // JSX for rendering the options for customizable sections
  return (
    <ul className="flex flex-wrap gap-[1rem] mt-[1.5rem]">
      {customizableSections.map((section) => (
        <Li key={section.icon} onClick={() => addToList(section)}>
          <i className={`${section.icon} text-[#0174BE] flex`}></i>
          {section.name}
        </Li>
      ))}
    </ul>
  )
}
