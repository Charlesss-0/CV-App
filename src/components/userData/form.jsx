import { useState } from 'react'
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
  gap: 1rem;
  color: #4f4f4f;
  font-weight: 600;

  & > div {
    display: flex;
    gap: 1rem;

    & > label {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

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

export function UserForm({ fieldOne, fieldTwo }) {
  const [isToggled, setIsToggled] = useState(true)
  const [formState, setFormState] = useState({
    title: '',
    entity: ''
  })

  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

  const handleChange = (e, name) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: e.target.value
    }))
  }

  return (
    <Form>
      <Toggle onClick={handleToggle}>
        {formState.title !== '' && formState.entity !== ''
          ? `${formState.title} at ${formState.entity}`
          : formState.title !== '' || formState.entity !== ''
          ? `${formState.title} ${formState.entity}`
          : ''}
        <i
          className={`fi ${
            isToggled ? 'fi-rr-angle-small-down' : 'fi-rr-angle-small-up'
          } flex justify-end text-[1.3rem] grow`}
        ></i>
      </Toggle>

      <form className={`${isToggled ? 'hidden' : 'block mt-[1rem]'}`}>
        <Fieldset>
          <div>
            {fieldOne.map((field) => (
              <label key={field.id}>
                {field.label} <br />
                <input
                  type={field.type}
                  maxLength={field.maxLength}
                  onChange={(e) => handleChange(e, field.name)}
                />
              </label>
            ))}
          </div>

          <div>
            {fieldTwo.map((field) => (
              <label key={field.id}>
                {field.label} <br />
                <input type={field.type} />
              </label>
            ))}
          </div>

          <p className="text-[#5a5a5a] mt-[0.5rem]">Description</p>

          <textarea
            className="w-full resize-none rounded-lg h-[10em] p-[1rem] text-[#393939] font-normal"
            maxLength={200}
            placeholder="e.g.: I created and implemented educational plans based on the children's interests and curiosities."
          />
        </Fieldset>
      </form>
    </Form>
  )
}
