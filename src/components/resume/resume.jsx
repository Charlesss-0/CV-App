import { SideContent } from './sideContent'
import { Main } from './mainContent'

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
  skills,
  jobHistory,
  training,
  label,
  customList
}) {
  return (
    <div className="w-full h-screen p-[5em] overflow-auto">
      <div className="bg-white w-[210mm] h-[297mm] mx-auto shadow-xl rounded-lg overflow-hidden">
        <div className="relative h-full">
          <div className="absolute left-0 w-[11em] h-full bg-[antiquewhite]">
            <div className="absolute left-0 top-0 h-[40%] w-full bg-[#b8b89a]"></div>
          </div>

          <SideContent
            email={email}
            phone={phone}
            cityCountry={cityCountry}
            skills={skills}
            label={label}
          />

          <Main
            firstName={firstName}
            lastName={lastName}
            jobTitle={jobTitle}
            profileDescription={profileDescription}
            prevJobPos={prevJobPos}
            prevJobName={prevJobName}
            jobHistory={jobHistory}
            training={training}
            customList={customList}
          />
        </div>
      </div>
    </div>
  )
}
