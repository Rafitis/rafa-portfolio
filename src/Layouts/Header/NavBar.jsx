import { Stack, Link } from '@chakra-ui/react'

export function NavBar () {
  return (
    <Stack display='flex-container' alignItems='right' width='auto' as='Nav'>
      <Link href='\works' p={2}>Works</Link>
      <Link href='\posts' p={2}>Posts</Link>
      <Link href='\github' p={2}>
        <span>
          <img src='src\assets\github.svg' backgroundColor='white' width='20px' display='inline' />
        </span>
        Source
      </Link>
    </Stack>
  )
}
