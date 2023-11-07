/* eslint-disable react/prop-types */

export function Section({ header, description, add }) {
  return (
    <>
      <Header text={header} />
      <Desc text={description} />
      <Add text={add} />
    </>
  )
}

export function Header({ text }) {
  return <h1 className="text-[1.6rem] mt-[2rem] font-semibold">{text}</h1>
}

export function Desc({ text }) {
  return <p className="mb-[1.5rem] text-[#5a5a5a]">{text}</p>
}

export function Add({ text }) {
  return (
    <p
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
                bg-[#afafaf5f] 
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
          key={sec}
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
