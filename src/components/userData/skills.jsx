import { useState } from 'react'
import { AddSection } from './section'

export function SkillsList() {
  const [skills, setSkills] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isToggle, setIsToggle] = useState(false)

  const handleToggle = () => {
    setIsToggle(!isToggle)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (inputValue.trim() !== '') {
      setSkills((prev) => [...prev, inputValue])
      setInputValue('')
      setIsToggle(false)
    }
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
                bg-[#F5F7F8] 
                border-solid border-[1px] border-[#afafaf]
                p-[0.5rem] 
                px-[1rem] 
                mb-[1rem]
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
          </li>
        ))}
      </ul>

      {isToggle ? (
        <form onSubmit={handleSubmit} className="mt-[1rem]">
          <label className="flex gap-[0.5rem] mb-[1rem]">
            <input
              type="text"
              className="bg-[transparent] border-[#afafaf] border p-[0.3rem] rounded-lg grow"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
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

      <AddSection btnText={'Add competition'} event={handleToggle} />
    </>
  )
}
