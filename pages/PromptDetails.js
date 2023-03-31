import React from 'react'
import RadioButton from '../src/Component/RadioButton'
import Input from '../src/Component/Input'
import Checkbox from '@/src/Component/Checkbox'
import { Router, useRouter } from 'next/router'
import { getPrompts } from '@/src/Utils/prompt'
import { Grid } from '@mui/material'

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
        // paddingBottom: 50,
        backgroundColor: '#eff7fd',
        // minHeight: 500,
      }}>
        <Grid item xs={2} md={2}>

        </Grid>
        <Grid item xs={8} md={8}>
          <h1 style={{ textAlign: 'center' }}>{Data.title}</h1>
          <form >
            {elements.map((element) => {
              if (element.type === 'gender') {
                return <RadioButton key={element.label} label={element.label} />
              } else if (element.type === 'text') {
                return <Input key={element.label} label={element.label} />
              } else if (element.type === 'checkbox') {
                return <Checkbox key={element.label} label={element.label} />
              }
              return null
            })}
          </form>
        </Grid>
        <Grid item xs={2} md={2}>

        </Grid>
      </Grid>
      <div
        style={{
          paddingTop: 20,
          paddingBottom: 50,
          backgroundColor: '#eff7fd',
          minHeight: 500,
        }}
      >


      </div>
    </>
  )
}
export default PromptDetails
