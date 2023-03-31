import Form from '@rjsf/mui'

import validator from '@rjsf/validator-ajv8'
// import { JSONSchema7 } from 'json-schema'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

// import './Prompt.css'
import { replaceAll } from '../../Utils/common'
import { getPromptById } from '../../Utils/prompt'

function Prompt(props) {
  const promptFinalMetaData = getPromptById(props.id)
  const [formData, setFormData] = React.useState(null)
  const [output, setOutput] = React.useState('Output Will be display Here')

  async function onSubmit(form) {
    const formData = form.formData
    const generatedPrompt = replaceAll(promptFinalMetaData.prompt, formData)
    const result = { response: generatedPrompt }
    console.log(result)
    if (result !== 'ERROR_RESPONSE') {
      setOutput(result.response)
    }
  }

  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3">
        <Form
          schema={promptFinalMetaData.schema}
          uiSchema={promptFinalMetaData.UiSchema}
          formData={formData}
          onChange={(e) => setFormData(e.formData)}
          validator={validator}
          onSubmit={onSubmit}
        />
        <div className="card mt-3">
          <div className="card-body">
            {<ReactMarkdown children={output} remarkPlugins={[remarkGfm]} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default Prompt
