# Next.js Blog Template

A simple and out-of-the-box Next.js blog template with Markdown (MDX), RSS, CDN (▲ ZEIT Now) support.

Demo: [blog-template.now.sh](https://blog-template.now.sh/)

## Quick Start

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=quietshu/blog-template)

## Tips
- Update your blog name and URL in `rss.js`.
- The structure of `/pages` directory will be the exact same as your site's URL structure.
- To list a post on myblog.com/posts, add it to `/pages/posts/index.mdx`.
- Put all your static files (files, images, etc.) under the `/static` folder (will be cached in the CDN).
- Put all your public files (favicons, etc.) under the `/public` folder (will be accessiable via the root path: myblog.com/).
- The components (navbar, footer, etc.) are located in `/theme` directory.
- To change the styles / add Google Analytics, see `/theme/container.js`.

## ▲

Every single push to master gets deployed to the **[▲ ZEIT Now](https://zeit.co)** Cloud automatically.  
Powered by **Next.js**, **MDX** and **▲ ZEIT Now**.

## Development

- Install `yarn` from [yarnpkg.org](https://yarnpkg.org)
- Run `yarn dev` and open `localhost:3000`
