import InputItems from "./InputItems";
import {connect} from "react-redux";
import {allSendAC, whatUpdateAC, whyUpdateAC, startAC} from "./inputReducer";

let mapStateToProps = (state) => {

    return {
        questions: state.inputPage.questions,
        messageTextWhat: state.inputPage.newMessageTextWhat,
        messageTextWhy: state.inputPage.newMessageTextWhy
    };
}

let mapDispatchToProps = (dispatch) => {

    return {
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

const InputItemsContainer = connect(mapStateToProps, mapDispatchToProps)(InputItems);
export default InputItemsContainer;