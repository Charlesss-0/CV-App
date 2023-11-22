const STYLES = {
  title: `
    text-[1.5rem] 
    mt-[2rem] 
    font-semibold
  `,
  description: `
    mb-[1.5rem] 
    text-[#5a5a5a]
  `,
  button: `
    flex
    items-center
    gap-1
    text-[#0174be]
    hover:cursor-pointer
    hover:bg-[#9BBEC833]
    p-[0.5rem]
    rounded-lg
    transition-all 
    ease-in-out 
    delay-100
  `
}

export function AddSection({ fields }) {
  return (
    <>
      {fields.map((field) => (
        <h1 key={field.title} className={STYLES.title}>
          {field.title}
        </h1>
      ))}

      {fields.map((field) => (
        <p key={field.description} className={STYLES.description}>
          {field.description}
        </p>
      ))}

      {fields.map((field) => (
        <div key={field.list}>{field.list}</div>
      ))}

      {fields.map((field) => (
        <button
          key={field.btnText}
          className={STYLES.button}
          onClick={field.onClick}
        >
          <i className="fi fi-rr-plus-small flex"></i>
          {field.btnText}
        </button>
      ))}
    </>
  )
}
