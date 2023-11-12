/* eslint-disable react/prop-types */
export function Contact({ type, info }) {
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

export function Title({ text }) {
  return (
    <h1 className="mt-[1.5em] m-[0.5em] mb-0 text-[1.5rem] font-semibold">
      {text}
    </h1>
  )
}
