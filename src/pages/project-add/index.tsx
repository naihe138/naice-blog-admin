import React from 'react'
import PageLayout from '../../common/components/page-layout'
import Add from './add'

const ProjectAdd = (props: any) => {
  return <PageLayout title='新增项目'>
    <Add {...props} />
  </PageLayout>
}

export default ProjectAdd
