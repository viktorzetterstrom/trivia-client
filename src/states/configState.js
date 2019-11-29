
const initial = {
  difficulty: "medium",
  amount: 20,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'difficulty easy': return {...state, difficulty: 'easy'};
    case 'difficulty medium': return {...state, difficulty: 'medium'};
    case 'difficulty hard': return {...state, difficulty: 'hard'};
    case 'amount 10': return {...state, amount: 10};
    case 'amount 20': return {...state, amount: 20};
    case 'amount 30': return {...state,amount: 30};
    default: throw new Error('Bad action in config reducer');
  }
}

export default {initial, reducer};