import React from 'react'
import type { AppProps } from 'next/app'

import '../styles/globals.css'

export default function CurrencyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
