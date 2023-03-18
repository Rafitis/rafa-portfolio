import { Container, Box, Center, Avatar, Text, Heading, Flex, Stack, Divider } from '@chakra-ui/react'
import { NavBar } from './Layouts/Header/NavBar'
import { Title } from './Layouts/Header/Title'
function App() {
  return (
    <Stack ml={540} mr={540}>
      <Box as='header' display='flex' width='100%' borderColor='red' mt='20px' borderWidth='5px'>
        <Title />
        <NavBar />
      </Box>

      <Flex as='article' direction='column' alignItems="center" justifyContent="center" mt={10} borderColor='red' borderWidth='5px' p={5}>
        <Box bg='RGBA(255, 255, 255, 0.08)' borderRadius='0.5rem' p={2} mb={10}>
          <Center as='p'>Hello, I'm an indie app developer based in Madrid!</Center>
        </Box>
        <Box display='flex' justifyContent='space-between' mb={5}>
          <Box>
            <Heading as='h1'>Rafael Ginard</Heading>
            <Text mr={5}>Technology enthusiast (Developer / Deep Learning / Data Science ) engineer</Text>
          </Box>
          <Avatar size='xl' src='https://bit.ly/sage-adebayo' name='Rafael Ginard'></Avatar>
        </Box>
        <Box mb={5}>
          <Heading as='h5' size='md' mb={2}>
            Work
            <Divider />
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Box>
      </Flex>
    </Stack>
  )
}

export default App
