/* eslint-disable react/prop-types */
import { useState } from 'react'

// AddJob component allows the user to add new experiences.
export function AddJob({
  prevJobTitle,
  prevEmployer,
  start,
  end,
  description
}) {
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
              <input
                type="text"
                maxLength={45}
                onChange={(e) => {
                  handleEvent(setTitle, e)
                  prevJobTitle(e)
                }}
              />
            </label>

            <label>
              Employer <br />
              <input
                type="text"
                maxLength={30}
                onChange={(e) => {
                  handleEvent(setPlace, e)
                  prevEmployer(e)
                }}
              />
            </label>
          </div>

          <div>
            <label>
              Start date <br />
              <input type="date" onChange={(e) => start(e)} />
            </label>

            <label>
              End date <br />
              <input type="date" onChange={(e) => end(e)} />
            </label>
          </div>

          <p className="text-[#5a5a5a] mt-[0.5rem]">Description</p>

          <textarea
            className="w-full resize-none rounded-lg h-[10em] p-[1rem] text-[#393939] font-normal"
            maxLength={200}
            placeholder="e.g.: I created and implemented educational plans based on the children's interests and curiosities."
            onChange={description}
          />
        </fieldset>
      </form>
    </div>
  )
}
