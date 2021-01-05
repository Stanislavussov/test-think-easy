import {connect} from "react-redux";
import {allSendAC, whatUpdateAC, whyUpdateAC, startAC, sendAC} from "./inputReducer";
import Main from "../pages/main/Main";

let mapStateToProps = (state) => {

    return {
        getInputs: state.inputPage.inputs,
        questions: state.inputPage.questions,
        messageTextWhat: state.inputPage.newMessageTextWhat,
        messageTextWhy: state.inputPage.newMessageTextWhy
    };
}

let mapDispatchToProps = (dispatch) => {

    return {
        send: (e)=>{
            dispatch(sendAC(e))
        },
        sendAll: () => {
            dispatch(allSendAC())
        },

        updateWhat: (text) => {
            dispatch(whatUpdateAC(text))
        },

        start: () => {
            dispatch(startAC());
        },

        updateWhy: (text) => {
            dispatch(whyUpdateAC(text))
        }
    };
}

const InputItemsContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
export default InputItemsContainer;