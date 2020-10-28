import React, { useState, useEffect } from 'react';
import BoardItem from './../boardItem/index'
import { Grid, Box } from '@material-ui/core';

import APICaller from '../../until/callAPI'
import InputBoard from '../inputBoard/index'

const BoardList = (props) => {
    const [boards, setBoards] = useState([]);
    const [isReset, setIsReset] = useState(false)

    useEffect(() => {
        APICaller('boards', 'GET', null).then(res => {
            setBoards(res.data)
        });
    }, [isReset]);


    const handleReset = () => {
        setIsReset(!isReset)
    }

    const createBoardList = () => {
        return (
            boards.map(board => {
                return (
                    <Grid item md={2} key = {board._id}>
                        <Box ml={2} mr={2} mt={2}>
                            <BoardItem name={board.name} id = {board._id} day = {board.date}/>
                        </Box>
                    </Grid>
                )
            })
        )
    }

    return (
        <div style={{ margin: "5px" }}>
            <h1>Board List</h1>
            <Grid container>
                <Grid item md={2} >
                    <Box ml={2} mr={2} mt={2}>
                        <InputBoard onReset={handleReset} />
                    </Box>

                </Grid>
                {createBoardList()}
            </Grid>
        </div>
    );
}

export default BoardList;
