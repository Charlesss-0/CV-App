import { Fieldset } from './form'
import React from 'react'

export function ContactInfo({ fields }) {
  return (
    <form className="flex flex-col gap-[2rem]">
      <h1 className="text-[1.6rem] mt-[2rem] font-semibold">
        Personal Information
      </h1>

      <Fieldset>
        {fields.map((field, index) => (
          <React.Fragment key={index}>
            <div>
              <label>
                Job Title <br />
                <input
                  type="text"
                  maxLength={30}
                  onChange={(e) => field.jobTitle(e)}
                />
              </label>
            </div>

            <div>
              <label>
                First Name <br />
                <input
                  type="text"
                  maxLength={20}
                  onChange={(e) => field.firstName(e)}
                />
              </label>

              <label>
                Last Name <br />
                <input
                  type="text"
                  maxLength={20}
                  onChange={(e) => field.lastName(e)}
                />
              </label>
            </div>

            <div>
              <label>
                E-mail <br />
                <input
                  type="email"
                  maxLength={30}
                  onChange={(e) => field.email(e)}
                />
              </label>

              <label>
                Phone <br />
                <input
                  type="tel"
                  maxLength={15}
                  onChange={(e) => field.phone(e)}
                />
              </label>
            </div>

            <div>
              <label>
                City <br />
                <input type="text" onChange={(e) => field.city(e)} />
              </label>

              <label>
                Country <br />
                <input type="text" onChange={(e) => field.country(e)} />
              </label>
            </div>
          </React.Fragment>
        ))}
      </Fieldset>

      <fieldset>
        {fields.map((field, index) => (
          <React.Fragment key={index}>
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
              onChange={(e) => field.profileDesc(e)}
            />
          </React.Fragment>
        ))}
      </fieldset>
    </form>
  )
}
