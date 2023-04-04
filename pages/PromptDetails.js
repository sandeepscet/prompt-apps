import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Grid } from '@mui/material'

import Prompt from '@/src/Component/Prompt'

const PromptDetails = () => {
  const router = useRouter()
  const [SubCategoryName, setSubCategoryName] = useState('')

  useEffect(() => {
    if (router.isReady) {
      const { SubCategoryName } = router.query
      if (!SubCategoryName) return null
      setSubCategoryName(SubCategoryName)
    }
  }, [router])

  return (
    <>
       {SubCategoryName && <Prompt id={SubCategoryName} />}
    </>
  )
}

export default PromptDetails
