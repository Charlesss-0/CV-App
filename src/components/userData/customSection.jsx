import { v4 as uuid } from 'uuid'
import { UserForm } from './form'
import styled from 'styled-components'

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
export function CustomSectionPicker({
  customList,
  onCustomListChange,
  setCustomObj
}) {
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

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setCustomObj((prev) => {
      const index = prev.findIndex((obj) => obj[name] !== undefined)

      if (index !== -1) {
        // If the object with the same name exists, update its value
        return prev.map((obj, i) =>
          i === index ? { ...obj, [name]: value } : obj
        )
      } else {
        // If the object doesn't exist, add a new one
        return [...prev, { [name]: value }]
      }
    })
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

  // Function to get the component based on the provided icon
  const getComponent = (icon) => {
    // Mapping of icons to UserForm components with predefined fields
    const componentMap = {
      'fi fi-sr-settings-sliders': (
        <UserForm
          fields={[
            {
              title: 'Title',
              titleTwo: 'City',
              description: 'Description',
              onChange: (e) => handleChange(e)
            }
          ]}
        />
      ),
      'fi fi-sr-seedling': (
        <UserForm
          fields={[
            {
              title: 'Activity',
              titleTwo: 'Employer',
              description: 'Description',
              onChange: (e) => handleChange(e)
            }
          ]}
        />
      ),
      'fi fi-sr-puzzle-alt': (
        <UserForm
          fields={[
            {
              title: 'Hobby',
              description: 'Description',
              onChange: (e) => handleChange(e)
            }
          ]}
        />
      ),
      'fi fi-sr-person-circle-check': (
        <UserForm
          fields={[
            {
              title: 'Reference',
              titleTwo: 'Contact',
              onChange: (e) => handleChange(e)
            }
          ]}
        />
      ),
      'fi fi-sr-book-copy': (
        <UserForm
          fields={[
            {
              title: 'Course',
              titleTwo: 'Institution',
              onChange: (e) => handleChange(e)
            }
          ]}
        />
      ),
      'fi fi-sr-trophy-star': (
        <UserForm
          fields={[
            {
              title: 'Practice',
              titleTwo: 'Entity',
              onChange: (e) => handleChange(e)
            }
          ]}
        />
      ),
      'fi fi-sr-language': (
        <UserForm
          fields={[
            {
              title: 'Language',
              titleTwo: 'Proficiency',
              onChange: (e) => handleChange(e)
            }
          ]}
        />
      )
    }

    // Return the component based on the provided icon
    return componentMap[icon]
  }

  // JSX for rendering the list of customizable sections
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
