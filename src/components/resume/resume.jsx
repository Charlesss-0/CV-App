import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import { Title, Contact } from './helpers'

const Wrapper = styled.div`
  background-color: #fff;
  width: 210mm;
  height: 297mm;
  margin: auto;
  box-shadow: 0px 0px 10px 5px #0000001a;
  border-radius: 10px;
  overflow: hidden;
`

const MainContent = styled.div`
  margin: auto;
  width: 13em;
  padding: 0.5rem;
  font-size: 2rem;
  font-weight: 600;
  position: absolute;
  right: 0.5rem;
  top: 1.75em;
`

const SideContent = styled.div`
  background-color: #fff;
  color: #2f2f2f;
  width: 20em;
  height: 90%;
  position: absolute;
  left: 2em;
  top: 50%;
  transform: translateY(-50%);
  border: 2px solid #afafaf;
  border-radius: 5px;
`

const Image = styled.div`
  background-color: aliceblue;
  width: 78%;
  height: 15em;
  margin: auto;
  margin-top: 2.5em;
  border-radius: 50%;
  display: grid;
  place-content: center;
  overflow: hidden;
`

// ResumeTemplate component renders the resume template with the provided data
export function ResumeTemplate({ fields }) {
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
    <div className="w-full h-screen p-[5em] overflow-auto">
      <Wrapper>
        <div className="relative h-full">
          <div className="absolute left-0 w-[11em] h-full bg-[antiquewhite]">
            <div className="absolute left-0 top-0 h-[40%] w-full bg-[#b8b89a]"></div>
          </div>

          {fields.map((field, index) => (
            <SideContent key={index}>
              <Image>
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
                      hover:cursor-pointer
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
              </Image>

              {field.email || field.phone || field.cityCountry ? (
                <Title text={'Contact'} />
              ) : null}

              <div className="w-full p-[1rem] flex flex-col gap-1">
                {fields.map((field, index) => (
                  <React.Fragment key={index}>
                    {field.email && (
                      <Contact type={'email'} info={field.email} />
                    )}
                    {field.phone && (
                      <Contact type={'phone'} info={field.phone} />
                    )}
                    {field.cityCountry && (
                      <Contact type={'nationality'} info={field.cityCountry} />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {fields.map((field, index) => (
                <React.Fragment key={index}>
                  {field.skills.length > 0 ? (
                    <>
                      <Title text={'Skills'} />
                      <ul className="px-[1.8rem] list-disc">{field.skills}</ul>
                    </>
                  ) : (
                    ''
                  )}

                  {field.links.length > 0 ? (
                    <>
                      <Title text={'Links'} />
                      <div className="px-[0.8rem] flex flex-col">
                        {field.links}
                      </div>
                    </>
                  ) : null}
                </React.Fragment>
              ))}
            </SideContent>
          ))}

          {fields.map((field, index) => (
            <MainContent
              key={index}
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
                <h1>{field.firstName}</h1>

                <h1>{field.lastName}</h1>
              </div>

              <h2 className="text-[1.5rem] font-normal text-[#5f5f5f]">
                {field.jobTitle}
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
                {field.profileDesc}
              </h3>

              <div>
                {field.jobHistory.length > 0 ? (
                  <>
                    <h1 className="my-[1rem]">Experience</h1>
                    <div
                      className="
                        flex 
                        flex-col
                        gap-[1rem]
                        text-[#5f5f5f] 
                        font-normal
                        [&>div]:text-[1rem]
                        "
                    >
                      {field.jobHistory}
                    </div>
                  </>
                ) : null}
              </div>

              <div>
                {field.training.length > 0 ? (
                  <>
                    <h1 className="my-[1rem]">Education</h1>
                    <div
                      className="
                        flex 
                        flex-col
                        gap-[1rem]
                        text-[#5f5f5f] 
                        font-normal
                        [&>div]:text-[1rem]
                        "
                    >
                      {field.training}
                    </div>
                  </>
                ) : null}
              </div>

              <div>
                <ul className="text-[1.1rem]">{field.customList}</ul>
              </div>
            </MainContent>
          ))}
        </div>
      </Wrapper>
    </div>
  )
}
