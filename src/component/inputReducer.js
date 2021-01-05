const SEND_ALL = 'SEND_ALL';
const UPDATE_WHAT = 'UPDATE_WHAT';
const UPDATE_WHY = 'UPDATE_WHY';
const START = 'START';
const SEND = 'SEND'
// const WHERE = 'WHERE';
// const WHEN = 'WHEN';

let initialState = {
    inputs: {Who: '', What: '', When: '', Where: ''},
    questions: [],
    newMessageTextWhat: '',
    newMessageTextWhy: ''
}

const inputReducer = (state = initialState, action) => {
    switch (action.type){
        case SEND:
            return {
                ...state,
                inputs: {...state.inputs, [action.event.name]: action.event.value}
            }
        case UPDATE_WHAT:
            return {
                ...state,
                newMessageTextWhat: action.text
            }
        case UPDATE_WHY:
            return {
                ...state,
                newMessageTextWhy: action.text
            }
        case SEND_ALL:
            let textWhat = state.newMessageTextWhat;
            let textWhy = state.newMessageTextWhy;
            return {
                ...state,
                questions: [...state.questions, {newMessageTextWhat: textWhat}, {newMessageTextWhy: textWhy}],
                newMessageTextWhat: '',
                newMessageTextWhy: ''
            }
        case START: return initialState;
        default: return state
    }
}

export const allSendAC = () => ({type: SEND_ALL});
export const whatUpdateAC = (text) => ({type: UPDATE_WHAT, text: text});
export const whyUpdateAC = (text) => ({type: UPDATE_WHY, text: text});
export const startAC = () => ({type: START})
export const sendAC = (e) => ({type: SEND, event: e})
// export const whereAC = (text) => ({type: WHERE, inputText: text});
// export const whenAC = (text) => ({type: WHEN, inputText: text});

export default inputReducer;