import { useState } from 'react'
import { AddSection } from './section'

export function SkillsList() {
  const [skills, setSkills] = useState([
    'Adaptability',
    'Visual Design Skills',
    'Database Management',
    'Knowledgable in User Interface/User Experience',
    'Javascript',
    'React',
    'HTML',
    'CSS'
  ])

  const [isToggle, setIsToggle] = useState(false)

  const handleToggle = () => {
    setIsToggle(true)
  }

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

      {isToggle ? (
        <label className="flex gap-[0.5rem] mb-[1rem]">
          <input
            type="text"
            className="bg-[transparent] border-[#afafaf] border p-[0.3rem] rounded-lg grow"
          />
          <button className="bg-[#afafaf55] px-[1rem] rounded-lg">Add</button>
        </label>
      ) : (
        ''
      )}

      <AddSection btnText={'Add competition'} event={handleToggle} />
    </>
  )
}
