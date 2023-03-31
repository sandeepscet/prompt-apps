import React from 'react'
import { useRouter } from 'next/router'

import { getCategoryWithPrompt } from '@/src/Utils/prompt'
import { SubCategoires } from '@/src/Component/Subcategories'

const CategoiresPrompt = () => {
  const router = useRouter()
  const data = getCategoryWithPrompt()
  const AllData = data.filter((x) => x.category?.id === router.query.categoryName)
  const getPromptsData = AllData.map((x) => x.prompt)[0]

  return (
    <>
      <SubCategoires SubCategoiresData={getPromptsData} categoryName={router.query.categoryName} />
    </>
  )
}
export default CategoiresPrompt
