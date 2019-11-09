import React from 'react'

interface TittleProps {
  title: string
}
function HeaderTittle (props: TittleProps) {
  return <div className="header-title">
    {props.title}
  </div>
}

export default HeaderTittle
