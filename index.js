const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
openai.api_key = process.env.OPENAI_API_KEY;

// Function to send a prompt to OpenAI and receive a completion
const completePrompt = async (prompt) => {
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    temperature: 0.8,
    max_tokens: 3000,
  });

  return completion.data.choices[0].text.trim();
};

// Example usage
const prompt = 'What is the current news on bitcoin';

//print response or error
completePrompt(prompt)
  .then((response) => {
    console.log('Response:', response);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
