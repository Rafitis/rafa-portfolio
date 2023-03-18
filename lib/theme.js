import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#202023',
        color: 'white'
      }
    }
  },

  fonts: {
    heading: "Karla",
    body: "Karla"
  }
})

export default theme
