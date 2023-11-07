/* eslint-disable react/prop-types */
export function Blank({ fullName, emailPhone }) {
  return (
    <>
      <div className="w-full h-screen p-[5em] overflow-auto">
        <div className="bg-white w-[210mm] h-[297mm] mx-auto shadow-xl rounded-lg">
          <div className="m-auto w-max p-[1rem] text-[2rem] font-semibold">
            {fullName}
          </div>
          <div className="m-auto w-[10vw] text-lg">{emailPhone}</div>
        </div>
      </div>
    </>
  )
}
