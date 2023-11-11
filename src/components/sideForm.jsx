/* eslint-disable react/prop-types */
import { useState } from 'react'

export function Form() {
  // State variables for job history and user input in each job form
  const [forms, setForm] = useState([])
  const [prevJobPosition, setprevJobPosition] = useState([])
  const [prevJobName, setPrevJobName] = useState([])

  const handleEvent = (setEvent, e) => {
    setEvent(e.target.value)
  }

  const handleAddJob = (setEvent, arr, e) => {
    setEvent([...arr, e.target.value])
  }

  const addForm = () => {
    setForm([
      ...forms,
      <AddNewForm
        key={forms.length}
        titleOnChange={(e) =>
          handleAddJob(setprevJobPosition, prevJobPosition, e)
        }
        placeOnChange={(e) => handleAddJob(setPrevJobName, prevJobName, e)}
      />
    ])
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
      <form className="flex flex-col gap-[2rem]">
        <h1 className="text-[1.6rem] mt-[2rem] font-semibold">
          Personal Information
        </h1>

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
              Job Title <br />
              <input type="text" maxLength={30} />
            </label>
          </div>

          <div>
            <label>
              First Name <br />
              <input type="text" maxLength={20} />
            </label>

            <label>
              Last Name <br />
              <input type="text" maxLength={20} />
            </label>
          </div>

          <div>
            <label>
              E-mail <br />
              <input type="email" maxLength={30} />
            </label>

            <label>
              Phone <br />
              <input type="tel" maxLength={15} />
            </label>
          </div>

          <div>
            <label>
              City <br />
              <input type="text" />
            </label>

            <label>
              Country <br />
              <input type="text" />
            </label>
          </div>
        </fieldset>

        <fieldset>
          <h1 className="text-[1.6rem] mt-[2rem] font-semibold">
            Professional profile
          </h1>

          <p className="mb-[1.5rem] text-[#5a5a5a]">
            Add two or three sentences about your personal experiences.
          </p>

          <textarea
            className="w-full resize-none rounded-lg h-[10em] p-[1rem] text-[#393939] font-normal"
            maxLength={200}
            placeholder="pe, science teacher passionate about his profession with more than 8 years of experience."
          />
        </fieldset>
      </form>

      <h1 className="text-[1.5rem] text-[#5a5a5a]">Work Experience</h1>

      <p className="mb-[1.5rem] text-[#5a5a5a]">
        Please indicate your relevant experience from the last 10 years and
        dates in this section. Start with the most recent position.
      </p>

      {forms.map((form, index) => (
        <div key={index}>{form}</div>
      ))}
      <button
        className="
            flex
            items-center
            gap-1
            text-[#0174be]
            cursor-pointer
            hover:bg-[#afafaf55]
            p-[0.5rem]
            rounded-lg
            transition-all ease-in-out delay-100
        "
        onClick={addForm}
      >
        <i className="fi fi-rr-plus-small flex"></i>
        Add job
      </button>

      <h1 className="text-[1.5rem] text-[#5a5a5a]">Training</h1>

      <p className="mb-[1.5rem] text-[#5a5a5a]">
        If applicable, include your most recent academic achievements and dates
        here.
      </p>

      <button
        className="
            flex
            items-center
            gap-1
            text-[#0174be]
            cursor-pointer
            hover:bg-[#afafaf55]
            p-[0.5rem]
            rounded-lg
            transition-all ease-in-out delay-100
        "
      >
        <i className="fi fi-rr-plus-small flex"></i>
        Add training
      </button>

      <h1 className="text-[1.6rem] mt-[#5a5a5a5]">
        Links to social networks and websites
      </h1>

      <p className="mb-[1.5rem] text-[#5a5a5a]">
        Now you can add links to the sites you want employers to see. It can be
        a link to your portfolio, your LinkedIn profile, or your personal
        website.
      </p>

      <button
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
        Add link
      </button>

      <div>
        <h1 className="text-[1.6rem] mt-[2rem] font-semibold">Competencies</h1>

        <p className="mb-[1.5rem] text-[#5a5a5a]">
          Make a list of your professional skills and experience levels to see
          your strengths and optimize your keywords.
        </p>

        <SkillsList />
      </div>

      <div>
        <h1 className="text-[1.6rem] mt-[2rem] font-semibold">Add section</h1>

        <p className="mb-[1.5rem] text-[#5a5a5a]">
          Add a custom section to showcase your strengths on other areas.
        </p>

        <CustomSec />
      </div>
    </div>
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
      <button
        className="
            flex 
            items-center 
            gap-1 
            text-[#0174BE] 
            cursor-pointer 
            hover:bg-[#afafaf55] 
            p-[0.5rem] 
            rounded-lg
            transition-all ease-in-out delay-100
        "
      >
        <i className="fi fi-rr-plus-small flex"></i>
        Add competition
      </button>
    </>
  )
}

// CustomSec component renders a list of custom sections that can be added.
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

// AddNewForm component allows the user to add new experiences.
export function AddNewForm({ titleOnChange, placeOnChange }) {
  const [isToggled, setIsToggled] = useState(false)
  const [title, setTitle] = useState('')
  const [place, setPlace] = useState('')

  // Handle toggling the form visibility when the title is clicked.
  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

  const handleEvent = (setEvent, e) => {
    setEvent(e.target.value)
  }

  return (
    <div className="border-solid border border-[#afafaf] rounded-[10px] p-[0.5rem] mb-[1rem]">
      <h1
        onClick={handleToggle}
        className="
            bg-[#cacaca55] 
            p-[1rem] 
            rounded-[5px] 
            flex 
            justify-between 
            items-center 
            cursor-pointer
            "
      >
        {title !== '' && place !== ''
          ? `${title} at ${place}`
          : title !== '' || place !== ''
          ? `${title} ${place}`
          : ''}
        <i
          className={`fi ${
            isToggled ? 'fi-rr-angle-small-down' : 'fi-rr-angle-small-up'
          } flex justify-end text-[1.3rem] grow`}
        ></i>
      </h1>

      <form className={`${isToggled ? 'hidden' : 'block mt-[1rem]'}`}>
        <fieldset
          className={`
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
                  `}
        >
          <div>
            <label>
              Job Title <br />
              <input type="text" maxLength={45} />
            </label>

            <label>
              Employer <br />
              <input type="text" maxLength={30} />
            </label>
          </div>

          <div>
            <label>
              Start date <br />
              <input type="date" />
            </label>

            <label>
              End date <br />
              <input type="date" />
            </label>
          </div>

          <p className="text-[#5a5a5a] mt-[0.5rem]">Description</p>

          <textarea
            className="w-full resize-none rounded-lg h-[10em] p-[1rem] text-[#393939] font-normal"
            maxLength={200}
            placeholder="e.g.: I created and implemented educational plans based on the children's interests and curiosities."
          />
        </fieldset>
      </form>
    </div>
  )
}
