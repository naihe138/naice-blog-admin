import React, { FunctionComponent } from 'react'
import HeaderTittle from './header-title'

type TittleProps = {
  title: string
}

const PageLayout:FunctionComponent<TittleProps> = props => {
  return (
    <>
      <HeaderTittle title={props.title} />
      <div className="p20">
        { props.children }
      </div>
    </>
  )
}

export default PageLayout
