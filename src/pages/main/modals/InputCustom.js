import TextField from "@material-ui/core/TextField";

const InputCustom = ({inputs, name, onChange})=>{
    return(
        <TextField
            label={name}
            name={name}
            value={inputs[name]}
            onChange={onChange}
        />
    )
}

export default InputCustom