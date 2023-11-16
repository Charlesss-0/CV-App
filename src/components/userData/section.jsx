/* eslint-disable react/prop-types */

export function AddSection({ title, description, btnText, event, list }) {
  return (
    <>
      {title ? (
        <h1 className="text-[1.5rem] mt-[2rem] font-semibold">{title}</h1>
      ) : (
        ''
      )}

      {description ? (
        <p className="mb-[1.5rem] text-[#5a5a5a]">{description}</p>
      ) : (
        ''
      )}

      {Array.isArray(list)
        ? list.map((item, index) => <div key={index}>{item}</div>)
        : ''}

      {btnText ? (
        <button
          className="
          flex
          items-center
          gap-1
          text-[#0174be]
          cursor-pointer
          hover:bg-[#9BBEC833]
          p-[0.5rem]
          rounded-lg
          transition-all ease-in-out delay-100
      "
          onClick={event}
        >
          <i className="fi fi-rr-plus-small flex"></i>
          {btnText}
        </button>
      ) : (
        ''
      )}
    </>
  )
}
