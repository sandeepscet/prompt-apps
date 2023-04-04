import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { getPromptsByCategory, getCategoryById } from '@/src/Utils/prompt'
import { SubCategoires } from '@/src/Component/Subcategories'
import Head from 'next/head'

const CategoiresPrompt = () => {
  const router = useRouter()
  const [category, setCategory] = useState({})
  const [promptData, setPromptData] = useState([])
  const [categoryId, setCategoryId] = useState('')

  useEffect(() => {
    if (router.isReady) {
      const { categoryId } = router.query
    if (categoryId) {
      const category = getCategoryById(categoryId)
      const data = getPromptsByCategory(categoryId)
      setPromptData(data)
      setCategory(category)
      setCategoryId(categoryId)
    }
  }, [router])

  return (
    <>
      <Head>
        <title>{category.name + ' Prompt Apps'}</title>
        <meta name="description" content="{category.description}" key="desc" />
      </Head>
      {categoryId && <SubCategoires SubCategoiresData={promptData} categoryName={categoryId} />}
    </>
  )
}
export default CategoiresPrompt
