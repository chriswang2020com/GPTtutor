const API_KEY = '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';  // 替换为您的 OpenAI API 密钥

const questionForm = document.getElementById('question-form');
const questionInput = document.getElementById('question-input');
const answerElement = document.getElementById('answer');

questionForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const question = questionInput.value.trim();
  if (question) {
    answerElement.textContent = 'Fetching answer...';
    const answer = await fetchAnswer(question);
    answerElement.textContent = answer;
  }
});

async function fetchAnswer(prompt) {
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        prompt: `User: ${prompt}\nAssistant:`,
        max_tokens: 150,
        n: 1,
        stop: null,
        temperature: 0.7,
      }),
    });
  
    const data = await response.json();
    const message = data.choices[0].text.trim();
    answerElement.textContent = message;
    return message;
  }
  