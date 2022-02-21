import React, { useState, useEffect } from 'react';

import {
    Grid,
    Typography,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Link,
    IconButton,
    Tooltip
} from '@mui/material';
import {
    makeStyles
} from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import ProcessWord from './ProcessWord';

const useStyles = makeStyles(theme => ({
    title: {
        backgroundColor: theme.palette.secondary.main,
        paddingBottom: theme.spacing(0.05),
    },
    detailsHeader: {
        backgroundColor: `${theme.palette.secondary.main}!important`
    }
}));

const Page = props => {
    const {
        setLoading,
        setError,
        loading,
        setCopySucess,
        setCopyFail
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
            const word = ProcessWord(res[0]);
            setState(oldVals => ({ ...oldVals, loaded: true, word: word }));
        } catch(e) {
            setError(true);
        }
        setLoading(false);
    };

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(`I am completely ${state.word}`);
            setCopySucess(true);
        } catch(e) {
            setCopyFail(true);
        }
    };

    useEffect(() => {
        if(!state.loaded && !loading) {
            getNewWord();
        }
    });

    return (
        <Grid
            container
        >
            <Grid
                item
                container
                xs={12}
                justifyContent="center"
                className={classes.title}
            >
                <Typography variant="h3">E.R.D.D.I.E</Typography>
            </Grid>
            <Grid
                item
                container
                xs={12}
                justifyContent="center"
                className={classes.title}
            >
                <Typography gutterBottom variant="paragraph1">Electronic Random Drunkness Descriptor Indicating Equipment</Typography>
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
                <Button variant="contained" onClick={() => getNewWord()}>New</Button>
            </Grid>
            <Grid
                item
                container
                xs={12}
                justifyContent="center"
            >
                <Typography gutterBottom align="center" variant="h4">
                    {state.word}
                    <Tooltip title="copy">
                        <IconButton size="small" onClick={() => copy()}>
                            <ContentCopyIcon />
                        </IconButton>
                    </Tooltip>
                </Typography>
                <div style={{display: 'none'}} id="copyDiv">I am completely {state.word}</div>
            </Grid>
            <Accordion>
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    className={classes.detailsHeader}
                >
                    <Typography>OwO What's this?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Based off of the rule stating "any word in the English language can be used to descibe how drunk you are",
                        we present ERDDIE, the <b>Electronic Random Drunkness Descriptor Indicating Equipment </b> 
                        (a reference to <Link href="https://en.wikipedia.org/wiki/Premium_Bond#ERNIE">ERNIE</Link>).
                    </Typography>
                    <br />
                    
                    <Typography>
                        This is a quick lunchtime project and likely to be expanded 
                        upon, <Link href="https://github.com/jasonalexander-ja/i-am-blank-ed">see the repo</Link> for any changes,
                        based on a free to use <Link href="https://random-word-api.herokuapp.com/home">random word API</Link>. 
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Grid>
    );
}
 
export default Page;
