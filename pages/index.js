import { Container } from '@material-ui/core';
import MainNav from 'components/MainNav'

const About = () => {
  return <>
    <MainNav />
    <Container maxWidth="lg">
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </Container>
  </>
}

export default About
