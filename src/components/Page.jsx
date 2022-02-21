import React, { useState, useEffect } from 'react';

import {
    Grid,
    Typography,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Link
} from '@mui/material';
import {
    makeStyles,
    useTheme
} from '@mui/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
        setError
    } = props;

    const classes = useStyles();

    const [state, setState] = useState({
        loaded: false,
        word: ''
    });

    const theme = useTheme();

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
                <Typography gutterBottom={true} align="center" variant="h3">E.R.D.D.I.E</Typography>
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
            <Accordion>
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    className={classes.detailsHeader}
                >
                    <Typography>OwO What's thi?</Typography>
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
