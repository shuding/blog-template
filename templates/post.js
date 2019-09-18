import { MDXProvider } from '@mdx-js/tag'
import { withRouter } from 'next/router'

import Head from './helpers/head'
import theme from '../theme'

export default meta => withRouter(({ children, router }) => {
  const rootPath = router.pathname.split('/').slice(0, -1).join('/')
  return <MDXProvider components={theme.components}><>
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
    </Head>
    <theme.Container itemScope itemType='http://schema.org/blogPost'>
      <theme.components.h1 itemType='headline'>{meta.title}</theme.components.h1>
      <div className='navigation'>
        <div className='meta'><span rel='author' itemType='author'>{meta.author}</span>, <time itemType='datePublished'>{meta.date}</time></div>
        <div className='back'><theme.components.a href={rootPath}>back</theme.components.a></div>
        <style jsx>{`
          .navigation {
            display: flex;
            justify-content: space-between;
            margin: 3rem 0 1rem;
          }
          .meta {
            color: #999;
          }
        `}</style>
      </div>
      <theme.Content meta={meta}>{children}</theme.Content>
      <theme.Footer/>
    </theme.Container>
  </></MDXProvider>
})
