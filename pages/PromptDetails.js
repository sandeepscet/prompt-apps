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
      <Grid
        container
        spacing={2}
        style={{
          paddingTop: 20,
          backgroundColor: '#eff7fd',
        }}
      >
        <Grid item xs={2} md={2}></Grid>
        <Grid item xs={8} md={8}>
          {SubCategoryName && <Prompt id={SubCategoryName} />}
        </Grid>
        <Grid item xs={2} md={2}></Grid>
      </Grid>
    </>
  )
}

export default PromptDetails
