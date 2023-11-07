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
import { CvPage } from './components/doc'

export default function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const fullName = `${firstName} ${lastName}`
  const storedJobTitle = jobTitle
  const storedEmail = email
  const storedPhone = phone
  const cityCountry =
    city !== '' && country !== ''
      ? `${city}, ${country}`
      : city !== '' || country !== ''
      ? `${city} ${country}`
      : ''

  const handleEvent = (setEvent, e) => {
    setEvent(e.target.value)
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
                  Job title <br />
                  <input
                    type="text"
                    maxLength={30}
                    onChange={(e) => handleEvent(setJobTitle, e)}
                  />
                </label>
              </div>

              <div>
                <label>
                  First Name <br />
                  <input
                    type="text"
                    maxLength={20}
                    onChange={(e) => handleEvent(setFirstName, e)}
                  />
                </label>

                <label>
                  Last Name <br />
                  <input
                    type="text"
                    maxLength={20}
                    onChange={(e) => handleEvent(setLastName, e)}
                  />
                </label>
              </div>

              <div>
                <label>
                  E-mail <br />
                  <input
                    type="email"
                    maxLength={30}
                    onChange={(e) => handleEvent(setEmail, e)}
                  />
                </label>

                <label>
                  Phone <br />
                  <input
                    type="tel"
                    maxLength={15}
                    onChange={(e) => handleEvent(setPhone, e)}
                  />
                </label>
              </div>

              <div>
                <label>
                  City <br />
                  <input
                    type="text"
                    onChange={(e) => handleEvent(setCity, e)}
                  />
                </label>

                <label>
                  Country <br />
                  <input
                    type="text"
                    onChange={(e) => handleEvent(setCountry, e)}
                  />
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

        <CvPage
          fullName={fullName}
          jobTitle={storedJobTitle}
          email={storedEmail}
          phone={storedPhone}
          cityCountry={cityCountry}
        />
      </div>
    </>
  )
}
