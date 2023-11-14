/* eslint-disable react/prop-types */
export function Main({
  firstName,
  lastName,
  profileDescription,
  jobTitle,
  jobHistory
}) {
  return (
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

      <h2 className="text-[1.5rem] font-normal text-[#5f5f5f]">{jobTitle}</h2>

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

      {/* <h1 className="my-[1rem]">
        {prevJobPos.length === 0 ? '' : 'Experience'}
      </h1> */}
      <div
        className="
            flex 
            gap-[1rem]
            text-[#5f5f5f] 
            font-normal
            [&>div]:text-[1rem]
            "
      >
        {/* <div>{prevJobPos}</div>
        <div>
          {prevJobName.map((index) => (
            <div key={index}>at</div>
          ))}
        </div>
        <div>{prevJobName}</div> */}
        <div>{jobHistory}</div>
      </div>
    </div>
  )
}
