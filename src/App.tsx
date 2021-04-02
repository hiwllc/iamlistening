import { Grid, Image, Heading, Text, Box, Button, Link, Stack } from '@chakra-ui/react'
import { data } from './data'

function App() {
  return (
    <Grid w="100%" h="100vh" background={`url(${data.item.album.images[0].url})`} backgroundRepeat="no-repeat" backgroundPosition="center" backgroundSize="cover">
      <Grid placeItems="center" w="100vw" h="100vh" sx={{ backdropFilter: 'blur(1.5rem)' }}>
        <Stack alignItems="center" direction={['column', 'column', 'row']} spacing={8}>
          <Image src={data.item.album.images[1].url} borderRadius="lg" boxShadow="2xl" />
          <Box textAlign={["center", 'center', 'initial']}>
            <Heading fontSize={['4xl', "6xl"]} color="white">{data.item.name}</Heading>
            <Text fontSize="lg" color="white">from {data.item.artists[0].name}</Text>

            <Button mt={4} as={Link} href={data.item.external_urls.spotify}>listen on spotify</Button>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default App
