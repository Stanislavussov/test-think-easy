const SEND = 'SEND'


let initialState = {
    inputs: {Who: '', What: '', When: '', Where: ''},
}

const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND:
            return {
                ...state,
                inputs: {...state.inputs, [action.event.name]: action.event.value}
            }
        default:
            return state
    }
}

export const sendAC = (e) => ({type: SEND, event: e})


export default inputReducer;