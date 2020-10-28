import { IconButton, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import APICaller from '../../until/callAPI'

const TaskItem = (props) => {

    const handleClick = () => {

        if (confirm("Bạn có muốn xóa board này không?")) //eslint-disable-line
            APICaller('tasks/' + props.id, 'DELETE', null).then(res => {
                    props.onDelete();
            })

    }
    return (

        <Grid container style={{ backgroundColor: props.background, padding: "5px" }}>
            <Grid item >
                {props.description}
            </Grid>
            <Grid container direction="row" justify="flex-end" alignItems="baseline" spacing={0} >
                <Grid item>
                    <IconButton component="span" size="small">
                        <EditIcon />
                    </IconButton>
                </Grid>
                <Grid item >
                    <IconButton component="span" size="small" onClick={handleClick}>
                        <DeleteIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default TaskItem;