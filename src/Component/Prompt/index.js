import React, { useEffect, useState, createRef } from 'react'
import Form from '@rjsf/mui'
import validator from '@rjsf/validator-ajv8'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import CopyIcon from '@mui/icons-material/ContentCopy'
import CopyAllIcon from '@mui/icons-material/CopyAll'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import CloseIcon from '@mui/icons-material/Close'

import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled'
import SendIcon from '@mui/icons-material/Send'
import { getPromptById } from '@/src/Utils/prompt'
import { replaceAll } from '@/src/Utils/common'
import { getClientResponse } from '@/src/Utils/client'

import { Box, Button, Grid, Typography, Alert, Collapse, IconButton } from '@mui/material'
import { Row } from '@nextui-org/react'
import { Colors } from '@/src/Theme/colors'
import ShareModal from '@/src/Component/Common/ShareModal'

const Prompt = (props) => {
  const { id } = props
  const formRef = createRef()
  const outputBoxRef = createRef(null)

  const [promptMetaDate, setPromptMetaDate] = useState(null)
  const [formData, setFormData] = useState(null)
  const [output, setOutput] = useState('Output Will be display Here')
  const [openShareModal, setOpenShareModal] = useState(false)
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [alertOnOutputBox, setAlertOnOutputBox] = useState(false)

  useEffect(() => {
    const promptFinalMetaData = getPromptById(id)
    setPromptMetaDate(promptFinalMetaData)
  }, [id])

  const onClickCopy = () => {
    navigator.clipboard.writeText(output)
  }

  const onClickShare = () => {
    setOpenShareModal(true)
  }

  const onClickCopyPrompt = () => {
    navigator.clipboard.writeText(generatedPrompt)
  }

  const onClickRegenerate = () => {
    formRef.current.submit()
  }

  const closeShareModal = () => {
    setOpenShareModal(false)
  }

  const onClickTryInChatGPT = () => {
    alert('Available Soon!!!')
  }

  async function onSubmit(form) {
    const formData = form.formData
    const generatedPrompt = replaceAll(promptMetaDate?.prompt, formData)
    setGeneratedPrompt(generatedPrompt)
    outputBoxRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

    const storedOption = localStorage.getItem('option')

    let result = {
      response: generatedPrompt,
    }

    if (storedOption) {
      const generateResponse = await getClientResponse(generatedPrompt, 'text-davinci-003')
      result = { response: generateResponse }
    } else {
      setAlertOnOutputBox(true)
    }

    if (result !== 'ERROR_RESPONSE') {
      setOutput(result.response)
    }
  }

  return (
    <>
      <Grid
        container
        spacing={2}
        style={{
          paddingTop: 20,
          backgroundColor: Colors.Color16,
          height: '100%',
          marginBottom: 50,
        }}
      >
        <Grid item xs={2} md={2}></Grid>
        <Grid item xs={4} md={4}>
          <Box
            sx={{
              width: 'auto',
              height: '100%',
              backgroundColor: Colors.White,
              border: '1px solid white',
              borderRadius: 2,
              padding: 5,
              scrollBehavior: 'auto',
            }}
          >
            <Row>
              {promptMetaDate ? (
                <Form
                  schema={promptMetaDate?.schema}
                  uiSchema={promptMetaDate?.UiSchema}
                  formData={formData}
                  onChange={(e) => setFormData(e.formData)}
                  validator={validator}
                  onSubmit={onSubmit}
                  ref={formRef}
                />
              ) : null}
            </Row>
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          md={4}
          style={{
            overflow: 'hidden',
          }}
        >
          {' '}
          <Box
            sx={{
              width: 'auto',
              border: '1px solid white',
              borderRadius: 2,
              backgroundColor: Colors.White,
              height: '100%',
              padding: 5,
            }}
            ref={outputBoxRef}
          >
            {' '}
            <Collapse in={alertOnOutputBox}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setAlertOnOutputBox(false)
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: 2 }}
                severity="success"
                color="info"
              >
                Configuration of openAI key or endpoint pending, Generated Prompt to use in chatGPT
              </Alert>
            </Collapse>
            <Box
              sx={{
                width: 'auto',
                border: '1px solid white',
                borderRadius: 5,
                backgroundColor: Colors.Color15,
                height: '50%',
                padding: 3,
                scrollBehavior: 'auto',
              }}
            >
              <Row>
                {' '}
                <div className="p-5 mb-4 bg-light rounded-3">
                  <div className="card mt-3">
                    <div className="card-body">
                      <ReactMarkdown children={output} remarkPlugins={[remarkGfm]} />
                    </div>
                  </div>
                </div>
              </Row>
            </Box>
            <Row style={{ marginTop: '2rem' }}>
              <Button
                onClick={onClickCopy}
                style={{ marginRight: '1rem' }}
                variant="outlined"
                startIcon={<CopyIcon />}
              >
                Copy
              </Button>
              <Button
                onClick={onClickRegenerate}
                style={{ marginRight: '1rem' }}
                variant="outlined"
                startIcon={<ReplayCircleFilledIcon />}
              >
                Regenerate
              </Button>
              <Button
                onClick={onClickCopyPrompt}
                style={{ marginRight: '1rem' }}
                variant="outlined"
                startIcon={<CopyAllIcon />}
              >
                Copy Prompt
              </Button>
            </Row>
            <Row style={{ marginTop: '2rem' }}>
              <Button
                onClick={onClickShare}
                style={{ marginRight: '1rem' }}
                variant="outlined"
                endIcon={<SendIcon />}
              >
                Share
              </Button>
              <Button
                onClick={onClickTryInChatGPT}
                style={{ marginRight: '1rem' }}
                variant="contained"
                endIcon={<AcUnitIcon />}
              >
                Try in chatGPT
              </Button>
              <Button
                style={{ marginRight: '1rem', display: 'none' }}
                variant="contained"
                endIcon={<ThumbUpAltIcon />}
              >
                Feedback
              </Button>
            </Row>
          </Box>
        </Grid>
        <Grid item xs={2} md={2}></Grid>
      </Grid>
      <ShareModal isOpen={openShareModal} onClose={closeShareModal} />
    </>
  )
}

export default Prompt
