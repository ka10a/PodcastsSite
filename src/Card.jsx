import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Button, Drawer, Link, Snackbar} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 250,
        width: 250,
        margin:"auto",
        alignContent: "center",
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const PodcastCard = ({podcast}) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;
    const [counter, setCounter] = React.useState(0)

    const toggleDrawer = () => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setExpanded(false);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleHeartClick = (newState) => () => {
        setCounter(counter+1)
        setState({ open: true, ...newState });
    };

    const handleHeartClose = () => {
        setState({ ...state, open: false });
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                title={podcast.name}
            />
            <CardMedia
                className={classes.media}
                image={podcast.img}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {podcast.description}
                </Typography>

            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={handleHeartClick({ vertical: 'bottom', horizontal: 'center' })}>
                    <FavoriteIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleHeartClose}
                message={`${counter} likes`}
                key={vertical + horizontal}
            />
            <Drawer anchor="right" open={expanded} onClose={toggleDrawer()}>
                <div style={{padding:30}}>
                    <div>
                        <Typography variant="h4" color="textPrimary"  style={{textAlignLast: "center", paddingBottom: 10}}>
                            {podcast.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary"  style={{textAlignLast: "center", paddingBottom: 10}}>
                            {podcast.description}
                        </Typography>
                    </div>
                    <div style={{textAlignLast: "center"}}>
                        <img src={podcast.img} style={{paddingBottom: 10}}/>
                    </div>
                    <Typography paragraph style={{maxWidth: 345}}>
                        {podcast.fullDescription}
                    </Typography>
                    <div style={{textAlignLast: "center"}}>
                        <Button variant="contained" color="primary" href={podcast.src} style={{height:40}}>
                            <p> Слушать на Яндекс.Музыке!</p>
                        </Button>
                    </div>
                </div>
            </Drawer>
        </Card>
    );
}

export default PodcastCard;