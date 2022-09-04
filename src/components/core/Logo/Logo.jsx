import { Image } from '@chakra-ui/react'
import React from 'react'
import img from '../../../images/wizard-toad.jpg'

const Logo = () => {
  return (
    <Image
      borderRadius={'full'}
      boxSize='50px'
      src={img}
      alt='My Logo'
    />
  )
}

export default Logo