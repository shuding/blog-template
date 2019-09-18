import Link from 'next/link'

const A = ({ children, href, ...props }) => {
  return  <Link href={href}>
    <a {...props}>
      {children}
      <style jsx>{`
        display: inline-block;
        margin-right: 1rem;
        font-size: 1.1rem;
        color: #111;
        text-decoration: none;
      `}</style>
    </a>
  </Link>
}

const P = ({ children }) => {
  return <p>
    {children}
    <style jsx>{`
      p {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      p :global(time) {
        display: inline-block;
        margin-bottom: 10px;
        font-size: 0.9rem;
        color: #999;
      }
      @media all and (max-width: 640px) {
        p {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    `}</style>
  </p>
}

export default {
  a: A,
  p: P
}
