import { useEffect, useRef } from 'react'

export default ({src, title, alt, full, overflow}) => {
  const imgRef = useRef(null)
  useEffect(() => {
    // CSR
    if (typeof window !== 'undefined') {
      const Lightense = require('lightense-images')

      // singleton
      Lightense(imgRef.current, {
        time: 200,
        padding: 40,
        offset: 40,
        keyboard: true,
        cubicBezier: 'cubic-bezier(.2, 0, .1, 1)',
        background: 'white',
        zIndex: 2,
        container: document.querySelector('.lightense-backdrop')
      })
    }
  })

  return <figure>
    <img className={overflow ? 'overflow' : (full ? 'full' : '')} src={src} alt={alt || title} ref={imgRef} />
    {title && <figcaption>{title}</figcaption>}
    <style jsx>{`
      figure {
        margin: 2rem 0 2.5rem;
      }
      img {
        margin: 0;
        max-width: 100%;
        text-align: center;
      }
      img.overflow {
        margin: 0 -120px;
        max-width: calc(100% + 240px);
      }
      figcaption {
        margin-top: .8rem;
        text-align: center;
        font-size: .8rem;
        color: #999;
      }
      figcaption :global(a) {
        color: inherit;
      }

      @media all and (max-width: 40rem) {
        img.full {
          margin: 0 calc(50% - 19rem);
          max-width: 38rem;
        }
      }

      @media all and (max-width: 38rem) {
        img.full {
          margin: 0 -1rem;
          max-width: calc(100% + 2rem);
        }
      }

      @media all and (max-width: ${640 + 240}px) {
        img.overflow {
          margin: 0 -1rem;
          max-width: calc(100% + 2rem);
        }
      }
    `}</style>
  </figure>
}
