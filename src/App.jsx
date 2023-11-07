/* eslint-disable react/prop-types */
import './styles/App.css'
import { useState } from 'react'
import {
  Section,
  Header,
  Desc,
  SkillsList,
  CustomSec
} from './components/utils'
import { Blank } from './components/blank'

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

          <div>
            <Header text={'Add Section'} />

            <CustomSec />
          </div>
        </div>

        <Blank fullName={fullName} emailPhone={emailPhone} />
      </div>
    </>
  )
}
