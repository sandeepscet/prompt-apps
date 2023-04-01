import React from 'react'

import { SubCategoires } from '@/src/Component/Subcategories'
import Subscription from '@/src/Component/Subcription'
import RecentHeader from '@/src/Component/RecentHeader'
import { getPopularPrompts } from '@/src/Utils/prompt'
import { Category } from '@/src/Component/Category'

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
