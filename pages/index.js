import React from 'react'

import { Category } from '../src/Component/Category'
import { SubCategoires } from '@/src/Component/Subcategories'
import Subscription from '@/src/Component/Subcription'
import RecentHeader from '@/src/Component/RecentHeader'
import { getPopularPrompts } from '@/src/Utils/prompt'

const MainPage = () => {
  const getPromptsData = getPopularPrompts()

  return (
    <>
      <div style={{ width: '100%' }}>
        <Subscription />
        <RecentHeader />
        <SubCategoires SubCategoiresData={getPromptsData} />
        <Category />
      </div>
    </>
  )
}

export default MainPage
