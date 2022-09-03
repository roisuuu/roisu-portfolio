// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// To make custom colours, add to here.
const colors = {
  backgroundGray: '#edf2f7'
}

// 3. extend the theme
const theme = extendTheme({ config, colors })

export default theme