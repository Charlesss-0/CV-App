import { ContactInfo } from './contact'
import { AddSection } from './section'
import { SkillsList } from './skills'
import { CustomSectionPicker } from './custom'
import { AddJob } from './experience'
import { AddTraining } from './training'
import { useState } from 'react'
import { AddLink } from './links'

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
  description,
  prevEntity,
  prevQualification,
  trainingStart,
  trainingEnd,
  trainingDescription,
  label,
  url,
  skillOnChange,
  submit,
  entity,
  inputTitle
}) {
  const [prevJob, setPrevJob] = useState([])
  const [training, setTraining] = useState([])
  const [links, setLinks] = useState([])
  const [customList, setCustomList] = useState([])

  const handleCustomListChange = (newList) => {
    setCustomList(newList)
  }

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
            setPrevJob,
            prevJob,
            <AddJob
              expTitle={'Job title'}
              expTitleTwo={'Employer'}
              key={prevJob.length}
              prevJobTitle={prevJobTitle}
              prevEmployer={prevEmployer}
              start={startDate}
              end={endDate}
              description={description}
            />
          )
        }
        list={prevJob}
      />

      <AddSection
        title={'Training'}
        description={`If applicable, include your most recent academic achievements and dates here.`}
        btnText={'Add training'}
        event={() =>
          handleEvent(
            setTraining,
            training,
            <AddTraining
              key={training.length}
              prevEntity={prevEntity}
              prevQualification={prevQualification}
              start={trainingStart}
              end={trainingEnd}
              trainingDescription={trainingDescription}
            />
          )
        }
        list={training}
      />

      <AddSection
        title={'Links to social networks and websites'}
        description={`
          Now you can add links to the sites you want employers to see.
          It can be a link to your portfolio, your LinkedIn profile, or your personal website.
        `}
        btnText={'Add link'}
        event={() =>
          handleEvent(
            setLinks,
            links,
            <AddLink key={links.length} label={label} url={url} />
          )
        }
        list={links}
      />

      <AddSection
        title={'Competencies'}
        description={`
          Make a list of your personal skills and experience levels
          to see your strengths and optimize your keywords.
        `}
      />

      <SkillsList skillOnChange={skillOnChange} submit={submit} />

      <ul>
        {customList.map((section) => {
          return <li key={section.key}>{section.component}</li>
        })}
      </ul>

      <div>
        <AddSection
          title={'Add section'}
          description={
            'Add a custom section to showcase your strengths on other areas'
          }
        />

        <CustomSectionPicker
          customList={customList}
          onCustomListChange={handleCustomListChange}
          inputTitle={inputTitle}
          entity={entity}
        />
      </div>
    </div>
  )
}
