/* eslint-disable react/prop-types */
import { useState } from 'react'
import './styles/App.css'

export default function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const fullName = `${firstName} ${lastName}`
  const emailPhone = `${email} ${phone}`

  const handleFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const handleLastName = (e) => {
    setLastName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  return (
    <>
      <div className="flex">
        {/* FORM SECTION START */}
        <div
          className="
            bg-[#efefef] 
            w-[70vw] 
            h-screen 
            rounded-e-[15px] 
            p-[2rem] 
            flex 
            flex-col 
            overflow-auto
            "
          id="cv-form-section"
        >
          <form className="flex flex-col gap-[2rem]">
            <Header text={'Personal information'} />

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
                <label>
                  First Name <br />
                  <input type="text" onChange={handleFirstName} />
                </label>

                <label>
                  Last Name <br />
                  <input type="text" onChange={handleLastName} />
                </label>
              </div>

              <div>
                <label>
                  E-mail <br />
                  <input type="email" onChange={handleEmail} />
                </label>

                <label>
                  Phone <br />
                  <input type="tel" onChange={handlePhone} />
                </label>
              </div>

              <div>
                <label>
                  Country <br />
                  <input type="text" />
                </label>

                <label>
                  City <br />
                  <input type="text" />
                </label>
              </div>
            </fieldset>

            <fieldset>
              <Header text={'Professional profile'} />

              <Desc
                text={
                  'Add two of three sentences about your general experience.'
                }
              />

              <textarea
                className="w-full resize-none rounded-lg h-[10em] p-[1rem] text-[#393939]"
                placeholder="pe, science teacher passionate about his profession with more than 8 years of experience."
              />
            </fieldset>
          </form>

          <Section
            header={'Work experience'}
            description={
              'Please indicate your relevant experience from the last 10 years and dates in this section. Start with the most recent position.'
            }
            add={'Add job'}
          />

          <Section
            header={'Training'}
            description={
              'If applicable, include your most recent academic achievements and dates here.'
            }
            add={'Add training'}
          />

          <Section
            header={'Links to social networks and websites'}
            description={`Now you can add links to the sites you want employers to see. 
              It can be a link to your portfolio, your LinkedIn profile, or your personal website.`}
            add={'Add link'}
          />

          <div>
            <Header text={'Competencies'} />

            <Desc
              text={
                'Make a list of your professional skills and experience levels to see your strengths and optimize your keywords.'
              }
            />

            <SkillsList />
          </div>
        </div>
        {/* FORM SECTION END */}

        <div className="w-full h-screen p-[5em] overflow-auto">
          <div className="bg-white w-[210mm] h-[297mm] mx-auto shadow-xl rounded-lg">
            {fullName}
            {emailPhone}
          </div>
        </div>
      </div>
    </>
  )
}

function Section({ header, description, add }) {
  return (
    <div>
      <Header text={header} />
      <Desc text={description} />
      <Add text={add} />
    </div>
  )
}

function Header({ text }) {
  return <h1 className="text-[1.6rem] mt-[2rem] font-semibold">{text}</h1>
}

function Desc({ text }) {
  return <p className="mb-[1.5rem] text-[#5a5a5a]">{text}</p>
}

function Add({ text }) {
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

function SkillsList() {
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
