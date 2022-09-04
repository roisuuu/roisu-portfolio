import { Box } from '@chakra-ui/react'
import React from 'react'

const PageLayout = (props) => {
  return (
    <Box p='16px'>
      {props.children}
    </Box>
  )
}

export default PageLayout