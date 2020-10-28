import { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions    } from '@material-ui/core';

import APICaller from '../../until/callAPI'

const InputBoard = (props) => {
    const [textField, setTextField] = useState("");

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const handleClick = (event) => {
        if (textField !== "") {
            APICaller("boards", "POST", {
                name: textField,
            }).then(res => props.onReset())

            setTextField("")
            setOpen(false);

        }

    }

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;

        setTextField(value);

    }

    return (
        <>
            <Button variant="outlined" color="primary" onClick={handleClickOpen} fullWidth={true} style={{ height: "150px" }}>
                Add Board
                    </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Board Name"
                        type="text"
                        fullWidth
                        value = {textField}
                        onChange = {handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                            </Button>
                    <Button onClick={handleClick} color="primary">
                        Subscribe
                            </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default InputBoard;