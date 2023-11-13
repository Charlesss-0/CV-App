/* eslint-disable react/prop-types */
import './styles/App.css'
import { Form } from './components/userData/sideForm'
import { ResumeTemplate } from './components/resume/resume'
import { useState } from 'react'

export default function App() {
  // State variables for user input
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [jobTitle, setJobTitle] = useState('')
  const [profileDesc, setProfileDesc] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [prevJobPosition, setPrevJobPosition] = useState([])
  const [prevJobName, setPrevJobName] = useState([])

  const cityCountry =
    city !== '' && country !== ''
      ? `${city}, ${country}`
      : city !== '' || country !== ''
      ? `${city} ${country}`
      : ''

  // State variables for job history and user input in each job form
  // const [forms, setForm] = useState([])

  const handleEvent = (setEvent, e) => {
    setEvent(e.target.value)
  }

  return (
    <main className="flex">
      <Form
        jobTitle={(e) => handleEvent(setJobTitle, e)}
        firstName={(e) => handleEvent(setFirstName, e)}
        lastName={(e) => handleEvent(setLastName, e)}
        email={(e) => handleEvent(setEmail, e)}
        phone={(e) => handleEvent(setPhone, e)}
        city={(e) => handleEvent(setCity, e)}
        country={(e) => handleEvent(setCountry, e)}
        profileDesc={(e) => handleEvent(setProfileDesc, e)}
      />

      <ResumeTemplate
        firstName={firstName}
        lastName={lastName}
        jobTitle={jobTitle}
        profileDescription={profileDesc}
        email={email}
        phone={phone}
        cityCountry={cityCountry}
        prevJobPos={prevJobPosition.map((job, index) => (
          <div key={index}>{job}</div>
        ))}
        prevJobName={prevJobName.map((job, index) => (
          <div key={index}>{job}</div>
        ))}
      />
    </main>
  )
}
