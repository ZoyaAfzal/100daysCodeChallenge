Task 153:

Introduction to Chrome Dev-Tools:

It is a powerful tool for debugging and tackling web development issues. Chrome DevTools is a set of web developer tools built directly into the Google Chrome browser. DevTools can help you edit pages on-the-fly and diagnose problems quickly, which ultimately helps you build better websites, faster.

Accessing Dev-Tools in Chrome:

Dev-Tools is super easy. Right-click on a webpage and select inspect.

Element Panel: 

You can use this tool to highlight any element on the page and inspect the DOM in the Elements Panel.
You can also view it's CSS in the Styles tab and you can also add new changes into it.
For Example: In the computed tab , there is a box model to help you visualize the final styling like the
element size, padding, border and margin. You can double click a value, edit it and view the change live.

If you want to simulate how the page looks on a mobile device, toggle the device mode.
For Example: Select Pixel 7 to see how your design scales.

Console Panel:

Console Panel is where you find all application's log messages and warnings. This is your go-to-go place 
for identifying errors and fix them in your code execution. When your code throws an error in the Console,
You can easily see the file name and line number causing an error. At this point, you can either open the 
file and fix the errors in your code editor or you might want to track the program flow further and find 
out what happened. You can click on the link to open the code in the Sources panel and then set the break 
point on the line number. When you repeat this step again , Dev-Tools will pause at the line that gives you
time to analyze the values, and you can debug the code step by step.

If you want to learn more about how to debug JavaScript with Dev-Tools then see go to this article:
"goo.gle/devtools-breakpoints"

Pro-Tip: If you want to edit the code directly in Dev-Tools, you need to setup a workspace and follow the steps
in this video: "goo-gle/devtools-workspace"

Console isn't just about viewing messages. It is also a playground for experimenting with JavaScript. You can 
run the script to list out all the elements or even can change the elements color.
NOTE: '$' Dollar sign is a shortcut of document.querySelector().
dev-tools has a list of shortcuts to help, you can cover in this video:
"goo.gle/devtoos-console-utils"

Network Panel:

The Network panel is where you can analyze network activities when loading a webpage. Open the Network panel. 
If you don't see any logs , reload the page. You can filter the list by request types like CSS and images.
If you want to filter multiple types, hold the command key and select the types you want to see.
For Example: There's an error here. The status shows 404. What that does mean? To find out, you can hover over
to read the description or click on the name to view it in detail. You can easily navigate to another resource and 
view the respond details as well.

No Throttling:

You can slow down the website to simulate how user experience your page with slow connections.
If you want to learn more about Network Panel so watch this:
"goo.gle/devtools-network"

Bonus Tip: If you want, you can customize death tools based on your preferences.
For Example: You can change to the Dark theme, switch to different languages and customize keyboard shortcuts.
For more producting tips watch this video:
"Faster DevTools navigation with shortcuts and settings".

