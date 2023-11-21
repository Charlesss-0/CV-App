/* eslint-disable react/prop-types */
import { useState } from 'react'

// AddLink component allows the user to add new experiences.
export function AddLink({ label, url }) {
  const [isToggled, setIsToggled] = useState(false)
  const [labelType, setLabelType] = useState('')

  // Handle toggling the form visibility when the labelType is clicked.
  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

  const handleChange = (setEvent, e) => {
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
            hover:cursor-pointer
            "
      >
        {labelType}
        <i
          className={`fi ${
            isToggled ? 'fi-rr-angle-small-down' : 'fi-rr-angle-small-up'
          } flex justify-end text-[1.3rem] grow`}
        ></i>
      </h1>

      <form className={`${isToggled ? 'hidden' : 'block mt-[1rem]'}`}>
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
              Label <br />
              <input
                type="text"
                maxLength={45}
                onChange={(e) => {
                  handleChange(setLabelType, e)
                  label(e)
                }}
              />
            </label>

            <label>
              Link <br />
              <input type="text" maxLength={30} onChange={url} />
            </label>
          </div>
        </fieldset>
      </form>
    </div>
  )
}
