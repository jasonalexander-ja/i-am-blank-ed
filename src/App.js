import React, { useState } from 'react';

import { 
    createStyles, 
    makeStyles 
} from '@mui/styles';
import { 
    Paper,
    Grid,
    Backdrop,
    CircularProgress,
    Card,
    CardContent,
    Typography
} from '@mui/material';

import Page from './components/Page';

import backgroundImage from './images/background.jpg';

const useStyles = makeStyles(theme =>
    createStyles({
        root: {
            width: '100%', 
            height: '100%',
            position: 'relative',
            opacity: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '&::after': {
                content: '""',
                backgroundImage: `url("${backgroundImage}")`,
                zIndex: 100,
                backgroundSize: 'cover',
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                opacity: 0.5,
            }
        },
        content: {
            height: '100%',
            zIndex: 1000,
            paddingTop: theme.spacing(1)
        },
        card: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            backgroundColor: theme.palette.primary.main,
            background: 'rgba(128,128,128,1)'
        },
        cardContent: {
            flexGrow: 1,
            padding: '0px!important'
        },
    }),
);

const App = props => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    return (
        <Paper className={classes.root}>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={error}
            >
                <Grid
                    container
                    justifyContent='center'
                    direction="column"
                >
                    <Grid item>
                        <Typography align="center" variant="h3">Sorry, there was an error there.</Typography>
                    </Grid>
                    <Grid item>
                        <Typography align="center" variant="h5">Servers get hangover too.</Typography>
                    </Grid>
                </Grid>
            </Backdrop>
            <Grid
                container
                className={classes.content}
            >
                <Grid
                    item
                    xs={null}
                    lg={2}
                />
                <Grid
                    item
                    container
                    justifyContent="center"
                    xs={12}
                    lg={8}
                >
                    <Grid
                        container
                        justifyContent="center"
                        spacing={12}
                    >
                        <Grid
                            item
                            xs={11}
                            sm={8}
                        >
                            <Card className={classes.card}>
                                <CardContent className={classes.cardContent}>
                                    <Page 
                                        setLoading={setLoading}
                                        setError={setError}
                                    />
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    xs={null}
                    lg={2}
                />
            </Grid>
        </Paper>
    );
}

export default App;
