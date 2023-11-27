// import styled from 'styled-components'
import { useState } from 'react'
import { Button } from './section'

// Component for displaying a list of skills with an option to add new skills
export function SkillsList() {
  // State variables to manage skills, input value, and toggle for showing/hiding the input form
  const [skills, setSkills] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isToggled, setIsToggled] = useState(false)

  // Function to handle form submission when adding a new skill
  const handleSubmit = (e) => {
    e.preventDefault()

    // Check if the input value is not empty
    if (inputValue.trim() !== '') {
      // Update the skills array with the new skill
      setSkills((prev) => [...prev, inputValue])
      // Reset the input value and hide the input form
      setInputValue('')
      setIsToggled(false)
    }
  }

  // Function to handle changes in the input field for adding new skills
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <>
      <ul
        className="
            flex
            flex-wrap
            gap-2
            "
      >
        {skills.map((skill, index) => (
          <li
            key={index}
            className="
                  bg-[#f5f7f8]
                  border-solid border-[1px] border-[#afafaf]
                  p-[0.5rem]
                  px-[1rem]
                  mb-[1rem]
                  rounded-lg
                  flex
                  items-center
                  gap-[0.5rem]
                  hover:cursor-pointer
                  hover:text-[#0174be]
                  transition-all delay-[.05s] ease-in-out
                "
          >
            {skill}
          </li>
        ))}
      </ul>

      {/* Conditional rendering of the input form */}
      {isToggled ? (
        <form
          onSubmit={(e) => {
            handleSubmit(e)
            // submit(e)
          }}
          className="mt-[1rem]"
        >
          <label className="flex gap-[0.5rem] mb-[1rem]">
            <input
              type="text"
              className="bg-[transparent] border-[#afafaf] border p-[0.3rem] rounded-lg grow"
              onChange={(e) => {
                handleChange(e)
                // skillOnChange(e)
              }}
            />
            {/* Button to submit the form and add the new skill */}
            <button
              type="submit"
              className="bg-[#afafaf55] px-[1rem] rounded-lg"
            >
              Add
            </button>
          </label>
        </form>
      ) : (
        ''
      )}

      {/* Button component for toggling the input form visibility */}
      <Button
        onClick={() => {
          setIsToggled(!isToggled)
        }}
      >
        <i className="fi fi-rr-plus-small flex"></i>
        Add skill
      </Button>
    </>
  )
}
