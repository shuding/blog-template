import headings from './headings'
import link from './link'
import blockquote from './quote'
import hr from './hr'
import strong from './strong'

import Container from './container'
import Content from './content'
import Footer from './footer'
import Nav from './nav'

import TemplateList from './template-list'

export default {
  components: {
    ...headings,
    ...link,
    ...blockquote,
    ...hr,
    ...strong
  },
  Container,
  Content,
  Footer,
  Nav,
  TemplateList
}
