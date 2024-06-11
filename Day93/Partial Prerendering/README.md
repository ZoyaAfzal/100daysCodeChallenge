Day93-Task  Partial Prerendering (Optional) :

    Partial Prerendering is an experimental feature introduced in Next.js 14. The content of this page may be updated as the feature progresses in stability. You may want to skip this chapter if you prefer to not use experimental features. This chapter is not required to complete the course.

In this chapter...

Here are the topics we’ll cover

What Partial Prerendering is.

How Partial Prerendering works.
Combining Static and Dynamic Content

Currently, if you call a dynamic function inside your route (e.g. noStore(), cookies(), etc), your entire route becomes dynamic.

This is how most web apps are built today. You either choose between static and dynamic rendering for your entire application or for a specific route.

However, most routes are not fully static or dynamic. You may have a route that has both static and dynamic content. For example, consider an ecommerce site

. You might be able to prerender the majority of the product page, but you may want to fetch the user's cart and recommended products dynamically on-demand.

Going back to your dashboard page, what components would you consider static vs. dynamic?

Once you're ready, click the button below to see how we would split the dashboard route:
What is Partial Prerendering?

Next.js 14 contains a preview of Partial Prerendering – an experimental feature that allows you to render a route with a static loading shell, while keeping some parts dynamic. In other words, you can isolate the dynamic parts of a route. For example:
Partially Prerendered Product Page showing static nav and product information, and dynamic cart and recommended products

When a user visits a route:

    A static route shell is served, ensuring a fast initial load.
    The shell leaves holes where dynamic content will load in asynchronous.
    The async holes are streamed in parallel, reducing the overall load time of the page.

This is different from how your application behaves today, where entire routes are either entirely static or dynamic.

Partial Prerendering combines ultra-quick static edge delivery with fully dynamic capabilities and we believe it has the potential to become the default rendering model for web applications

, bringing together the best of static site generation and dynamic delivery.
It’s time to take a quiz!

Test your knowledge and see what you’ve just learned.

What are the holes in the context of Partial Prerendering?
How does Partial Prerendering work?

Partial Prerendering leverages React's Concurrent APIs
and uses Suspense

to defer rendering parts of your application until some condition is met (e.g. data is loaded).

The fallback is embedded into the initial static file along with other static content. At build time (or during revalidation), the static parts of the route are prerendered, and the rest is postponed until the user requests the route.

It's worth noting that wrapping a component in Suspense doesn't make the component itself dynamic (remember you used unstable_noStore to achieve this behavior), but rather Suspense is used as a boundary between the static and dynamic parts of your route.

The great thing about Partial Prerendering is that you don't need to change your code to use it. As long as you're using Suspense to wrap the dynamic parts of your route, Next.js will know which parts of your route are static and which are dynamic.

    Note: To learn more about how Partial Prerendering can be configured, see the Partial Prerendering (experimental) documentation or try the Partial Prerendering template and demo

    . It's important to note that this feature is experimental and not yet ready for production deployment.

Summary

To recap, you've done a few things to optimize data fetching in your application, you've:

    Created a database in the same region as your application code to reduce latency between your server and database.
    Fetched data on the server with React Server Components. This allows you to keep expensive data fetches and logic on the server, reduces the client-side JavaScript bundle, and prevents your database secrets from being exposed to the client.
    Used SQL to only fetch the data you needed, reducing the amount of data transferred for each request and the amount of JavaScript needed to transform the data in-memory.
    Parallelize data fetching with JavaScript - where it made sense to do so.
    Implemented Streaming to prevent slow data requests from blocking your whole page, and to allow the user to start interacting with the UI without waiting for everything to load.
    Move data fetching down to the components that need it, thus isolating which parts of your routes should be dynamic in preparation for Partial Prerendering.

In the next chapter, we'll look at two common patterns you might need to implement when fetching data: search and pagination