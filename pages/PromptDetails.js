import React from 'react'
import RadioButton from '../src/Component/RadioButton'
import Input from '../src/Component/Input'
import Checkbox from '@/src/Component/Checkbox'
import { Router, useRouter } from 'next/router'
import { getPrompts } from '@/src/Utils/prompt'
import { Grid } from '@mui/material'
import Prompt from '@/src/Component/Prompt'

const elements = [
  { type: 'gender', label: 'Gender' },
  { type: 'text', label: 'Full Name' },
  { type: 'checkbox', label: 'Agree to Terms' },
  { type: 'text', label: 'Full Name' },
]

const PromptDetails = () => {
  const router = useRouter();
  const SubCategoiresData = getPrompts()
  const Data = SubCategoiresData.find(x => x.title === router.query.SubCategoryName);
  console.log('query get', Data)
  return (
    <>
      <Grid container spacing={2} style={{
        paddingTop: 20,
        backgroundColor: '#eff7fd',
      }}>
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
