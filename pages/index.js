import React from 'react'
import Head from 'next/head'

import { SubCategoires } from '@/src/Component/Subcategories'
import Subscription from '@/src/Component/Subcription'
import RecentHeader from '@/src/Component/RecentHeader'
import { getPopularPrompts } from '@/src/Utils/prompt'
import { Category } from '@/src/Component/Category'

const MainPage = () => {
  const getPromptsData = getPopularPrompts()

  return (
    <>
      <Head>
        <title>chatgpt Prompt Apps</title>
        <meta name="description" content="User interface-based Apps from Prompt." key="desc" />
      </Head>
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
