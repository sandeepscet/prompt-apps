import { Configuration, OpenAIApi } from 'openai'

async function createCompletionBrowser(prompt, engine = 'gpt-3.5-turbo', apiKey) {
  const configuration = new Configuration({
    apiKey,
  })
  const openai = new OpenAIApi(configuration)

  console.log({ prompt })
  try {
    const completion = await openai.createChatCompletion({
      model: engine,
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 2048,
    })

    /*
    
    const completion = {
    "data": {
        "id": "cmpl-71xjyeCANHLWL71DmauNxxtng2USc",
        "object": "text_completion",
        "created": 1680702326,
        "model": "text-davinci-003",
        "choices": [
            {
                "text": "\n\n1. Chana Masala: This classic plant-based dish is a flavorful lentil curry made with chickpeas.\n\n2. Potato and Pea Curry: A creamy vegan curry made from potatoes and peas that is easy to make and flavorful.\n\n3. Aloo Gobi: A vegan-friendly dish made from potatoes and cauliflower that is wonderfully spiced with cumin, coriander and turmeric.\n\n4. Tofu Tikka Masala: A protein-rich curry made with cubed tofu and a flavorful tomato-based sauce.\n\n5. Vegetable Korma: A vegan-friendly curry made with a variety of vegetables, coconut milk and Indian spices.\n\n6. Chickpea Palak: A protein-packed vegan dish made from cooked spinach and chickpeas.\n\n7. Dal Makhani: A creamy lentil-based dish that is vegan-friendly and packed with flavor.\n\n8. Cauliflower Rice Pilaf: A flavorful vegan-friendly dish made from cooked cauliflower rice and a variety of spices.\n\n9. Eggplant Bhaji: A delicious vegan-friendly dish made from roasted eggplant cubes and a flavorful masala sauce.\n\n10. Okra Masala: A vegan-friendly dish made from cooked okra and aromatic Indian spices.",
                "index": 0,
                "logprobs": null,
                "finish_reason": "stop"
            }
        ],
        "usage": {
            "prompt_tokens": 12,
            "completion_tokens": 280,
            "total_tokens": 292
        }
    },
    "status": 200,
    "statusText": "",
    "headers": {
        "cache-control": "no-cache, must-revalidate",
        "content-type": "application/json"
    },
    "config": {
        "transitional": {
            "silentJSONParsing": true,
            "forcedJSONParsing": true,
            "clarifyTimeoutError": false
        },
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1,
        "headers": {
            "Content-Type": "application/json",
            "User-Agent": "OpenAI/NodeJS/3.2.1",
            "Authorization": "Bearer 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"
        },
        "method": "post",
        "data": "{\"model\":\"text-davinci-003\",\"prompt\":\"Recipe suggestions based on vegan restrictions for dinner and  Indian cuisine\",\"max_tokens\":2048}",
        "url": "https://api.openai.com/v1/completions"
    },
    "request": {}
}
    */

    console.log(completion)
    if (completion && completion.data.choices && completion.data.choices[0]) {
      const response = completion.data.choices[0].message
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
