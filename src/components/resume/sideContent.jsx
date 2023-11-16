/* eslint-disable react/prop-types */
import { useState, useRef } from 'react'
import { Contact, Title } from './helpers'

export function SideContent({ email, phone, cityCountry, skills, label }) {
  const fileInputRef = useRef(null)
  const [selectedFileName, setSelectedFileName] = useState(null)
  const [imageUploaded, setImageUploaded] = useState(false)

  const handleFileUpload = () => {
    fileInputRef.current.click()
  }

  const handleFileSelected = (e) => {
    const selectedFile = e.target.files[0]

    setSelectedFileName(selectedFile)
    setImageUploaded(true)
  }

  return (
    <div
      className="
        bg-white
        text-[#2f2f2f]
        border-solid 
        border-2 
        border-[#afafaf]
        rounded-[5px]
        w-[20em] 
        h-[90%] 
        absolute 
        left-[2em] 
        top-[50%]
        translate-y-[-50%]
        "
    >
      <div
        className="
            bg-[aliceblue]
            w-[78%] 
            h-[15em] 
            m-auto 
            mt-[2.5em] 
            rounded-full
            grid
            place-content-center
            overflow-hidden
            "
      >
        {!imageUploaded && (
          <>
            <i
              onClick={handleFileUpload}
              className="
                fi fi-rr-picture 
                text-[2rem] 
                flex 
                p-[1rem]
                rounded-full
                transition-all ease-in-out delay-[.05s]
                cursor-pointer
                hover:bg-[#efefefaf]
                hover:border
                hover:border-solid
                hover:border-[#afafaf]
                "
            ></i>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileSelected}
            />
          </>
        )}

        {selectedFileName && (
          <img src={URL.createObjectURL(selectedFileName)} />
        )}
      </div>

      {email ? <Title text={'Contact'} /> : ''}

      <div className="w-full p-[1rem] flex flex-col gap-1">
        <Contact type={email !== '' ? 'email' : ''} info={email} />
        <Contact type={phone !== '' ? 'phone' : ''} info={phone} />
        <Contact
          type={cityCountry !== '' ? 'nationality' : ''}
          info={cityCountry}
        />
      </div>

      {skills ? <Title text={'Skills'} /> : ''}
      <div>{skills}</div>

      {label ? <Title text={'Links'} /> : ''}
      <div className="px-[0.8rem] flex flex-col">{label}</div>
    </div>
  )
}
