import { useState } from 'react'

const FORM_STYLES = `
    border-solid 
    border 
    border-[#afafaf] 
    rounded-[10px] 
    p-[0.5rem] 
    mb-[1rem]
`

const TOGGLE_STYLES = `
    bg-[#cacaca55] 
    p-[1rem] 
    rounded-[5px] 
    flex 
    justify-between 
    items-center 
    hover:cursor-pointer 
    hover:bg-[#cacaca88]
    transition-all 
    delay-[.05s] 
    ease-in-out
`

const FIELD_STYLES = `
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
`

export function UserForm({ fieldOne, fieldTwo }) {
  const [isToggled, setIsToggled] = useState(false)
  const [title, setTitle] = useState('')
  const [entity, setEntity] = useState('')

  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handlePlaceChange = (e) => {
    setEntity(e.target.value)
  }

  return (
    <div className={FORM_STYLES}>
      <h1 onClick={handleToggle} className={TOGGLE_STYLES}>
        {title !== '' && entity !== ''
          ? `${title} at ${entity}`
          : title !== '' || entity !== ''
          ? `${title} ${entity}`
          : ''}
        <i
          className={`fi ${
            isToggled ? 'fi-rr-angle-small-down' : 'fi-rr-angle-small-up'
          } flex justify-end text-[1.3rem] grow`}
        ></i>
      </h1>

      <form className={`${isToggled ? 'hidden' : 'block mt-[1rem]'}`}>
        <fieldset className={FIELD_STYLES}>
          <div>
            {fieldOne.map((field) => (
              <label key={field.name}>
                {field.label} <br />
                <input
                  type={field.type}
                  maxLength={field.maxLength}
                  onChange={(e) => {
                    if (field.name === 'title') {
                      handleTitleChange(e)
                    } else if (field.name === 'place') {
                      handlePlaceChange(e)
                    }
                  }}
                />
              </label>
            ))}
          </div>

          <div>
            {fieldTwo.map((field) => (
              <label key={field.name}>
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
        </fieldset>
      </form>
    </div>
  )
}
