import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import Link from 'next/link';

const MainNav = () => {
  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography component="h1" variant="h6" color="inherit" noWrap style={{ flex: 1 }}>
            HTML Form Builder
          </Typography>
          <Link href="/">
            <Button variant="text" color="inherit">About</Button>
          </Link>
          <Link href="/build">
            <Button variant="text" color="inherit">Build</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MainNav;
