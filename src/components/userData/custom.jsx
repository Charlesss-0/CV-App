/* eslint-disable react/prop-types */
// CustomSectionPicker component renders a list of customizable sections that can be added.
export function CustomSectionPicker({ customList }) {
  const customizableSections = [
    { name: 'Custom section', icon: 'fi fi-sr-settings-sliders' },
    { name: 'Extracurricular activities', icon: 'fi fi-sr-seedling' },
    { name: 'Hobbies', icon: 'fi fi-sr-puzzle-alt' },
    { name: 'Reference', icon: 'fi fi-sr-person-circle-check' },
    { name: 'Courses', icon: 'fi fi-sr-book-copy' },
    { name: 'Practices', icon: 'fi fi-sr-trophy-star' },
    { name: 'Language', icon: 'fi fi-sr-language' }
  ]

  const addToList = () => {}

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
          onClick={addToList}
        >
          <i className={`${section.icon} text-[#0174BE] flex`}></i>
          {section.name}
        </li>
      ))}
    </ul>
  )
}
