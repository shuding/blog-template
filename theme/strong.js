const B = ({ children }) => <b>
  {children}
  <style jsx>{`
    b {
      font-weight: 600;
    }
  `}</style>
</b>

const Strong = ({ children }) => <strong>
  {children}
  <style jsx>{`
    strong {
      font-weight: 600;
    }
  `}</style>
</strong>

export default {
  b: B,
  strong: Strong
}
