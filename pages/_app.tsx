import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const settings = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  }
}
const theme = extendTheme({settings});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    < ChakraProvider theme={theme} >
      <title>HOWS - DEINE FAVOURITE</title>
      <div>
        <Component {...pageProps} />
      </div>
    </ChakraProvider >
  )
}
export default MyApp
