import { Box, ButtonGroup, ColorModeScript, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <Box
      as="footer"
      position='relative'
    >
      <Box
        backgroundColor='gray.100'
        role="contentinfo"
        mt='16px'
        py={{ base: '6', md: '8' }}
        px='24px'
      >
        <Stack spacing={{ base: '4', md: '5' }}>
          <Stack justify="space-between" direction="row" align="center">
            <Box>
              My Crappy Website!
            </Box>
            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                href="https://www.linkedin.com/in/royce-huang-2001/"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://github.com/roisuuu"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://twitter.com/Roisuuuuu"
                aria-label="Twitter"
                icon={<FaTwitter fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </Stack>
          <Text fontSize="sm" color="subtle">
            🤓🤠 Made by Royce Huang, {new Date().getFullYear()}.
          </Text>
        </Stack>
      </Box>
    </Box>
  )
}

export default Footer