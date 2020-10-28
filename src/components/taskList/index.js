import { useEffect, useState } from 'react';
import { Button, Grid, Box } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import TaskItem from '../taskItem/index'
import InputTask from '../inputTask/index'
import APICaller from '../../until/callAPI'

const TaskList = (props) => {
    const [tasks, setTasks] = useState([]);
    const [columns, setColumns] = useState([]);
    const [indexAddColumn, setIndex] = useState(-1);
    const [isReset, setIsReset] = useState(false);

    useEffect(() => {
        APICaller('tasks/' + props.id, 'GET', null).then(res => {
            setTasks(res.data);
        });

        APICaller('columns', 'GET', null).then(res => {
            setColumns(res.data);
        })

    }, [isReset, props.id]);

    const handleClick = (value) => {
        if (value === indexAddColumn) {
            setIndex(-1);
        } else {
            setIndex(value);
        }
    }

    const handleReset = () => {
        setIsReset(!isReset);
    }

    const handleClicked = () => {
        setIndex(-1);
        setIsReset(!isReset);
    }

    const handleDeleteInputTask = () => {
        setIndex(-1);
    }
    const renderBoard = () => {
        return (
            <Grid container  >
                {
                    columns.map((column, index) => {
                        const matchBoards = tasks.filter(task => task.type === column.value);
                        return (
                            <Grid item md={4} xs={12} key={index}  >
                                <Box mf={2} mr={2}>
                                    <div ><h3>{column.label}</h3></div>

                                    <div >
                                        <Button variant="contained" fullWidth={true} onClick={() => handleClick(column.value)}><AddIcon /></Button>
                                    </div>

                                    {indexAddColumn === column.value ?
                                        <Box mt={2} mb={2} >
                                            <InputTask color={column.color} value={column.value} onClicked={handleClicked} onDelete={handleDeleteInputTask} board={props.id} />
                                        </Box> : ""}
                                    {matchBoards.map((board, dex) => {
                                        return (
                                            <Box mt={2} mb={2} key={dex}>
                                                <TaskItem description={board.description} background={column.color} onDelete={handleReset} id={board._id} />
                                            </Box>
                                        )
                                    })}
                                </Box>
                            </Grid>
                        )
                    })
                }
            </Grid>
        )
    }
    return (
            <div style = {{margin: "10px"}}>
                {renderBoard()}
            </div>
    )
}

export default TaskList;