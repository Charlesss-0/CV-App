import { useState, useCallback } from 'react'

export function UserForm({
  inputTitle,
  entity,
  onStartChange,
  onEndChange,
  onDescriptionChange
}) {
  const [isToggled, setIsToggled] = useState(false)
  const [header, setHeader] = useState('')
  const [place, setPlace] = useState('')

  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

  const handleEvent = useCallback((setEvent, e) => {
    const { value } = e.target
    setEvent(value)
  }, [])

  const handleHeaderChange = useCallback(
    (e) => {
      handleEvent(setHeader, e)
      inputTitle(e)
    },
    [handleEvent, inputTitle]
  )

  const handlePlaceChange = useCallback(
    (e) => {
      handleEvent(setPlace, e)
      entity(e)
    },
    [handleEvent, entity]
  )

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
        {header !== '' && place !== ''
          ? `${header} at ${place}`
          : header !== '' || place !== ''
          ? `${header} ${place}`
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
              Title <br />
              <input type="text" maxLength={45} onChange={handleHeaderChange} />
            </label>

            <label>
              Place <br />
              <input type="text" maxLength={30} onChange={handlePlaceChange} />
            </label>
          </div>

          <div>
            <label>
              Start date <br />
              <input type="date" onChange={(e) => onStartChange(e)} />
            </label>

            <label>
              End date <br />
              <input type="date" onChange={(e) => onEndChange(e)} />
            </label>
          </div>

          <p className="text-[#5a5a5a] mt-[0.5rem]">Description</p>

          <textarea
            className="w-full resize-none rounded-lg h-[10em] p-[1rem] text-[#393939] font-normal"
            maxLength={200}
            placeholder="e.g.: I created and implemented educational plans based on the children's interests and curiosities."
            onChange={(e) => onDescriptionChange(e)}
          />
        </fieldset>
      </form>
    </div>
  )
}
