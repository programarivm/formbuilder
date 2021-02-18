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

const CookiesPolicy = () => {
  const classes = useStyles()

  return <div>
    <Head>
      <title>HTML Form Builder | Cookies Policy</title>
    </Head>
    <MainNav />
    <Container maxWidth="lg">
      <Box className={classes.box}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Cookies Policy
        </Typography>
        <Typography variant="caption" component="p" align="center">
          Last Revised: February 18, 2021
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Paper className={classes.paper}>
            <Typography variant="p">
              Cookies? Mmm, they are delicious! This website does not collect personal data through third-party cookies.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    <Footer />
  </div>
}

export default CookiesPolicy
