import React from 'react'
import HeaderTittle from './header-title'

interface TittleProps {
  title: string,
  children: React.Component
}

export default function PageLayout (props: TittleProps) {
  return (
    <>
      <HeaderTittle title={props.title} />
      <div className="p20">
        { props.children }
      </div>
    </>
  )
}
