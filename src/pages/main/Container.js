import {connect} from "react-redux";
import {sendAC} from "../../redux/reducers/inputReducer";
import {Main} from "./Main";

let mapStateToProps = (state) => {

    return {
        inputData: state.inputPage.inputs,
    };
}

let mapDispatchToProps = (dispatch) => {

    return {
        send: (e) => {
            dispatch(sendAC(e))
        },
    };
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Main);
export default Container