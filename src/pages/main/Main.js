import React, {useState} from 'react';
import s from './Main.module.css'
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import InputCustom from "./modals/InputCustom";
import {keys} from "@material-ui/core/styles/createBreakpoints";

function Main({send, getInputs}) {
    // const [inputs, setInputs] = useState({
    //     Who: '', What: '', When: '', Where: ''
    // })

    // сonst [value, setValue] = useState(0)

    const arrInputs = ['Who', 'What', 'When', 'Where']

    console.log(getInputs)
    const changeInputs = (e)=>{
        send(e.target)
        // setInputs({...inputs, [e.target.name]: e.target.value})
        // let count = 0
        // let l = 0
        //
        // for (let key in inputs) {
        //     if (inputs[key]){
        //         if (value < 76) {
        //             const d = value + 25
        //             setValue(d)
        //         }
        //     }
        //
        // }
        // // console.log(inputs)
        // // for (let key in inputs) {
        // //     console.log(inputs[key])
        // //     count = inputs[key] ? (100 / 4) : value
        // //     setValue(count)
        // // }
        //
        // console.log(value)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.main}>
                <div className={s.inputs}>

                    {
                        arrInputs.map((item, idx)=>{
                            return <InputCustom name={item} inputs={getInputs} onChange={changeInputs} key={idx}/>
                        })
                    }

                </div>
                <div className={s.text}>
                    <Typography className={s.typography} variant="h4" component="h1">
                        {getInputs.Who}
                        &nbsp;
                        {getInputs.What}
                        &nbsp;
                        {getInputs.When}
                        &nbsp;
                        {getInputs.Where}
                    </Typography>
                </div>
                {/*<LinearProgress variant="determinate"  value={value} />*/}
            </div>
        </div>

    );
}

export default Main;
