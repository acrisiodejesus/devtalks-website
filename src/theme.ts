import { extendTheme } from '@chakra-ui/react'


export const theme = extendTheme({
  colors: {
    gray: {
      900: '#00160A',
      800: '#1B1B1B',
      700: '#2D2D2E',
    },
    green:{
      500: '#60BA1E'
    }
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif"
  },
  styles: {
    global: {
      'html, body': {
        bg: 'gray.800',
        color: 'white'
      }
    }
  }
})