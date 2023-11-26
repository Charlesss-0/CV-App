import { AddCustomSection } from './customComponents/custom'
import { AddActivities } from './customComponents/activities'
import { AddHobbies } from './customComponents/hobbies'
import { AddReferences } from './customComponents/references'
import { AddCourses } from './customComponents/courses'
import { AddPractices } from './customComponents/practices'
import { AddLanguages } from './customComponents/languages'
import { UserForm } from './form'
import { FormTwo } from './formTwo'
import styled from 'styled-components'

const Li = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem;
  border-radius: 10px;
  border: 1px solid #afafaf;
  transition: all 0.05s ease-in-out;
`

// CustomSectionPicker component renders a list of customizable sections that can be added.
export function CustomSectionPicker({ customList, onCustomListChange }) {
  const customizableSections = [
    { name: 'Custom section', icon: 'fi fi-sr-settings-sliders' },
    { name: 'Extracurricular activities', icon: 'fi fi-sr-seedling' },
    { name: 'Hobbies', icon: 'fi fi-sr-puzzle-alt' },
    { name: 'Reference', icon: 'fi fi-sr-person-circle-check' },
    { name: 'Courses', icon: 'fi fi-sr-book-copy' },
    { name: 'Practices', icon: 'fi fi-sr-trophy-star' },
    { name: 'Language', icon: 'fi fi-sr-language' }
  ]

  const addToList = (section) => {
    const updatedList = [
      ...customList,
      {
        icon: section.icon,
        component: getComponent(section.icon),
        key: customList.length
      }
    ]
    onCustomListChange(updatedList)
  }

  const getComponent = (icon) => {
    const componentMap = {
      'fi fi-sr-settings-sliders': <AddCustomSection />,
      'fi fi-sr-seedling': (
        <UserForm title={'Activity'} titleTwo={'Description'} />
      ),
      'fi fi-sr-puzzle-alt': (
        <UserForm title={'Hobby'} titleTwo={'Description'} />
      ),
      'fi fi-sr-person-circle-check': (
        <FormTwo
          fields={[
            {
              title: 'Reference',
              titleTwo: 'Contact',
              start: 'Start date',
              end: 'End date',
              description: 'Description'
            }
          ]}
        />
      ),
      'fi fi-sr-book-copy': <AddCourses />,
      'fi fi-sr-trophy-star': <AddPractices />,
      'fi fi-sr-language': <AddLanguages />
    }

    return componentMap[icon]
  }

  return (
    <ul className="flex flex-wrap gap-[1rem] mt-[1.5rem]">
      {customizableSections.map((section) => (
        <Li
          key={section.icon}
          className="hover:cursor-pointer hover:text-[#0174BE]"
          onClick={() => addToList(section)}
        >
          <i className={`${section.icon} text-[#0174BE] flex`}></i>
          {section.name}
        </Li>
      ))}
    </ul>
  )
}
