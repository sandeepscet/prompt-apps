import { isObject, merge } from 'lodash-es'
import categories from '../Common/categories.json'
import promptsMetaData from '../Common/promptsMetaData.json'

function getPrompts() {
  return [...promptsMetaData]
}

function getCategories() {
  return categories
}

function getCategoriesWitPrompts() {
  const categories = getCategories()
  const promptsWithCategories = {}
  for (const category of categories) {
    promptsWithCategories[category.id] = getPromptsByCategory(category.id)
  }
  return { categories, promptsWithCategories }
}

function getCategoryWithPrompt() {
  const categories = getCategories()
  let promptCategory = []
  categories.map((item) => {
    const promptData = getPromptsByCategory(item.id)
    const data = {
      category: item,
      prompt: promptData,
    }
    promptCategory.push(data)
  })
  return promptCategory
}

//
function getTopFiveCategoryWithPrompt() {
  const fiveCategory = getCategoryWithPrompt().slice(0, 5)
  return fiveCategory
  //
}

// To display Just below Menu
function getRecentPrompts() {
  const prompts = [...getPrompts()]
  return prompts.slice(17, 22)
}

// To display in Footer
function getPopularPrompts() {
  return getPrompts().slice(0, 16)
}

// To display below prompt output
function getSimilarPrompts(promptId) {
  return getPrompts().slice(0, 8)
}

function listPrompts(term, categoryId, pageNo, pageSize = 15) {
  if (term.length == 0) return
  const prompts = [...getPrompts()]
  const filteredPrompts = prompts.filter((obj) => {
    return obj.title.toLowerCase().includes(term)
  })
  return filteredPrompts.splice(0, pageSize)
}

function getPromptsByCategory(categoryId) {
  const prompts = promptsMetaData.filter((obj) => {
    return obj.categories.includes(categoryId)
  })
  return prompts
}

function getCategoryById(id) {
  const categories = getCategories()
  const category = categories.filter((obj) => {
    return obj.id === id
  })
  if (category.length > 0) {
    return category[0]
  }
}

function getPromptById(id) {
  const promptMetaData = promptsMetaData.find((obj) => {
    return obj.title === id
  })
  const RJSFSchemaProperties = promptMetaData.schema.properties
  const UiSchema = {}
  for (let key in RJSFSchemaProperties) {
    for (let fieldKey in RJSFSchemaProperties[key]) {
      if (fieldKey.startsWith('ui:')) {
        if (!isObject(UiSchema[key])) {
          UiSchema[key] = {}
        }
        UiSchema[key][fieldKey] = RJSFSchemaProperties[key][fieldKey]
      }
    }
  }

  promptMetaData.UiSchema = UiSchema

  const overrideRJSFSchema = {
    UiSchema: {
      'ui:submitButtonOptions': {
        submitText: 'Submit',
        norender: false,
        props: {
          disabled: false,
          className: 'btn btn-primary',
        },
      },
    },
  }

  const promptFinalMetaData = merge(promptMetaData, overrideRJSFSchema)

  promptFinalMetaData.schema = {
    ...promptFinalMetaData.schema,
    ...{
      title: promptMetaData.title,
      description: promptMetaData.description,
    },
  }

  return promptFinalMetaData
}

export {
  getCategories,
  getPromptById,
  getPromptsByCategory,
  getPrompts,
  getCategoriesWitPrompts,
  getTopFiveCategoryWithPrompt,
  getCategoryWithPrompt,
  getRecentPrompts,
  getPopularPrompts,
  getCategoryById,
  listPrompts,
}
