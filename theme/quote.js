const Blockquote = ({ children }) => (
  <blockquote>
    {children}
    <style jsx>{`
      color: #666;
      margin: 2rem 1rem;
    `}</style>
  </blockquote>
)

export default {
  blockquote: Blockquote
}
