import createCompletionServer from './api'
import createCompletionBrowser from './openai'

function getClientResponse(msg, engine = 'gpt-3.5-turbo') {
  const option = localStorage.getItem('option')
  if (option === 'key') {
    return createCompletionBrowser(msg, engine, localStorage.getItem('apiKey'))
  } else if (option === 'endpoint') {
    return createCompletionServer(msg, engine, localStorage.getItem('apiEndpoint'))
  } else {
  }
}

export default getClientResponse
