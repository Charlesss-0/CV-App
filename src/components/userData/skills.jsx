// import styled from 'styled-components'
import { useState } from 'react'
import { Button } from './section'

export function SkillsList() {
  const [skills, setSkills] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isToggled, setIsToggled] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputValue.trim() !== '') {
      setSkills((prev) => [...prev, inputValue])
      setInputValue('')
      setIsToggled(false)
    }
  }

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
        {Array.isArray(skills)
          ? skills.map((skill, index) => (
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
            ))
          : null}
      </ul>

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
