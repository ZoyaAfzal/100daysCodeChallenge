Day91-Task Static and Dynamic Rendering

In the previous chapter, you fetched data for the Dashboard Overview page. However, we briefly discussed two limitations of the current setup:

    The data requests are creating an unintentional waterfall.
    The dashboard is static, so any data updates will not be reflected on your application.

In this chapter...

Here are the topics we’ll cover

What static rendering is and how it can improve your application's performance.

What dynamic rendering is and when to use it.

Different approaches to make your dashboard dynamic.

Simulate a slow data fetch to see what happens.
What is Static Rendering?

With static rendering, data fetching and rendering happens on the server at build time (when you deploy) or during revalidation. The result can then be distributed and cached in a Content Delivery Network (CDN)

.
Diagram showing how users hit the CDN instead of the server when requesting a page

Whenever a user visits your application, the cached result is served. There are a couple of benefits of static rendering:

    Faster Websites - Prerendered content can be cached and globally distributed. This ensures that users around the world can access your website's content more quickly and reliably.
    Reduced Server Load - Because the content is cached, your server does not have to dynamically generate content for each user request.
    SEO - Prerendered content is easier for search engine crawlers to index, as the content is already available when the page loads. This can lead to improved search engine rankings.

Static rendering is useful for UI with no data or data that is shared across users, such as a static blog post or a product page. It might not be a good fit for a dashboard that has personalized data which is regularly updated.

The opposite of static rendering is dynamic rendering.
It’s time to take a quiz!

Test your knowledge and see what you’ve just learned.

Why might static rendering not be a good fit for a dashboard app?
C

Because the application will not reflect the latest data changes
Correct

When your data updates, you want to show the latest changes in your dashboard. Static Rendering is not a good fit for this use case.
What is Dynamic Rendering?

With dynamic rendering, content is rendered on the server for each user at request time (when the user visits the page). There are a couple of benefits of dynamic rendering:

    Real-Time Data - Dynamic rendering allows your application to display real-time or frequently updated data. This is ideal for applications where data changes often.
    User-Specific Content - It's easier to serve personalized content, such as dashboards or user profiles, and update the data based on user interaction.
    Request Time Information - Dynamic rendering allows you to access information that can only be known at request time, such as cookies or the URL search parameters.

It’s time to take a quiz!

Test your knowledge and see what you’ve just learned.

What kind of information can only be known at request time?
C

Cookies and URL search params
Correct

Cookies and URL search params
Making the dashboard dynamic

By default, @vercel/postgres doesn't set its own caching semantics. This allows the framework to set its own static and dynamic behavior.

You can use a Next.js API called unstable_noStore inside your Server Components or data fetching functions to opt out of static rendering. Let's add this.

In your data.ts, import unstable_noStore from next/cache, and call it the top of your data fetching functions:
/app/lib/data.ts

// ...
import { unstable_noStore as noStore } from 'next/cache';
 
export async function fetchRevenue() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();
 
  // ...
}
 
export async function fetchLatestInvoices() {
  noStore();
  // ...
}
 
export async function fetchCardData() {
  noStore();
  // ...
}
 
export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  noStore();
  // ...
}
 
export async function fetchInvoicesPages(query: string) {
  noStore();
  // ...
}
 
export async function fetchFilteredCustomers(query: string) {
  noStore();
  // ...
}
 
export async function fetchInvoiceById(query: string) {
  noStore();
  // ...
}

    Note: unstable_noStore is an experimental API and may change in the future. If you prefer to use a stable API in your own projects, you can also use the Segment Config Option export const dynamic = "force-dynamic".

Simulating a Slow Data Fetch

Making the dashboard dynamic is a good first step. However... there is still one problem we mentioned in the previous chapter. What happens if one data request is slower than all the others?

Let's simulate a slow data fetch. In your data.ts file, uncomment the console.log and setTimeout inside fetchRevenue():
/app/lib/data.ts

export async function fetchRevenue() {
  try {
    // We artificially delay a response for demo purposes.
    // Don't do this in production :)
    console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));
 
    const data = await sql<Revenue>`SELECT * FROM revenue`;
 
    console.log('Data fetch completed after 3 seconds.');
 
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

Now open http://localhost:3000/dashboard/

in a new tab and notice how the page takes longer to load. In your terminal, you should also see the following messages:

Fetching revenue data...
Data fetch completed after 3 seconds.

Here, you've added an artificial 3-second delay to simulate a slow data fetch. The result is that now your whole page is blocked while the data is being fetched. Which brings us to a common challenge developers have to solve:

With dynamic rendering, your application is only as fast as your slowest data fetch.