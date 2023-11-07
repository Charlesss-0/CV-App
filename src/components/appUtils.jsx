/* eslint-disable react/prop-types */

// Renders a section including header, description and the option to add more content
export function Section({ header, description }) {
  return (
    <>
      <Header text={header} />
      <Desc text={description} />
    </>
  )
}

// Renders header for a section content
export function Header({ text }) {
  return <h1 className="text-[1.6rem] mt-[2rem] font-semibold">{text}</h1>
}

// Renders description for a section content
export function Desc({ text }) {
  return <p className="mb-[1.5rem] text-[#5a5a5a]">{text}</p>
}

// Renders add button for a section content
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

// Renders a list of skills and the option to add more skills
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

// Renders the custom section where you can choose if you want to add another section to the cv
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

export function Field({ title, type, length, onChange }) {
  return (
    <label>
      {title} <br />
      <input type={type} maxLength={length} onChange={onChange} />
    </label>
  )
}

export function AddNewForm() {
  return (
    <div className="border-solid border-2 border-black p-[0.5rem]">
      <h1 className="border-solid border-2 border-black p-[1rem] mb-[0.5rem]">
        Experiences
      </h1>

      <form>
        <fieldset
          className="
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
                "
        >
          <div>
            <Field title={'Job title'} type={'text'} length={30} />
          </div>
        </fieldset>
      </form>
    </div>
  )
}
