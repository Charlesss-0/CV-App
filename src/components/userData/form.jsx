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

export function UserForm(props) {
  const { title, titleTwo, start, end } = props

  const [isToggled, setIsToggled] = useState(true)
  const [header, setHeader] = useState('')
  const [entity, setEntity] = useState('')

  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

  const handleChange = (e, setEvent) => {
    setEvent(e.target.value)
  }

  return (
    <Form>
      <Toggle onClick={handleToggle}>
        {header !== '' && entity !== ''
          ? `${header} at ${entity}`
          : header !== '' || entity !== ''
          ? `${header} ${entity}`
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
            <label>
              {title} <br />
              <input
                type="text"
                maxLength={50}
                onChange={(e) => handleChange(e, setHeader)}
              />
            </label>

            <label>
              {titleTwo} <br />
              <input
                type="text"
                maxLength={50}
                onChange={(e) => handleChange(e, setEntity)}
              />
            </label>
          </div>

          <div>
            <label>
              {start} <br />
              <input type="date" />
            </label>

            <label>
              {end} <br />
              <input type="date" />
            </label>
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
