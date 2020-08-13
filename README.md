# Next.js Blog Template

A simple and out-of-the-box Next.js blog template with Markdown (MDX), RSS, CDN (▲ Vercel) support.

Demo: [blog-template.vercel.app](https://blog-template.vercel.app)

## Create Your Own Blog

[![Deploy with Vercel](https://vercel.com/button)](https://deploy.new/shuding/blog-template)

## Tips
- Update your blog name and URL in `rss.js`.
- The structure of `/pages` directory will be the exact same as your site's URL structure.
- To list a post on myblog.com/posts, add it to `/pages/posts/index.mdx`.
- Put all your static files (files, images, etc.) under the `/static` folder (will be cached in the CDN).
- Put all your public files (favicons, etc.) under the `/public` folder (will be accessiable via the root path: myblog.com/).
- The components (navbar, footer, etc.) are located in `/theme` directory.
- To change the styles / add Google Analytics, see `/theme/container.js`.

## ▲

Every single push to master gets deployed to the **[▲ Vercel](https://vercel.com)** Cloud automatically.  
Powered by **Next.js**, **MDX** and **▲ Vercel**.

## Development

- Install `yarn` from [yarnpkg.org](https://yarnpkg.org)
- Run `yarn dev` and open `localhost:3000`

## License

Open sourced under the MIT License.
