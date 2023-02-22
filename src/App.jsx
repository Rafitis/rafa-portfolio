import './assets/Styles/main.css'
import { Box, Container, Heading, Stack, Link } from '@chakra-ui/react'
import { Title } from './Layouts/Header/Title'

function App () {
  return (
    <header>
      <Box position='fixed' as='nav' width='100%'>
        <Container display='flex' alignContent='center' justifyContent='space-between' md={0}>
          <Heading as='h1' size='md' letterSpacing='tighter'>
            <Title />
          </Heading>
          <Stack display='flex-row' alignItems='center' width='auto'>
            <Link href='\works' p={2}>Works</Link>
            <Link href='\posts' p={2}>Posts</Link>
            <Link href='\github' p={2}>Source</Link>
          </Stack>
        </Container>
      </Box>
    </header>
  )
}

export default App
