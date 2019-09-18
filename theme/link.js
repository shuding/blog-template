import Link from 'next/link'

import colors from './color'

const A = ({ children, href, prefetch, ...props }) => {
  let external = false

  if (href && /^(https?:\/\/|\/\/)/.test(href)) {
    external = true
  }

  return  <Link href={href} prefetch={prefetch}>
    <a target={external ? '_blank' : null} {...props}>
      {children}
      <style jsx>{`
        color: ${colors.main};
        text-decoration: underline;
        text-decoration-color: transparent;
        cursor: pointer;
        :hover {
          text-decoration-color: currentColor;
        }
      `}</style>
    </a>
  </Link>
}

export default {
  a: A
}
