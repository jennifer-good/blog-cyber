# A statically generated blog example using Next.js, Markdown, and TypeScript

This was created from the existing [blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) plus TypeScript.

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there creates a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Demo

[https://next-blog-starter.vercel.app/](https://next-blog-starter.vercel.app/)

##  Run this app locally

Can do command npm run build to build locally
and then can do npm run start to start the app locally

## Deploy changes to production

This is run by Vercel so every push to main should deploy the app in production on phishandchips.online
Can check on deployments on the Vercel dashboard https://vercel.com/goodjen1014-6258s-projects/blog-cyber/deployments

# Blog Info
The blog is hosted at https://www.phish-and-chips.online/ and the domain is managed on squarespace https://account.squarespace.com/domains/managed/phish-and-chips.online

