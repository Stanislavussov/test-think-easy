import React, {useEffect, useState} from 'react';
import s from './Main.module.css';
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import InputCustom from "./modals/InputCustom";

export const Main = ({send, inputData}) => {
    const arrInputs = ['Who', 'What', 'When', 'Where']
    const [value, setValue] = useState(0)

    useEffect(() => {
        let count = 0
        arrInputs.forEach(item => inputData[item] ? count++ : null)

        setValue((100 / 4) * count)
    }, [inputData])

    const changeInputs = (e) => {
        send(e.target)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.main}>
                <div className={s.inputs}>

                    {
                        arrInputs.map((item, idx) => {
                            return <InputCustom name={item} inputs={inputData} onChange={changeInputs} key={idx}/>
                        })
                    }
                </div>
                <div className={s.text}>
                    <Typography className={s.typography} variant="h4" component="h1">

                        {
                            arrInputs.map(item => {
                                return (<>{inputData[item]}&nbsp;</>)
                            })
                        }

                    </Typography>
                </div>
                <LinearProgress variant="determinate" value={value}/>
            </div>
        </div>
    );
}