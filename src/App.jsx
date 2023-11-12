/* eslint-disable react/prop-types */
import './styles/App.css'
import { signal } from '@preact/signals-react'
import { Form } from './components/userData/sideForm'
import { ResumeTemplate } from './components/resume/resume'

export default function App() {
  // State variables for user input
  const firstName = signal('')
  const lastName = signal('')
  const jobTitle = signal('')
  const profileDesc = signal('')
  const email = signal('')
  const phone = signal('')
  const country = signal('')
  const city = signal('')

  const cityCountry =
    city.value !== '' && country.value !== ''
      ? `${city.value}, ${country.value}`
      : city.value !== '' || country.value !== ''
      ? `${city.value} ${country.value}`
      : ''

  // State variables for job history and user input in each job form
  // const [forms, setForm] = useState([])
  const prevJobPosition = signal([])
  const prevJobName = signal([])

  return (
    <main className="flex">
      <Form />

      <ResumeTemplate
        firstName={firstName.value}
        lastName={lastName.value}
        jobTitle={jobTitle.value}
        profileDescription={profileDesc.value}
        email={email.value}
        phone={phone.value}
        cityCountry={cityCountry}
        prevJobPos={prevJobPosition.value.map((job, index) => (
          <div key={index}>{job}</div>
        ))}
        prevJobName={prevJobName.value.map((job, index) => (
          <div key={index}>{job}</div>
        ))}
      />
    </main>
  )
}
