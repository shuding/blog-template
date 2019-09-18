import { MDXProvider } from '@mdx-js/tag'

import Head from './helpers/head'
import theme from '../theme'

export default meta => ({ children }) => <MDXProvider components={theme.components}><>
  <Head>
    <title>{meta.title}</title>
  </Head>
  <theme.Container>
    <theme.components.h1>{meta.title}</theme.components.h1>
    <theme.Nav url={meta.url}/>
    <theme.Content>{children}</theme.Content>
    <theme.Footer/>
  </theme.Container>
</></MDXProvider>
