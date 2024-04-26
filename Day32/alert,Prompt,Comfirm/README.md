Task155: Interaction: alert, prompt, confirm

Let’s see a couple of functions to interact with the user: alert, prompt and confirm.

Alert :
It shows a message and waits for the user to press “OK”.
The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”.

Prompt :
The function prompt accepts two arguments:
result = prompt(title, [default]);

It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

-title
    The text to show the visitor.

-default
    An optional second parameter, the initial value for the input field.


The square brackets in syntax [...] :

The square brackets around default in the syntax above denote that the parameter is optional, not required.
The call to prompt returns the text from the input field or null if the input was canceled.

Confirm :

The function confirm shows a modal window with a question and two buttons: OK and Cancel.
The result is true if OK is pressed and false otherwise.


All these methods are modal: they pause script execution and don’t allow the visitor to interact with the rest of the page until the window has been dismissed.

There are two limitations shared by all the methods above:

    -The exact location of the modal window is determined by the browser. Usually, it’s in the center.
    -The exact look of the window also depends on the browser. We can’t modify it.






