const H1 = ({ children, id, ...props }) => <h1 id={id} {...props}>
  {children}
  <style jsx>{`
    h1 {
      font-size: 1.5em;
      font-weight: 800;
    }
  `}</style>
</h1>

const H2 = ({ children, id }) => <h2 id={id}>
  <a href={'#' + id}>{children}</a>
  <style jsx>{`
    h2 {
      margin-top: 2.5rem;
      font-size: 1.333em;
      font-weight: 700;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
  `}</style>
</h2>

const H3 = ({ children, id }) => <h3 id={id}>
  <a href={'#' + id}>{children}</a>
  <style jsx>{`
    h3 {
      margin-top: 2.0rem;
      font-size: 1.185em;
      font-weight: 600;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
  `}</style>
</h3>

const H4 = ({ children, id }) => <h4 id={id}>
  <a href={'#' + id}>{children}</a>
  <style jsx>{`
    h4 {
      margin-top: 1.5rem;
      font-size: 1.053em;
      font-weight: 600;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
  `}</style>
</h4>

export default {
  h1: H1, 
  h2: H2,
  h3: H3,
  h4: H4
}
