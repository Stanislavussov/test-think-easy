import React from 'react';
import s from './InputItems.module.css'

function InputItems(props) {

    let inputElements =
        props.questions.map((item, index) => <span key={index}>{item.newMessageTextWhat} {item.newMessageTextWhy}</span>);

    const [status, setStatus] = React.useState(true);
    const [notValid, setNotValid] = React.useState(false);

    const onHandleSubmit = (e) => {
        e.preventDefault();

        props.sendAll();
        setStatus(false);
        // if (e.target.value){
        //     props.sendAll();
        //     setStatus(false);
        // } else if (!e.target.value) {
        //     setNotValid(true);
        // }
    }

    const onUpdateInput = (e) => {
        if (e.target.name === 'what') {
            props.updateWhat(e.target.value);
        } else if (e.target.name === 'why') {
            props.updateWhy(e.target.value);
        }
    }

    const onStart = () => {
        setStatus(true);
        setNotValid(false);
        props.start();

    }

    return (
        <div>
            {inputElements}
            {status &&
            <form onChange={onUpdateInput}>
                <label>What?</label>
                <input className={notValid ? s.invalid : ''} name="what" value={props.messageTextWhat} type="text" required/>
                <label>Why?</label>
                <input className={notValid ? s.invalid : ''}  name='why' value={props.messageTextWhy} type="text" required/>
            </form>
            }
            {!status
                ? <button onClick={onStart}>START AGAIN</button>
                : <button onClick={onHandleSubmit}>SUBMIT</button>
            }
        </div>

    );
}

export default InputItems;
