import { useState } from 'react';
import { Button, IconButton, Grid, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import APICaller from '../../until/callAPI'


const InputTask = (props) => {
    const newBorder = "5px solid " + props.color;
    const [textField, setTextField] = useState("");

    const handleClick = (event)=>{
        if(textField !== "")
        {
            APICaller("tasks", "POST", {
                type: props.value,
                description: textField,
                board: props.board
            }).then(res => props.onClicked())
    
            setTextField("")
        }
        
    }

    const handleChange = (event) =>{
        const target = event.target;
        const value = target.value;

        setTextField(value);
        
    }

    return (
        <Grid container justify="center" style={{ border:  newBorder}} >
            <Grid item md={11} >
                <form noValidate autoComplete="off"  >
                    <TextField id="textField" value = {textField} onChange = {handleChange} label="Description" variant="outlined" size="small" fullWidth style={{ marginTop: "5px" }} />
                </form>
            </Grid>
            <Grid item md={11}>
                <Grid container justify="space-between">
                    <Grid item  >
                        <Button variant="contained"  size = "small" style = {{margin: "2px", backgroundColor: "#76ff03"}} onClick = {handleClick}>
                            Add
                        </Button>
                    </Grid>
                    <Grid item >
                        <IconButton component="span" size="small" style = {{margin: "2px"}} onClick = {()=> props.onDelete()}>
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default InputTask;