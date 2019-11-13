
const apiUrl = process.env.NODE_ENV === 'development'
? 'http://localhost:6000'
: 'https://api.zetterstrom.dev/';

const triviaService = {
questions: () => fetch(`${apiUrl}/questions`).then(res => res.json()),
}

export default triviaService;