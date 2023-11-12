/* eslint-disable react/prop-types */
import './styles/App.css'
import { useState } from 'react'
import { Form } from './components/userData/sideForm'
import { ResumeTemplate } from './components/resume/template'

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

  // Computed variable to format city and country
  const cityCountry =
    city !== '' && country !== ''
      ? `${city}, ${country}`
      : city !== '' || country !== ''
      ? `${city} ${country}`
      : ''

  // State variables for job history and user input in each job form
  // const [forms, setForm] = useState([])
  const [prevJobPosition, setprevJobPosition] = useState([])
  const [prevJobName, setPrevJobName] = useState([])

  return (
    <main className="flex">
      <Form />

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
