import React, { useState } from 'react'
import styled from 'styled-components'

const Form = styled.div`
  border: solid 1px;
  border-color: #afafaf;
  border-radius: 10px;
  padding: 0.5rem;
  margin-bottom: 1rem;
`

const Toggle = styled.h1`
  background: #cacaca55;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.05s ease-in-out;

  &:hover {
    background: #cacaca88;
  }
`

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  color: #4f4f4f;
  font-weight: 600;

  & > div {
    display: flex;
    gap: 1rem;

    & > label {
      width: 100%;
      display: flex;
      flex-direction: column;

      & > input {
        width: 100%;
        padding: 0.8rem;
        border-radius: 10px;
        color: #393939;
        font-weight: 400;
      }
    }
  }
`

export function FormTwo({ fields }) {
  const [isToggled, setIsToggled] = useState(true)
  const [header, setHeader] = useState('')
  const [entity, setEntity] = useState('')

  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

  const handleChange = (e, setEvent) => {
    setEvent(e.target.value)
  }

  const handleTitle = () => {
    fields.map((field) => {
      if (
        field.title === 'Job title' &&
        field.titleTwo === 'Employer' &&
        header !== '' &&
        entity !== ''
      ) {
        return `${header} at ${entity}`
      } else if (
        field.title === 'Training' &&
        field.titleTwo === 'Qualification' &&
        header !== '' &&
        entity !== ''
      ) {
        return `${entity} in ${header}`
      } else if (field.title === 'Label') {
        return `${header}`
      } else {
        return `${header} ${entity}`
      }
    })
  }

  return (
    <Form>
      <Toggle onClick={handleToggle}>
        {handleTitle()}
        <i
          className={`fi ${
            isToggled ? 'fi-rr-angle-small-down' : 'fi-rr-angle-small-up'
          } flex justify-end text-[1.3rem] grow`}
        ></i>
      </Toggle>

      <form className={isToggled ? 'hidden' : 'block mt-[1rem]'}>
        <Fieldset
          className={fields.map((field) =>
            field.description && field.start && field.end ? 'gap-[1.1rem]' : ''
          )}
        >
          <div>
            {fields.map((field, index) => (
              <React.Fragment key={index}>
                <label>
                  {field.title} <br />
                  <input
                    type="text"
                    maxLength={50}
                    onChange={(e) => handleChange(e, setHeader)}
                  />
                </label>

                <label>
                  {field.titleTwo} <br />
                  <input
                    type="text"
                    maxLength={50}
                    onChange={(e) => handleChange(e, setEntity)}
                  />
                </label>
              </React.Fragment>
            ))}
          </div>

          <div>
            {fields.map((field, index) =>
              field.start && field.end ? (
                <React.Fragment key={index}>
                  <label>
                    {field.end} <br />
                    <input type="date" />
                  </label>

                  <label>
                    {field.end} <br />
                    <input type="date" />
                  </label>
                </React.Fragment>
              ) : null
            )}
          </div>

          {fields.map(
            (field, index) =>
              field.description && (
                <React.Fragment key={index}>
                  <p className="text-[#5a5a5a] mt-[0.5rem]">
                    {field.description}
                  </p>

                  <textarea
                    className="w-full resize-none rounded-lg h-[10em] p-[1rem] text-[#393939] font-normal"
                    maxLength={200}
                    placeholder="e.g.: I created and implemented educational plans based on the children's interests and curiosities."
                  />
                </React.Fragment>
              )
          )}
        </Fieldset>
      </form>
    </Form>
  )
}
