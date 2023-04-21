async function createCompletionServer(prompt, engine = 'gpt-3.5-turbo', apiEndpoint) {
  const post = {
    messages: [{ role: 'user', content: prompt }],
    engine: engine,
    max_tokens: 2000,
  }

  try {
    const response = await fetch(apiEndpoint, {
      method: 'post',
      headers: {
        Authorization: 'Bearer pk-MgvPEGFZBEANGXqZwoHvAGsSJEqipmcsYpEgvYPPIGisGCTz',
        'Content-Type': 'application/json',
      },
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

function formatResponse(response) {
  if (
    response.choices &&
    response.choices[0] &&
    response.choices[0].message &&
    response.choices[0].message.content
  ) {
    return { response: { content: response.choices[0].message.content } }
  } else {
    return 'ERROR_RESPONSE'
  }
}

export default createCompletionServer
