// import { useState } from "react"
import { UserForm } from '../form'

export function AddActivities() {
  return (
    <UserForm
      fieldOne={[
        { name: 'title', label: 'Title', type: 'text', maxLength: '50' },
        { name: 'place', label: 'Entity', type: 'text', maxLength: '50' }
      ]}
      fieldTwo={[
        { name: 'startDate', label: 'Start date', type: 'date' },
        { name: 'endDate', label: 'End date', type: 'date' }
      ]}
    />
  )
}
