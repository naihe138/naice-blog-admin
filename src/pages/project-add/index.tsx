import React, { useEffect, useState } from 'react'
import PageLayout from '../../common/components/page-layout'
import Add from './add'
import { fetchProjectId } from '../../utils/api'
import { useQuery } from '../../utils/index'
const ProjectAdd = (props: any) => {
  const [project, setProject] = useState({})
  const query = useQuery()
  // 获取编辑数据
  useEffect(() => {
    (async () => {
      const id = query.get('id')
      if (id) {
        const { data } = await fetchProjectId(id)
        if (data.code) {
          setProject(data.result.list)
        }
      } else {
        setProject({})
      }
    })()
  }, [])
  return <PageLayout title='新增项目'>
    <Add {...props} project={project} />
  </PageLayout>
}

export default ProjectAdd
