const API_KEY = 'NA/////changethisToYourKey';  // 替换为您的 OpenAI API 密钥
import { OpenAIApi } from "openai";
const questionForm = document.getElementById('question-form');
const questionInput = document.getElementById('question-input');
const answerElement = document.getElementById('answer');

questionForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const question = questionInput.value.trim();
  if (question) {
    answerElement.textContent = 'Fetching answer...';
    const answer = await therapyBot(question);
    answerElement.textContent = answer;
  }
});



async function fetchAnswer(prompt_input) {
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
      apiKey: API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt_input,
      temperature: 0.3,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
      stop: null,
    });
    
    console.log(response.data.choices[0].text);
    return response.data.choices[0].text;
    
  }  


  async function summaryBot(prompt_input) {
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
      apiKey: API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: 'make bullet points summary of the following text: ${prompt_input}',
      temperature: 0.3,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
      stop: null,
    });
    
    console.log(response.data.choices[0].text);
    return response.data.choices[0].text;
    
  }  

  async function therapyBot(prompt_input) {
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
      apiKey: API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: 'make bullet points summary of the following text: ${prompt_input}',
      temperature: 0.3,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
      stop: null,
    });
    
    console.log(response.data.choices[0].text);
    return response.data.choices[0].text;
    
  }  
  
