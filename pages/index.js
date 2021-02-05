import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Grid, Paper, Typography } from '@material-ui/core'
import MainNav from 'components/MainNav'
import Footer from 'components/Footer'
import Head from 'next/head'

const useStyles = makeStyles((theme) => ({
  box: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

const About = () => {
  const classes = useStyles()

  return <div>
    <Head>
      <title>HTML Form Builder</title>
      <meta name="description" content="HTML form builder to design nice forms with no code." />
    </Head>
    <MainNav />
    <Container maxWidth="lg">
      <Box className={classes.box}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          It's a piece of cake!
        </Typography>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Build HTML forms without writing any code at all
        </Typography>
        <Typography variant="h5" component="h3" align="center">
          Just drag and drop with this absolutely amazing web app
        </Typography>
      </Box>
      <Grid container spacing={5}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography variant="body1">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography variant="body1">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography variant="body1">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    <Footer />
  </div>
}

export default About
