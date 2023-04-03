import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Grid } from '@mui/material'
import { getPromptById } from '@/src/Utils/prompt'

import Prompt from '@/src/Component/Prompt'
import Head from 'next/head'

const PromptDetails = () => {
  const router = useRouter()
  const [SubCategoryName, setSubCategoryName] = useState('')
  const [promptData, setpromptData] = useState({})

  useEffect(() => {
    if (router.isReady) {
      const { SubCategoryName } = router.query
      if (!SubCategoryName) return null
      setSubCategoryName(SubCategoryName)

      const promptData = getPromptById(SubCategoryName)
      setpromptData(promptData)
    }
  }, [router.isReady])

  return (
    <>
      <Head>
        <title>{promptData.title}</title>
        <meta name="description" content={promptData.description} key="desc" />
        <meta
          name="keywords"
          content={promptData.seo ? promptData.seo.join(',') : ''}
          key="keywords"
        />
      </Head>
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
