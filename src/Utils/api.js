async function createCompletionServer(prompt, engine = 'gpt-3.5-turbo', apiEndpoint) {
  const post = { message: prompt, engine: engine }
  try {
    const response = await fetch(apiEndpoint, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    })
    const data = await response.json()
    if (response.ok) {
      return formatResponse(data)
    } else {
      console.log(response)

      return 'ERROR_RESPONSE'
    }
  } catch (e) {
    alert(e)
  }
}

function formatResponse(data) {
  // data.response = data.response.replace(/\n/g, '<br />')
  return data
}

export default createCompletionServer
