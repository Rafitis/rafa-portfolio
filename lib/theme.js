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
    heading: "'M PLUS Rounded 1c'",
    body: "'M PLUS Rounded 1c'"
  }
})

export default theme
