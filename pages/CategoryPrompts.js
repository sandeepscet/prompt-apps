import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { getPromptsByCategory } from '@/src/Utils/prompt'
import { SubCategoires } from '@/src/Component/Subcategories'

const CategoiresPrompt = () => {
  const router = useRouter()
  const [promptData, setPromptData] = useState([])
  const [categoryId, setCategoryId] = useState('')

  useEffect(() => {
    const { categoryId } = router.query
    if (categoryId) {
      setCategoryId(categoryId)
      const data = getPromptsByCategory(categoryId)
      setPromptData(data)
    }
  }, [router.isReady])

  return (
    <>{categoryId && <SubCategoires SubCategoiresData={promptData} categoryName={categoryId} />}</>
  )
}
export default CategoiresPrompt
