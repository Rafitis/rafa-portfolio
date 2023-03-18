import { Link, Text, Heading } from '@chakra-ui/react'

export function Title () {
  return (
    <Heading as='h2' size='md' letterSpacing='tighter' mt={2} mr={40}>
      <Link href='\'>
        <Text fontWeight='bold'>
          Rafa Ginard
        </Text>
      </Link>
    </Heading>
  )
}
