Day96-Task Handling Errors :

In the previous chapter, you learned how to mutate data using Server Actions. Let's see how you can handle errors gracefully using JavaScript's try/catch statements and Next.js APIs.

In this chapter...

Here are the topics we’ll cover

How to use the special error.tsx file to catch errors in your route segments, and show a fallback UI to the user.

How to use the notFound function and not-found file to handle 404 errors (for resources that don’t exist).
Adding try/catch to Server Actions

First, let's add JavaScript's try/catch statements to your Server Actions to allow you to handle errors gracefully.

If you know how to do this, spend a few minutes updating your Server Actions, or you can copy the code below:
/app/lib/actions.ts

export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
 
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

/app/lib/actions.ts

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  const amountInCents = amount * 100;
 
  try {
    await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
      `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

/app/lib/actions.ts

export async function deleteInvoice(id: string) {
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}

Note how redirect is being called outside of the try/catch block. This is because redirect works by throwing an error, which would be caught by the catch block. To avoid this, you can call redirect after try/catch. redirect would only be reachable if try is successful.

Now, let's check what happens when an error is thrown in your Server Action. You can do this by throwing an error earlier. For example, in the deleteInvoice action, throw an error at the top of the function:
/app/lib/actions.ts

export async function deleteInvoice(id: string) {
  throw new Error('Failed to Delete Invoice');
 
  // Unreachable code block
  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice' };
  }
}

When you try to delete an invoice, you should see an error on localhost.

Seeing these errors are helpful while developing as you can catch any potential problems early. However, you also want to show errors to the user to avoid an abrupt failure and allow your application to continue running.

This is where Next.js error.tsx

file comes in.
Handling all errors with error.tsx

The error.tsx file can be used to define a UI boundary for a route segment. It serves as a catch-all for unexpected errors and allows you to display a fallback UI to your users.

Inside your /dashboard/invoices folder, create a new file called error.tsx and paste the following code:
/dashboard/invoices/error.tsx

'use client';
 
import { useEffect } from 'react';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}

There are a few things you'll notice about the code above:

    "use client" - error.tsx needs to be a Client Component.
    It accepts two props:
        error: This object is an instance of JavaScript's native Error

        object.
        reset: This is a function to reset the error boundary. When executed, the function will try to re-render the route segment.

When you try to delete an invoice again, you should see the following UI:
The error.tsx file showing the props it accepts
Handling 404 errors with the notFound function

Another way you can handle errors gracefully is by using the notFound function. While error.tsx is useful for catching all errors, notFound can be used when you try to fetch a resource that doesn't exist.

For example, visit http://localhost:3000/dashboard/invoices/2e94d1ed-d220-449f-9f11-f0bbceed9645/edit

.

This is a fake UUID that doesn't exist in your database.

You'll immediately see error.tsx kicks in because this is a child route of /invoices where error.tsx is defined.

However, if you want to be more specific, you can show a 404 error to tell the user the resource they're trying to access hasn't been found.

You can confirm that the resource hasn't been found by going into your fetchInvoiceById function in data.ts, and console logging the returned invoice:
/app/lib/data.ts

export async function fetchInvoiceById(id: string) {
  noStore();
  try {
    // ...
 
    console.log(invoice); // Invoice is an empty array []
    return invoice[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch invoice.');
  }
}

Now that you know the invoice doesn't exist in your database, let's use notFound to handle it. Navigate to /dashboard/invoices/[id]/edit/page.tsx, and import { notFound } from 'next/navigation'.

Then, you can use a conditional to invoke notFound if the invoice doesn't exist:
/dashboard/invoices/[id]/edit/page.tsx

import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { updateInvoice } from '@/app/lib/actions';
import { notFound } from 'next/navigation';
 
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);
 
  if (!invoice) {
    notFound();
  }
 
  // ...
}

Perfect! <Page> will now throw an error if a specific invoice is not found. To show an error UI to the user. Create a not-found.tsx file inside the /edit folder.
The not-found.tsx file inside the edit folder

Then, inside the not-found.tsx file, paste the following the code:
/dashboard/invoices/[id]/edit/not-found.tsx

import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
 
export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested invoice.</p>
      <Link
        href="/dashboard/invoices"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  );
}

Refresh the route, and you should now see the following UI:
404 Not Found Page

That's something to keep in mind, notFound will take precedence over error.tsx, so you can reach out for it when you want to handle more specific errors!