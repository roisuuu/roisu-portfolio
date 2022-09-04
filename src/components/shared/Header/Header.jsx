import { Box, Button, ButtonGroup, HStack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import Logo from '../../core/Logo/Logo'

const Header = () => {
  return (
    <Box
      position='sticky'
      top='0'
      zIndex={'5000'}
    >
      <Box bg='white' boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Box px='8' py={{ base: '4', lg: '5' }}>
          <HStack spacing="10" justify="space-between">
            <Logo/>
            <ButtonGroup variant="link" spacing="8">
              {['About', 'Projects', 'Stuff', 'Contact'].map((item) => (
                <Button key={item}>{item}</Button>
              ))}
            </ButtonGroup>
          </HStack>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
