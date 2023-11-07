/* eslint-disable react/prop-types */
export function CvPage({ fullName, jobTitle, email, phone, cityCountry }) {
  return (
    <>
      <div className="w-full h-screen p-[5em] overflow-auto">
        <div className="bg-white w-[210mm] h-[297mm] mx-auto shadow-xl rounded-lg">
          <div className="relative h-full">
            <div
              className="
              border-solid 
              border-2 
              border-[#afafaf]
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
                  "
              >
                <i
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
              </div>

              <h1 className="mt-[1.5em] m-[0.5em] mb-0 text-[1.5rem] font-semibold">
                Contact
              </h1>

              <div className="w-full p-[1rem] flex flex-col gap-1">
                <ContactInfo type={email !== '' ? 'email' : ''} info={email} />
                <ContactInfo type={phone !== '' ? 'phone' : ''} info={phone} />
                <ContactInfo
                  type={cityCountry !== '' ? 'nationality' : ''}
                  info={cityCountry}
                />
              </div>
            </div>

            <div
              className="
                m-auto 
                w-[10em] 
                p-[1rem] 
                text-[2rem] 
                font-semibold 
                absolute 
                right-[3em] 
                top-[1.75em]
                "
            >
              <h1>{fullName}</h1>
              <h2 className="text-[1.5rem] font-normal text-[#5f5f5f]">
                {jobTitle}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function ContactInfo({ type, info }) {
  const getIconClass = () => {
    switch (type) {
      case 'email':
        return 'fi-sr-envelope'
      case 'phone':
        return 'fi-sr-phone-flip'
      case 'nationality':
        return 'fi-sr-marker'
      default:
        return ''
    }
  }

  return (
    <i
      className={`fi ${getIconClass()} not-italic text-lg flex items-center gap-[0.5rem]`}
    >
      <span className="break-all text-[#5f5f5f]">{info}</span>
    </i>
  )
}
