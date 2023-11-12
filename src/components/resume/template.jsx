/* eslint-disable react/prop-types */

import { useRef, useState } from 'react'
import { ContactInfo, Title } from './templateUtils'

export function ResumeTemplate({
  firstName,
  lastName,
  jobTitle,
  profileDescription,
  email,
  phone,
  cityCountry,
  prevJobPos,
  prevJobName,
  skills
}) {
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
    <>
      <div className="w-full h-screen p-[5em] overflow-auto">
        <div className="bg-white w-[210mm] h-[297mm] mx-auto shadow-xl rounded-lg overflow-hidden">
          <div className="relative h-full">
            <div className="absolute left-0 w-[11em] h-full bg-[antiquewhite]">
              <div className="absolute left-0 top-0 h-[40%] w-full bg-[#b8b89a]"></div>
            </div>

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
                <ContactInfo type={email !== '' ? 'email' : ''} info={email} />
                <ContactInfo type={phone !== '' ? 'phone' : ''} info={phone} />
                <ContactInfo
                  type={cityCountry !== '' ? 'nationality' : ''}
                  info={cityCountry}
                />
              </div>

              {skills ? <Title text={'Skills'} /> : ''}
              <div>{skills}</div>
            </div>

            <div
              className="
                m-auto 
                w-[13.4em] 
                p-[0.5rem] 
                text-[2rem] 
                font-semibold 
                absolute 
                right-[0.5rem] 
                top-[1.75em]
                "
            >
              <div className="flex flex-wrap gap-x-[0.5rem]">
                <h1>{firstName}</h1>
                <h1>{lastName}</h1>
              </div>

              <h2 className="text-[1.5rem] font-normal text-[#5f5f5f]">
                {jobTitle}
              </h2>

              <h3
                className="
                  text-[1rem] 
                  font-normal 
                  text-[#5f5f5f] 
                  mt-[1rem] 
                  w-full
                  "
              >
                {profileDescription}
              </h3>

              <h1 className="my-[1rem]">
                {prevJobPos.length === 0 ? '' : 'Experience'}
              </h1>
              <div
                className="
                  flex 
                  gap-[1rem]
                  text-[#5f5f5f] 
                  font-normal
                  [&>div]:text-[1rem]
                  "
              >
                <div>{prevJobPos}</div>
                <div>
                  {prevJobName.map((index) => (
                    <div key={index}>at</div>
                  ))}
                </div>
                <div>{prevJobName}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
