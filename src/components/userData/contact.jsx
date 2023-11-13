/* eslint-disable react/prop-types */
export function ContactInfo({
  jobTitle,
  firstName,
  lastName,
  email,
  phone,
  city,
  country,
  profileDesc
}) {
  return (
    <form className="flex flex-col gap-[2rem]">
      <h1 className="text-[1.6rem] mt-[2rem] font-semibold">
        Personal Information
      </h1>

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
            <input type="text" maxLength={30} onChange={jobTitle} />
          </label>
        </div>

        <div>
          <label>
            First Name <br />
            <input type="text" maxLength={20} onChange={firstName} />
          </label>

          <label>
            Last Name <br />
            <input type="text" maxLength={20} onChange={lastName} />
          </label>
        </div>

        <div>
          <label>
            E-mail <br />
            <input type="email" maxLength={30} onChange={email} />
          </label>

          <label>
            Phone <br />
            <input type="tel" maxLength={15} onChange={phone} />
          </label>
        </div>

        <div>
          <label>
            City <br />
            <input type="text" onChange={city} />
          </label>

          <label>
            Country <br />
            <input type="text" onChange={country} />
          </label>
        </div>
      </fieldset>

      <fieldset>
        <h1 className="text-[1.6rem] mt-[2rem] font-semibold">
          Professional profile
        </h1>

        <p className="mb-[1.5rem] text-[#5a5a5a]">
          Add two or three sentences about your personal experiences.
        </p>

        <textarea
          className="w-full resize-none rounded-lg h-[10em] p-[1rem] text-[#393939] font-normal"
          maxLength={200}
          placeholder="pe, science teacher passionate about his profession with more than 8 years of experience."
          onChange={profileDesc}
        />
      </fieldset>
    </form>
  )
}
