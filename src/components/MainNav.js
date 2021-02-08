import { AppBar, Button, CssBaseline, Grid, Toolbar } from '@material-ui/core';
import Link from 'next/link';

const MainNav = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Grid container justify="space-between">
            <Grid item>
              <Link href="/">
                <img src="logo.png" alt="HTML Form Builder" />
              </Link>
            </Grid>
            <Grid item style={{ marginTop: 10 }}>
              <Link href="/">
                <Button variant="text" color="inherit">About</Button>
              </Link>
              <Link href="/build">
                <Button variant="text" color="inherit">Build</Button>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MainNav;
