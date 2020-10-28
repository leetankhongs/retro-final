import { useEffect, useState } from 'react';

import TaskList from './../../components/taskList/index'
import Header from './../../components/header/index'


const BoardDetail = (props) => {
    const [id, setID] = useState(null);
    useEffect(() => {
        console.log(props.location)
        if (props.location) {
            setID(new URLSearchParams(props.location.search).get('id'));
        }
    }, [props.location]);
    console.log(id)
    return (
        <>
            <Header />
            {id !== null? <TaskList id = {id}/>: ""}
            
        </>
    )
}

export default BoardDetail;