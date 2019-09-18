import link from './link'

const Item = ({ name, path, active }) => {
  if (!active) {
    return <link.a href={path} prefetch>{name}</link.a>
  }
  return <span>{name}</span>
}

export default ({ url }) => <div className='navigation'>
  <Item name='Posts' path='/posts' active={url === '/blog'}/>
  <Item name='Home' path='/' active={url === '/'}/>
  <style jsx>{`
    .navigation {
      display: flex;
      justify-content: flex-end;
      margin: 3rem -.5rem 1rem;
    }
    .navigation :global(span) {
      color: #999;
      cursor: default;
    }
    .navigation :global(a), .navigation :global(span) {
      margin: 0 .5rem;
    }
  `}</style>
</div>
