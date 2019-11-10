import React from 'react'
import PageLayout from '../../common/components/page-layout'
import Tag from './add'

const AddTag = (props: any) => {
  return <>
    <PageLayout title='新增标签'>
      <Tag {...props}/>
    </PageLayout>
  </>
}

export default AddTag
