import React from 'react'
import RadioButton from '../src/Component/RadioButton'
import Input from '../src/Component/Input'
import Checkbox from '@/src/Component/Checkbox'

const elements = [
  { type: 'gender', label: 'Gender' },
  { type: 'text', label: 'Full Name' },
  { type: 'checkbox', label: 'Agree to Terms' },
  { type: 'text', label: 'Full Name' },
]

const PromptDetails = () => {
  return (
    <div
      style={{
        paddingTop: 20,
        paddingBottom: 50,
        backgroundColor: '#eff7fd',
        minHeight: 500,
      }}
    >
      <form>
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
    </div>
  )
}
export default PromptDetails
