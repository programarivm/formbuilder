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

const Terms = () => {
  const classes = useStyles()

  return <div>
    <Head>
      <title>HTML Form Builder | Terms of Use</title>
    </Head>
    <MainNav />
    <Container maxWidth="lg">
      <Box className={classes.box}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Terms of Use
        </Typography>
        <Typography variant="caption" component="p" align="center">
          Last Revised: February 18, 2021
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={12} md={12}>
          <Paper className={classes.paper}>
            <Typography variant="p" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Typography variant="p" paragraph>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
              modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
              commodi consequatur?
            </Typography>
            <Typography variant="p" paragraph>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
              deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
              fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
              debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
              non recusandae.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    <Footer />
  </div>
}

export default Terms
