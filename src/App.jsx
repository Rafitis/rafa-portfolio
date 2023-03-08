import './assets/Styles/main.css'
import { Container } from '@chakra-ui/react'
import { NavBar } from './Layouts/Header/NavBar'
import { Title } from './Layouts/Header/Title'
function App () {
  return (
    <Container display='flex' alignContent='center' justifyContent='space-between' mt='20px'>
      <Title />
      <NavBar />
    </Container>
  )
}

export default App
