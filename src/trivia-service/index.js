
const apiUrl = process.env.NODE_ENV === 'development'
? 'http://localhost:3001'
: 'https://api.zetterstrom.dev/';

const triviaService = {
  questions: (config) => fetch(`${apiUrl}/questions`).then(res => res.json())
}

export default triviaService;