/* eslint-disable react/prop-types */

import { useState } from 'react'

// Section component combines a header and description for a section of content.
export function Section({ header, description }) {
  return (
    <>
      <Header text={header} />
      <Desc text={description} />
    </>
  )
}

// Header component renders the header text for a section.
export function Header({ text }) {
  return <h1 className="text-[1.6rem] mt-[2rem] font-semibold">{text}</h1>
}

// Desc component renders the description for a section.
export function Desc({ text }) {
  return <p className="mb-[1.5rem] text-[#5a5a5a]">{text}</p>
}

// Add component renders an "Add" button for a section of content.
export function Add({ text, onClick }) {
  return (
    <p
      onClick={onClick}
      className="
          flex 
          items-center 
          gap-1 
          text-[#0174BE] 
          cursor-pointer 
          hover:bg-[#afafaf55] 
          p-[0.5rem] 
          rounded-lg
          transition-all ease-in-out delay-[.05s]
          "
    >
      <i className="fi fi-rr-plus-small flex"></i>
      {text}
    </p>
  )
}

// Textarea component renders a text area for user input.
export function Textarea({ onChange, length, textholder }) {
  return (
    <textarea
      className="w-full resize-none rounded-lg h-[10em] p-[1rem] text-[#393939] font-normal"
      onChange={onChange}
      maxLength={length}
      placeholder={textholder}
    />
  )
}

// SkillsList component renders a list of skills and an "Add" button.
export function SkillsList() {
  const skills = [
    'Adaptability',
    'Visual Design Skills',
    'Database Management',
    'Knowledgable in User Interface/User Experience',
    'Javascript',
    'React',
    'HTML',
    'CSS'
  ]

  return (
    <>
      <ul
        className="
            flex
            flex-wrap
            gap-2
            mb-[1.5rem]
            "
      >
        {skills.map((skill) => (
          <li
            key={skill}
            className="
                bg-[#F5F7F8] 
                border-solid border-[1px] border-[#afafaf]
                p-[0.5rem] 
                px-[1rem] 
                rounded-lg 
                flex 
                items-center 
                gap-[0.5rem] 
                cursor-pointer
                hover:text-[#0174BE]
                transition-all delay-[.05s] ease-in-out
                "
          >
            {skill}
            <i className="fi fi-rr-plus-small flex"></i>
          </li>
        ))}
      </ul>
      <Add text={'Add competition'} />
    </>
  )
}

// CustomSec component renders a list of custom sections that can be added.
export function CustomSec() {
  const custom = [
    { name: 'Custom section', icon: 'fi fi-sr-settings-sliders' },
    { name: 'Extracurricular activities', icon: 'fi fi-sr-seedling' },
    { name: 'Hobbies', icon: 'fi fi-sr-puzzle-alt' },
    { name: 'Reference', icon: 'fi fi-sr-person-circle-check' },
    { name: 'Courses', icon: 'fi fi-sr-book-copy' },
    { name: 'Practices', icon: 'fi fi-sr-trophy-star' },
    { name: 'Language', icon: 'fi fi-sr-language' }
  ]

  return (
    <ul className="flex flex-wrap gap-[1rem] mt-[1.5rem]">
      {custom.map((sec) => (
        <li
          key={sec.icon}
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
        >
          <i className={`${sec.icon} text-[#0174BE] flex`}></i>
          {sec.name}
        </li>
      ))}
    </ul>
  )
}

// Field component renders a label and an input field for a form field.
export function Field({ title, type, length, onChange }) {
  return (
    <label>
      {title} <br />
      <input type={type} maxLength={length} onChange={onChange} />
    </label>
  )
}

// AddNewForm component allows the user to add new experiences.
export function AddNewForm({ titleOnChange, placeOnChange }) {
  const [isToggled, setIsToggled] = useState(false)
  const [title, setTitle] = useState('')
  const [place, setPlace] = useState('')

  // Handle toggling the form visibility when the title is clicked.
  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

  const handleEvent = (setEvent, e) => {
    setEvent(e.target.value)
  }

  return (
    <div className="border-solid border border-[#afafaf] rounded-[10px] p-[0.5rem] mb-[1rem]">
      <h1
        onClick={handleToggle}
        className="
          bg-[#cacaca55] 
          p-[1rem] 
          rounded-[5px] 
          flex 
          justify-between 
          items-center 
          cursor-pointer
          "
      >
        {title !== '' && place !== ''
          ? `${title} at ${place}`
          : title !== '' || place !== ''
          ? `${title} ${place}`
          : ''}
        <i
          className={`fi ${
            isToggled ? 'fi-rr-angle-small-down' : 'fi-rr-angle-small-up'
          } flex justify-end text-[1.3rem] grow`}
        ></i>
      </h1>

      <form className={`${isToggled ? 'hidden' : 'block mt-[1rem]'}`}>
        <fieldset
          className={`
                flex
                flex-col
                gap-[1rem] 
                text-[#4f4f4f]
                font-semibold
                [&>div]:flex
                [&>div]:gap-[1rem]
                [&>div>label]:w-full 
                [&>div>label>input]:w-full
                [&>div>label]:flex
                [&>div>label]:flex-col
                [&>div>label]:gap-[0.5rem]
                [&>div>label>input]:p-[0.8rem]
                [&>div>label>input]:rounded-lg
                [&>div>label>input]:text-[#393939]
                [&>div>label>input]:font-normal
                `}
        >
          <div>
            <Field
              title={'Job title'}
              type={'text'}
              length={45}
              onChange={(e) => {
                handleEvent(setTitle, e)
                titleOnChange && titleOnChange(e)
              }}
            />
            <Field
              title={'Employer'}
              type={'text'}
              length={30}
              onChange={(e) => {
                handleEvent(setPlace, e)
                placeOnChange && placeOnChange(e)
              }}
            />
          </div>

          <div>
            <Field title={'Start date'} type={'date'} />
            <Field title={'End date'} type={'date'} />
          </div>

          <p className="text-[#5a5a5a] mt-[0.5rem]">Description</p>

          <Textarea
            length={200}
            textholder={
              "e.g.: I created and implemented educational plans based on the children's interests and curiosities."
            }
          />
        </fieldset>
      </form>
    </div>
  )
}
