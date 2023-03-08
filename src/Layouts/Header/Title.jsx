import { Link, Text, Heading } from '@chakra-ui/react'

export function Title () {
  return (
    <Heading as='h1' size='md' letterSpacing='tighter'>
      <Link href='\'>
        <Text fontFamily='M PLUS rounded 1c, sans-serif' fontWeight='bold'>
          Rafa Ginard
        </Text>
      </Link>
    </Heading>
  )
}
