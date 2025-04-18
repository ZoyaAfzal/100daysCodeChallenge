Day99-Task  Adding Metadata :

Metadata is crucial for SEO and shareability. In this chapter, we'll discuss how you can add metadata to your Next.js application.

In this chapter...

Here are the topics we’ll cover

What metadata is.

Types of metadata.

How to add an Open Graph image using metadata.

How to add a favicon using metadata.
What is metadata?

In web development, metadata provides additional details about a webpage. Metadata is not visible to the users visiting the page. Instead, it works behind the scenes, embedded within the page's HTML, usually within the <head> element. This hidden information is crucial for search engines and other systems that need to understand your webpage's content better.
Why is metadata important?

Metadata plays a significant role in enhancing a webpage's SEO, making it more accessible and understandable for search engines and social media platforms. Proper metadata helps search engines effectively index webpages, improving their ranking in search results. Additionally, metadata like Open Graph improves the appearance of shared links on social media, making the content more appealing and informative for users.
Types of metadata

There are various types of metadata, each serving a unique purpose. Some common types include:

Title Metadata: Responsible for the title of a webpage that is displayed on the browser tab. It's crucial for SEO as it helps search engines understand what the webpage is about.

<title>Page Title</title>

Description Metadata: This metadata provides a brief overview of the webpage content and is often displayed in search engine results.

<meta name="description" content="A brief description of the page content." />

Keyword Metadata: This metadata includes the keywords related to the webpage content, helping search engines index the page.

<meta name="keywords" content="keyword1, keyword2, keyword3" />

Open Graph Metadata: This metadata enhances the way a webpage is represented when shared on social media platforms, providing information such as the title, description, and preview image.

<meta property="og:title" content="Title Here" />
<meta property="og:description" content="Description Here" />
<meta property="og:image" content="image_url_here" />

Favicon Metadata: This metadata links the favicon (a small icon) to the webpage, displayed in the browser's address bar or tab.

<link rel="icon" href="path/to/favicon.ico" />

Adding metadata

Next.js has a Metadata API that can be used to define your application metadata. There are two ways you can add metadata to your application:

    Config-based: Export a static metadata object or a dynamic generateMetadata function in a layout.js or page.js file.

    File-based: Next.js has a range of special files that are specifically used for metadata purposes:
        favicon.ico, apple-icon.jpg, and icon.jpg: Utilized for favicons and icons
        opengraph-image.jpg and twitter-image.jpg: Employed for social media images
        robots.txt: Provides instructions for search engine crawling
        sitemap.xml: Offers information about the website's structure

You have the flexibility to use these files for static metadata, or you can generate them programmatically within your project.

With both these options, Next.js will automatically generate the relevant <head> elements for your pages.
Favicon and Open Graph image

In your /public folder, you'll notice you have two images: favicon.ico and opengraph-image.jpg.

Move these images to the root of your /app folder.

After doing this, Next.js will automatically identify and use these files as your favicon and OG image. You can verify this by checking the <head> element of your application in dev tools.

    Good to know: You can also create dynamic OG images using the ImageResponse constructor.

Page title and descriptions

You can also include a metadata object from any layout.js or page.js file to add additional page information like title and description. Any metadata in layout.js will be inherited by all pages that use it.

In your root layout, create a new metadata object with the following fields:
/app/layout.tsx

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};
 
export default function RootLayout() {
  // ...
}

Next.js will automatically add the title and metadata to your application.

But what if you want to add a custom title for a specific page? You can do this by adding a metadata object to the page itself. Metadata in nested pages will override the metadata in the parent.

For example, in the /dashboard/invoices page, you can update the page title:
/app/dashboard/invoices/page.tsx

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Invoices | Acme Dashboard',
};

This works, but we are repeating the title of the application in every page. If something changes, like the company name, you'd have to update it on every page.

Instead, you can use the title.template field in the metadata object to define a template for your page titles. This template can include the page title, and any other information you want to include.

In your root layout, update the metadata object to include a template:
/app/layout.tsx

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

The %s in the template will be replaced with the specific page title.

Now, in your /dashboard/invoices page, you can add the page title:
/app/dashboard/invoices/page.tsx

export const metadata: Metadata = {
  title: 'Invoices',
};

Navigate to the /dashboard/invoices page and check the <head> element. You should see the page title is now Invoices | Acme Dashboard.
Practice: Adding metadata

Now that you've learned about metadata, practice by adding titles to your other pages:

    /login page.
    /dashboard/ page.
    /dashboard/customers page.
    /dashboard/invoices/create page.
    /dashboard/invoices/[id]/edit page.

The Next.js Metadata API is powerful and flexible, giving you full control over your application's metadata. Here, we've shown you how to add some basic metadata, but you can add multiple fields, including keywords, robots, canonical, and more. Feel free to explore the documentation, and add any additional metadata you want to your application.