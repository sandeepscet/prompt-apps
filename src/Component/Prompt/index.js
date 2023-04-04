import React, { useEffect, useState } from 'react'
import Form from '@rjsf/mui'
import validator from '@rjsf/validator-ajv8'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { getPromptById } from '@/src/Utils/prompt'
import { replaceAll } from '@/src/Utils/common'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Row } from '@nextui-org/react'
import { Colors } from '@/src/Theme/colors'
// import './Prompt.css'

const Prompt = (props) => {
  const { id } = props
  const [promptMetaDate, setPromptMetaDate] = useState(null)
  const [formData, setFormData] = useState(null)
  const [output, setOutput] = useState('Output Will be display Here')

  useEffect(() => {
    const promptFinalMetaData = getPromptById(id)
    setPromptMetaDate(promptFinalMetaData)
  }, [id])

  async function onSubmit(form) {
    const formData = form.formData
    const generatedPrompt = replaceAll(promptMetaDate?.prompt, formData)
    const result = { response: generatedPrompt }

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
              scrollBehavior:'auto'
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
          >
            {' '}
            <Typography variant="h6" component="h6">
              {' '}
              Ai Output
            </Typography>
            <Box
              sx={{
                width: 'auto',
                border: '1px solid white',
                borderRadius: 5,
                backgroundColor: Colors.Color15,
                height: '50%',
                padding: 3,
                scrollBehavior:'auto'
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
            <Row style={{ marginTop: 20 }}>
              <Button
                variant="contained"
                style={{
                  float: 'left',
                  width: '50%',
                  backgroundColor: Colors.Color15,
                  color: Colors.Black,
                }}
              >
                Copy
              </Button>
              <Button
                variant="contained"
                style={{
                  float: 'left',
                  width: '50%',
                  backgroundColor: Colors.Color15,
                  color: Colors.Black,
                  marginLeft: 10,
                }}
              >
                Download
              </Button>
            </Row>
          </Box>
        </Grid>
        <Grid item xs={2} md={2}></Grid>
      </Grid>
    </>
  )
}

export default Prompt
