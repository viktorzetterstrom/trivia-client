
const initial = {
  difficulty: 'medium',
  amount: 20,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'difficulty': return {...state, difficulty: action.difficulty};
    case 'amount': return {...state, amount: action.amount};
    case 'category': return {...state, amount: action.category};
    default: throw new Error('Bad action in config reducer');
  }
}

export default {initial, reducer};