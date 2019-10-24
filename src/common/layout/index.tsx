import React from 'react'
import { RouterProps } from 'react-router'
import Side from './side'
import Main from './main'
import './layout.scss'

export default function Layout(props: RouterProps) {
  return (
    <section className="layout">
      <Side {...props} />
      <Main {...props} />
    </section>
  )
}
