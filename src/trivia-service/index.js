const qs = require('querystring');

const apiUrl = process.env.NODE_ENV === 'development'
? 'http://localhost:4000'
: 'https://api.zetterstrom.dev/trivia';

const triviaService = {
  questions: (config) => fetch(`${apiUrl}/questions/?${qs.encode(config)}`).then(res => res.json())
}

export default triviaService;