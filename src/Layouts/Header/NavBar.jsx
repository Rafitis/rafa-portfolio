import { Stack, Link, Image } from '@chakra-ui/react'

export function NavBar () {
  return (
    <Stack direction='row' alignItems='right' width='auto' as='Nav' justifyContent='space-between' >
      <Link href='\works' p={2}>Works</Link>
      <Link href='\posts' p={2}>Posts</Link>
      <Link href='\github' p={2} display='flex'>
        <Image src='src\assets\github.svg' boxSize='20px' bg='white' borderRadius='full' mr={2} /> Source
      </Link>
    </Stack>
  )
}
