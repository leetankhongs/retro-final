import React from 'react';
import BoardPage from './pages/BoardPage/index';
import BoardDetail from './pages/BoardDetailPage/index'

const routes = [
    {
        path: process.env.PUBLIC_URL + '/',
        exact: true,
        main: ()=> <BoardPage/>
    },
    {
        path: process.env.PUBLIC_URL+'/boards',
        exact: true,
        main: ({location})=> <BoardDetail location = {location}/>
    },
    {
        path: '',
        exact: false,
        main: ()=> <BoardPage/>
    }
]

export default routes;