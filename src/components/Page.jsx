import React, { useState, useEffect } from 'react';

import {
    Grid,
    Typography,
    Button
} from '@mui/material';
import {
    makeStyles
} from '@mui/styles';

const useStyles = makeStyles(theme => ({
    line: {
        padding: theme.spacing(3.5),
        paddingTop: '0px',
        backgroundColor: theme.palette.secondary.main
    },
    title: {
        backgroundColor: theme.palette.secondary.main,
        paddingBottom: theme.spacing(0.05),
    }
}));

const Page = props => {
    const {
        setLoading,
        setError
    } = props;

    const classes = useStyles();

    const [state, setState] = useState({
        loaded: false,
        word: ''
    });

    const getNewWord = async () => {
        setLoading(true);
        try {
            const res = await fetch('https://random-word-api.herokuapp.com/word').then(res => res.json());
            setState({ loaded: true, word: res[0] });
        } catch(e) {
            setError(true);
        }
        setLoading(false);
    }

    useEffect(() => {
        if(!state.loaded) {
            getNewWord();
        }
    })

    return (
        <Grid
            conatiner
        >
            <Grid
                item
                xs={12}
                justifyContent="center"
                className={classes.title}
            >
                <Typography gutterBottom={true} align="center" variant="h3">Drunkness Descriptor</Typography>
            </Grid>
            <Grid
                item
                xs={12}
                justifyContent="center"
            >
                <Typography gutterBottom align="center" variant="h5">I am completely...</Typography>
            </Grid>
            <Grid
                item
                container
                xs={12}
                justifyContent="center"
            >
                <Button variant="contained" onClick={() => { getNewWord() }}>New</Button>
            </Grid>
            <Grid
                item
                xs={12}
                justifyContent="center"
            >
                <Typography gutterBottom align="center" variant="h4">{state.word}-ed</Typography>
            </Grid>
            <Grid
                item
                xs={12}
                justifyContent="center"
                className={classes.line}
            />
        </Grid>
    );
}
 
export default Page;
