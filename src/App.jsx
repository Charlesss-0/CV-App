/* eslint-disable react/prop-types */
import './styles/App.css'
import { useState } from 'react'
import {
  Field,
  Section,
  Header,
  Desc,
  SkillsList,
  CustomSec,
  Add,
  AddNewForm,
  Textarea
} from './components/appUtils'
import { ResumeTemplate } from './components/template'

export default function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [profileDesc, setProfileDesc] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const cityCountry =
    city !== '' && country !== ''
      ? `${city}, ${country}`
      : city !== '' || country !== ''
      ? `${city} ${country}`
      : ''
  const [forms, setForm] = useState([])
  const [prevJobPosition, setprevJobPosition] = useState([])
  const [prevJobName, setPrevJobName] = useState([])

  const handlePrev = (setEvent, arr, e) => {
    setEvent([...arr, e.target.value])
  }

  const handleEvent = (setEvent, e) => {
    setEvent(e.target.value)
  }

  const addForm = () => {
    setForm([
      ...forms,
      <AddNewForm
        key={forms.length}
        titleOnChange={(e) =>
          handlePrev(setprevJobPosition, prevJobPosition, e)
        }
        placeOnChange={(e) => handlePrev(setPrevJobName, prevJobName, e)}
      />
    ])
  }

  console.log(prevJobPosition)
  console.log(prevJobName)

  return (
    <>
      <div className="flex">
        <div
          className="
            bg-[#efefef] 
            w-[80vw] 
            h-screen 
            rounded-e-[15px] 
            p-[2rem] 
            flex 
            flex-col 
            overflow-auto
            select-none
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
                <Field
                  title={'Job title'}
                  type={'text'}
                  length={30}
                  onChange={(e) => handleEvent(setJobTitle, e)}
                />
              </div>

              <div>
                <Field
                  title={'First name'}
                  type={'text'}
                  length={20}
                  onChange={(e) => handleEvent(setFirstName, e)}
                />

                <Field
                  title={'Last name'}
                  type={'text'}
                  length={20}
                  onChange={(e) => handleEvent(setLastName, e)}
                />
              </div>

              <div>
                <Field
                  title={'E-mail'}
                  type={'email'}
                  length={30}
                  onChange={(e) => handleEvent(setEmail, e)}
                />

                <Field
                  title={'Phone'}
                  type={'tel'}
                  length={15}
                  onChange={(e) => handleEvent(setPhone, e)}
                />
              </div>

              <div>
                <Field
                  title={'City'}
                  type={'text'}
                  onChange={(e) => handleEvent(setCity, e)}
                />

                <Field
                  title={'Country'}
                  type={'text'}
                  onChange={(e) => handleEvent(setCountry, e)}
                />
              </div>
            </fieldset>

            <fieldset>
              <Header text={'Professional profile'} />

              <Desc
                text={
                  'Add two of three sentences about your general experience.'
                }
              />

              <Textarea
                onChange={(e) => handleEvent(setProfileDesc, e)}
                length={200}
                textholder={
                  'pe, science teacher passionate about his profession with more than 8 years of experience.'
                }
              />
            </fieldset>
          </form>

          <Section
            header={'Work experience'}
            description={
              'Please indicate your relevant experience from the last 10 years and dates in this section. Start with the most recent position.'
            }
          />

          {forms.map((form, index) => (
            <div key={index}>{form}</div>
          ))}
          <Add text={'Add job'} onClick={addForm} />

          <Section
            header={'Training'}
            description={
              'If applicable, include your most recent academic achievements and dates here.'
            }
          />

          <Add text={'Add training'} />

          <Section
            header={'Links to social networks and websites'}
            description={`Now you can add links to the sites you want employers to see. 
              It can be a link to your portfolio, your LinkedIn profile, or your personal website.`}
          />

          <Add text={'Add link'} />

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

            <Desc
              text={
                'Add a costum section to showcase your strengths on other areas.'
              }
            />

            <CustomSec />
          </div>
        </div>

        <ResumeTemplate
          firstName={firstName}
          lastName={lastName}
          jobTitle={jobTitle}
          profileDescription={profileDesc}
          email={email}
          phone={phone}
          cityCountry={cityCountry}
          prevJobPos={prevJobPosition}
          prevJobName={prevJobName}
        />
      </div>
    </>
  )
}
