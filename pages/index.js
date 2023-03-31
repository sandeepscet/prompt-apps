import React from 'react'
import { Grid } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { Data } from '../src/Common/card'
import { CategoiresData } from '../src/Common/categoriesCard'
import { Category } from '../src/Component/Category'

import PromptDetails from './PromptDetails'
import { Link } from 'react-router-dom'
import { useRouter } from 'next/router'
import { SubCategoires } from '@/src/Component/Subcategories'
import Subscription from '@/src/Component/Subcription'

const MainPage = () => {
  const router = useRouter()
  return (
    <>
      <div style={{ width: '100%' }}>
        <Subscription />
        <SubCategoires />
        <Category />
      </div>
    </>
  )
}

export default MainPage
