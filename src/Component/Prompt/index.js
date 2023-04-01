import React, { useEffect, useState } from 'react'
import Form from '@rjsf/mui'
import validator from '@rjsf/validator-ajv8'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { getPromptById } from '@/src/Utils/prompt'
import { replaceAll } from '@/src/Utils/common'
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
      <div className="p-5 mb-4 bg-light rounded-3">
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
        <div className="card mt-3">
          <div className="card-body">
            <ReactMarkdown children={output} remarkPlugins={[remarkGfm]} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Prompt
