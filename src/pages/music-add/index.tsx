import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import PageLayout from '../../common/components/page-layout'
import Add from './add'
import { fetchMusic } from '../../utils/api'
import { useQuery } from '../../utils/index'
const MusicAdd = (props: any) => {
  const [music, setMusic] = useState({})
  let location = useLocation()
  const query = useQuery()
  // 获取编辑数据
  useEffect(() => {
    (async () => {
      const id = query.get('id')
      if (id) {
        const { data } = await fetchMusic({id})
        if (data.code) {
          setMusic(data.result[0])
        }
      } else {
        setMusic({})
      }
    })()
  }, [location])
  return <PageLayout title='新增音乐'>
    <Add {...props} music={music} />
  </PageLayout>
}

export default MusicAdd
