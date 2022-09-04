import { Box, Container, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import PageLayout from '../components/shared/PageLayout/PageLayout'
import pic from '../images/donny-peace.jpg'

const Home = () => {
  return (
    <PageLayout>
      <Heading>Home</Heading>
      <Container>
        <Image borderRadius={'10px'} src={pic}/>     
      </Container>
      <Box>HELLOOOOOOOO</Box>
    </PageLayout>
  )
}

export default Home