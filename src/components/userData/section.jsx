import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5rem;
  margin-top: 2rem;
  font-weight: 600;
`

const Description = styled.p`
  margin-bottom: 1.5rem;
  color: #5a5a5a;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #0174be;
  padding: 0.5rem;
  border-radius: 10px;
  transition: all 0.05s ease-in-out;

  &:hover {
    background: #9bbec833;
    cursor: pointer;
  }
`

export function AddSection({ fields }) {
  return fields
    ? fields.map((field, index) => (
        <React.Fragment key={index}>
          <Title key={field.title}>{field.title}</Title>

          <Description key={field.description}>{field.description}</Description>

          {field.list
            ? field.list.map((item, i) => <div key={i}>{item}</div>)
            : null}

          {field.btnText ? (
            <Button key={field.btnText} onClick={field.onClick}>
              <i className="fi fi-rr-plus-small flex"></i>
              {field.btnText}
            </Button>
          ) : null}
        </React.Fragment>
      ))
    : null
}
