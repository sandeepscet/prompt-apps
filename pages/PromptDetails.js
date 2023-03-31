import React from 'react'
import { useRouter } from 'next/router'
import { Grid } from '@mui/material'

import Prompt from '@/src/Component/Prompt'

const PromptDetails = () => {
  const router = useRouter()

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
          <Prompt id={router.query.SubCategoryName} />
        </Grid>
        <Grid item xs={2} md={2}></Grid>
      </Grid>
    </>
  )
}

export default PromptDetails
