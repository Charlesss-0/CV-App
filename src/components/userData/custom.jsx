/* eslint-disable react/prop-types */
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
      'fi fi-sr-settings-sliders': <CustomComponent1 />,
      'fi fi-sr-seedling': <CustomComponent2 />,
      'fi fi-sr-puzzle-alt': <CustomComponent3 />,
      'fi fi-sr-person-circle-check': <CustomComponent4 />,
      'fi fi-sr-book-copy': <CustomComponent5 />,
      'fi fi-sr-trophy-star': <CustomComponent6 />,
      'fi fi-sr-language': <CustomComponent7 />
    }

    return componentMap[icon]
  }

  return (
    <ul className="flex flex-wrap gap-[1rem] mt-[1.5rem]">
      {customizableSections.map((section) => (
        <li
          key={section.icon}
          className="
            flex 
            items-center 
            gap-[0.5rem] 
            p-[0.4rem] 
            rounded-lg 
            border-solid 
            border-[1px] 
            border-[#afafaf] 
            cursor-pointer
            transition-all
            delay-[.05s]
            ease-in-out
            hover:text-[#0174BE]
            "
          onClick={() => addToList(section)}
        >
          <i className={`${section.icon} text-[#0174BE] flex`}></i>
          {section.name}
        </li>
      ))}
    </ul>
  )
}

function CustomComponent1() {
  return <div>Hello from CustomComponent1!</div>
}

function CustomComponent2() {
  return <div>Hello from CustomComponent2!</div>
}

function CustomComponent3() {
  return <div>Hello from CustomComponent3!</div>
}

function CustomComponent4() {
  return <div>Hello from CustomComponent4!</div>
}

function CustomComponent5() {
  return <div>Hello from CustomComponent5!</div>
}

function CustomComponent6() {
  return <div>Hello from CustomComponent6!</div>
}

function CustomComponent7() {
  return <div>Hello from CustomComponent7!</div>
}
