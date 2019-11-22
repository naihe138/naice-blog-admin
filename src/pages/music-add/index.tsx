import React from 'react'
import PageLayout from '../../common/components/page-layout'
import Add from './add'
const MusicAdd = (props: any) => {
  return <PageLayout title='新增音乐'>
    <Add {...props} />
  </PageLayout>
}

export default MusicAdd
