
const initial = {
  activeQuestion: null,
  questions: [],
  score: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'answer question': return {
      score: action.answer === state.activeQuestion.correct
        ? state.score + 1
        : state.score,
      activeQuestion: state.questions.pop(),
      questions: state.questions
    };
    case 'set questions': return {
      score: 0,
      activeQuestion: action.questions.pop(),
      questions: action.questions
    };
    default: throw new Error('Bad action in game reducer');
  }
}

export default {initial, reducer};