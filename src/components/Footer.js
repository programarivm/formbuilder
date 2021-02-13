import React from 'react';
import { Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import EmojiFoodBeverage from '@material-ui/icons/EmojiFoodBeverageTwoTone';
import GitHubIcon from '@material-ui/icons/GitHub';
import LockIcon from '@material-ui/icons/LockTwoTone';
import SubjectIcon from '@material-ui/icons/SubjectTwoTone';
import TwitterIcon from '@material-ui/icons/Twitter';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 90,
    paddingTop: 35,
    paddingBottom: 35,
    backgroundColor: '#e8e8e8'
  },
  company: {
    padding: theme.spacing(3),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} sm={12} md={1} />
      <Grid item xs={12} sm={12} md={5} className={classes.company}>
        <Typography color="secondary" variant="subtitle2">
          Company Name Goes Here,<br/>
          Something here to give the footer a purpose!<br/>
          Company Number: 1234567890
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <List component="nav" aria-label="legal">
          <ListItem button>
            <ListItemIcon>
              <SubjectIcon />
            </ListItemIcon>
            <ListItemText secondary="Terms and Conditions" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>
            <ListItemText secondary="Privacy Policy" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EmojiFoodBeverage />
            </ListItemIcon>
            <ListItemText secondary="Cookies Policy" />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <List component="nav" aria-label="social">
          <Link href="https://github.com/programarivm/formbuilder">
            <ListItem button>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText secondary="GitHub" />
            </ListItem>
          </Link>
          <Link href="https://twitter.com/programarivm">
            <ListItem button>
              <ListItemIcon>
                <TwitterIcon />
              </ListItemIcon>
              <ListItemText secondary="Twitter" />
            </ListItem>
          </Link>
        </List>
      </Grid>
    </Grid>
  );
}

export default Footer;
