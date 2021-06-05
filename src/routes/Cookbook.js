import React from 'react';
//import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
//import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
//import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Divider from '@material-ui/core/Divider';
import G from 'glob';
//import Link from '@material-ui/core/Link';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );

const useStyles = makeStyles( ( theme ) => ( {
    heroContent: {
        backgroundColor: theme.palette.action.active,
        padding: theme.spacing( 10 ),
        //marginLeft: theme.spacing(0),
        color: theme.palette.primary.contrastText,
        alignItems: 'center',
    },
    heroButtons: {
        marginTop: theme.spacing( 4 ),
    },
    cardGrid: {
        backgroundColor: theme.palette.background.paper,
        paddingTop: theme.spacing( 8 ),
        paddingBottom: theme.spacing( 8 ),
        paddingLeft: theme.spacing( 20 ),
        paddingRight: theme.spacing( 20 ),

    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing( 1 ),
        marginRight: theme.spacing( 1 ),
        width: '25ch',
    },
    button: {
        marginLeft: theme.spacing( 1 ),
        // paddingRight: theme.spacing( 1 ),
        // width: '25ch',
    },
    gridPadding: {
        margin: theme.spacing( 3, 0, 0 ),
        paddingLeft: theme.spacing( 1 ),
        // width: '25ch',
    },
    avatar: {
        margin: theme.spacing( 1 ),
        backgroundColor: theme.palette.secondary.main,
    },
    signIn: {
        paddingBottom: theme.spacing( 2 ),
    },
    divider: {
        height: 28,
        margin: 4,
      },

} ) );

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Cookbook () {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <Grid>
                <div>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography className={classes.signIn} component="h1" variant="h5">
                        Username
        </Typography>
                </div>
                </Grid>
                <Divider className={classes.divider} orientation="vertical" />
                <Grid>
                <div className={classes.heroContent}>
                    <Container maxWidth="xs">
                        {/* <Typography component="h3" variant="h4" align="center"  gutterBottom>
              Explore
            </Typography> */}
                        <TextField
                            id="standard-full-width"
                            label="Username"
                            style={{ margin: 8 }}
                            defaultValue="Placeholder"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-full-width"
                            label="Email"
                            style={{ margin: 8 }}
                            defaultValue="Placeholder"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <Grid container className={classes.gridPadding}>
                            <Grid item xs>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                // className={classes.submit}
                                >
                                    Update
          </Button>
                            </Grid>
                            <Grid item xs>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                >
                                    Logout
          </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                </Grid>
                <Container className={classes.cardGrid} maxWidth="lg">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map( ( card ) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Heading
                    </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the content.
                    </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                    </Button>
                                        <Button size="small" color="primary">
                                            Edit
                    </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ) )}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}