/* eslint-disable react/prop-types */
import { ContactInfo } from './contact'
import { AddSection } from './section'
import { SkillsList } from './skills'
import { AddCustomSection } from './custom'
import { AddNewForm } from './experience'
import { useState } from 'react'

export function Form({
  jobTitle,
  firstName,
  lastName,
  email,
  phone,
  city,
  country,
  profileDesc,
  prevJobTitle,
  prevEmployer,
  startDate,
  endDate,
  description
}) {
  const [experiences, setExperiences] = useState([])

  const handleEvent = (setEvent, arr, newArr) => {
    setEvent([...arr, newArr])
  }

  return (
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
      <ContactInfo
        jobTitle={jobTitle}
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        city={city}
        country={country}
        profileDesc={profileDesc}
      />

      <AddSection
        title={'Work Experience'}
        description={`
          Please indicate your relevant experience from the last 10 years and dates in this section.
          Start with the most recent position.
        `}
        btnText={'Add job'}
        event={() =>
          handleEvent(
            setExperiences,
            experiences,
            <AddNewForm
              key={experiences.length}
              prevJobTitle={prevJobTitle}
              prevEmployer={prevEmployer}
              start={startDate}
              end={endDate}
              description={description}
            />
          )
        }
        list={experiences}
      />

      <AddSection
        title={'Training'}
        description={`If applicable, include your most recent academic achievements and dates here.`}
        btnText={'Add training'}
      />

      <AddSection
        title={'Links to social networks and websites'}
        description={`
          Now you can add links to the sites you want employers to see.
          It can be a link to your portfolio, your LinkedIn profile, or your personal website.
        `}
        btnText={'Add link'}
      />

      <AddSection
        title={'Competencies'}
        description={`
          Make a list of your personal skills and experience levels
          to see your strengths and optimize your keywords.
        `}
      />

      <SkillsList />

      <AddSection btnText={'Add competition'} />

      <div>
        <AddSection
          title={'Add section'}
          description={
            'Add a custom section to showcase your strengths on other areas'
          }
        />

        <AddCustomSection />
      </div>
    </div>
  )
}
