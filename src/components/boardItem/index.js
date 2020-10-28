import React ,{ useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'


import APICaller from '../../until/callAPI'

const BoardItem = (props) => {

    const [taskNumber, setTaskNumber] = useState(0);
    useEffect(() => {
        APICaller('tasks/' + props.id, 'GET', null).then(res => {
            setTaskNumber(res.data.length);
        });
    }, [props.id]);
    const day = new Date(props.day);
    return (
        <Link to= {process.env.PUBLIC_URL + '/boards?id=' + props.id} >
        <Card style = {{border: "1px solid black"}}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Grid container justify="space-between">
                        <Grid item>
                            <Typography variant="body2" color="textSecondary" component="p">
                                { day.getDate() + "/" + (day.getMonth() + 1) + "/" + day.getFullYear()}
                                
                        </Typography>
                        </Grid>

                        <Grid item>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {taskNumber} tasks
                        </Typography>
                        </Grid>
                    </Grid>
                   
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Grid container justify="space-between">
                    <Grid item>
                        <Button size="small" color="primary">
                            URL
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button size="small" color="primary">
                            Clone
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card >
        </Link>

    );
}

export default BoardItem;