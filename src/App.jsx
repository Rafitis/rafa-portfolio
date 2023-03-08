import './assets/Styles/main.css'
import { Container, Box, Center, Avatar, Text, Heading } from '@chakra-ui/react'
import { NavBar } from './Layouts/Header/NavBar'
import { Title } from './Layouts/Header/Title'
function App() {
  return (
    <Container as='main' width='100%' alignContent='center'>
      <Container display='flex' justifyContent='space-between' mt='20px'>
        <Title />
        <NavBar />
      </Container>

      <Container as='article'>
        <Box bg='RGBA(255, 255, 255, 0.08)' borderRadius='0.5rem' p={2} mb={10}>
          <Center as='p'>Hello, I'm an indie app developer based in Madrid!</Center>
        </Box>
        <Box display='flex' justifyContent='space-between' mb={5}>
          <Box display='grid'>
          <Heading as='h1'>Rafael Ginard</Heading>
          <Text>Technology enthusiast (Developer / Deep Learning / Data Science ) engineer</Text>
          </Box>
          <Avatar size='xl' src='https://bit.ly/sage-adebayo' name='Rafael Ginard'></Avatar>
        </Box>
        <Text>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Text>
      </Container>
    </Container>
  )
}

export default App
