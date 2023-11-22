import { useState } from 'react'
import { UserForm } from '../form'

export function AddCustomSection() {
  const [title, setTitle] = useState('Add Title')

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <>
      <h1
        className="text-[1.5rem] mt-[2rem] font-semibold hover:cursor-text"
        contentEditable={true}
        onInput={handleChange}
      >
        {title}
      </h1>

      <UserForm
        fieldOne={[
          {
            name: 'title',
            label: 'Title',
            type: 'text',
            maxLength: '50'
          },
          {
            name: 'place',
            label: 'Place',
            type: 'text',
            maxLength: '50'
          }
        ]}
        fieldTwo={[
          {
            name: 'start',
            label: 'Start',
            type: 'date'
          },
          {
            name: 'end',
            label: 'End',
            type: 'date'
          }
        ]}
      />
    </>
  )
}
