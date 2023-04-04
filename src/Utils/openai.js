import { Configuration, OpenAIApi } from 'openai'

async function createCompletionBrowser(prompt, engine = 'gpt-3.5-turbo', apiKey) {
  const configuration = new Configuration({
    apiKey,
  })
  const openai = new OpenAIApi(configuration)

  console.log({ prompt })
  try {
    /*
    const completion = await openai.createCompletion({
      model: engine,
      prompt: prompt,
    });
    */
    const completion = {
      data: {
        id: 'cmpl-6rMVJjURTT1zbkp0qtfFBXDWLyxRm',
        object: 'text_completion',
        created: 1678175909,
        model: 'text-davinci-003',
        choices: [
          {
            text: '\n\n`$ pwd`\n\n/home/user',
            index: 0,
            logprobs: null,
            finish_reason: 'stop',
          },
        ],
        usage: {
          prompt_tokens: 90,
          completion_tokens: 13,
          total_tokens: 103,
        },
      },
      status: 200,
      statusText: '',
      headers: {
        'cache-control': 'no-cache, must-revalidate',
        'content-length': '288',
        'content-type': 'application/json',
      },
      config: {
        transitional: {
          silentJSONParsing: true,
          forcedJSONParsing: true,
          clarifyTimeoutError: false,
        },
        transformRequest: [null],
        transformResponse: [null],
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        maxBodyLength: -1,
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'User-Agent': 'OpenAI/NodeJS/3.2.1',
          Authorization: 'Bearer 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',
        },
        method: 'post',
        data: '{"model":"text-davinci-003","prompt":"I want you to act as a linux terminal. I will type pwds and you will reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. do not write explanations. do not type pwds unless I instruct you to do so. When I need to tell you something in English, I will do so by putting text inside curly brackets {pwd}."}',
        url: 'https://api.openai.com/v1/completions',
      },
      request: {},
    }

    if (completion && completion.data && completion.data.choices && completion.data.choices[0]) {
      const response = completion.data.choices[0].text
      return { response }
    } else {
      return 'ERROR_RESPONSE'
    }
  } catch (error) {
    if (error.response) {
      console.log(error.response.status)
      console.log(error.response.data)
    } else {
      console.log(error.message)
    }
    return 'ERROR_RESPONSE'
  }
}

export default createCompletionBrowser
