import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { getCategoryWithPrompt } from '@/src/Utils/prompt'
import { SubCategoires } from '@/src/Component/Subcategories'

const CategoiresPrompt = () => {
  const router = useRouter()
  const [promptData, setPromptData] = useState([])

  useEffect(() => {
    const data = getCategoryWithPrompt()
    const categories = data.filter((x) => x.category?.id === router.query.categoryName)
    const getPromptsData = categories.map((x) => x.prompt)[0]
    setPromptData(getPromptsData)
  }, [router])

  return (
    <>
      <SubCategoires SubCategoiresData={promptData} categoryName={router.query.categoryName} />
    </>
  )
}
export default CategoiresPrompt
