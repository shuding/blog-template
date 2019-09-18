import Head from 'next/head'

export default ({ children }) => <Head>
  {children}
  <meta charSet="utf-8"/>
  <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta name="theme-color" content="#ffffff" />
</Head>
