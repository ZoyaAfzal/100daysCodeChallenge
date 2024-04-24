Task 154: "Hello World!" , "Variables":

"Hello World!" :

So first, let’s see how we attach a script to a webpage. For server-side environments (like Node.js), you can 
execute the script with a command like "node my.js"

The “script” tag :
JavaScript programs can be inserted almost anywhere into an HTML document using the <script> tag.
For instance:

<!DOCTYPE HTML>
<html>
<body>
  <p>Before the script...</p>

  <script>
    alert( 'Hello, world!' );
  </script>

  <p>...After the script.</p>

</body>
</html>
The <script> tag contains JavaScript code which is automatically executed when the browser processes the tag.

Modern markup :
The <script> tag has a few attributes that are rarely used nowadays but can still be found in old code:

The type attribute: <script type=…> :
The old HTML standard, HTML4, required a script to have a type. Usually it was type="text/javascript". It’s not 
required anymore.Now, it can be used for JavaScript modules. 

The language attribute: <script language=…>
This attribute was meant to show the language of the script. This attribute no longer makes sense because 
JavaScript is the default language. There is no need to use it.

Comments before and after scripts :
In really ancient books and guides, you may find comments inside <script> tags, like this:

<script type="text/javascript"><!--
    ...
//--></script>

This trick isn’t used in modern JavaScript. These comments hide JavaScript code from old browsers that didn’t know 
how to process the <script> tag.

External scripts :
If we have a lot of JavaScript code, we can put it into a separate file.

Script files are attached to HTML with the src attribute:
<script src="/path/to/script.js"></script>

Here, /path/to/script.js is an absolute path to the script from the site root. One can also provide a relative path from the current page. For instance, src="script.js", just like src="./script.js", would mean a file "script.js" in the current folder.

We can give a full URL as well. For instance:
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>

To attach several scripts, use multiple tags:

<script src="/js/script1.js"></script>
<script src="/js/script2.js"></script>
…
if src is set, the script content is ignored.
A single <script> tag can’t have both the src attribute and code inside.
This won’t work:

<script src="file.js">
  alert(1); // the content is ignored, because src is set
</script>
We must choose either an external <script src="…"> or a regular <script> with code.

The example above can be split into two scripts to work:
<script src="file.js"></script>
<script>
  alert(1);
</script>


"Variables" :
A variable :
A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.
To create a variable in JavaScript, use the let keyword.

The statement below creates (in other words: declares) a variable with the name “message”:
let message;

Now, we can put some data into it by using the assignment operator =:
let message;
message = 'Hello'; // store the string 'Hello' in the variable named message

The string is now saved into the memory area associated with the variable. We can access it using the variable name:
let message;
message = 'Hello!';

alert(message); // shows the variable content

To be concise, we can combine the variable declaration and assignment into a single line:
let message = 'Hello!'; // define the variable and assign the value

alert(message); // Hello!

The multiline variant is a bit longer, but easier to read:
let user = 'John';
let age = 25;
let message = 'Hello';

We can also declare multiple variables in one line:
let user = 'John', age = 25, message = 'Hello';

That might seem shorter, but we don’t recommend it. For the sake of better readability, please use a single line 
per variable.

var instead of let :

In older scripts, you may also find another keyword: var instead of let:
var message = 'Hello';
The var keyword is almost the same as let. It also declares a variable but in a slightly different, “old-school” 
way.

We can also change it as many times as we want:

let message;
message = 'Hello!';
message = 'World!'; // value changed
alert(message);

When the value is changed, the old data is removed from the variable:

We can also declare two variables and copy data from one into the other.
let hello = 'Hello world!';
let message;

// copy 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!

We can also declare two variables and copy data from one into the other.
let hello = 'Hello world!';
let message;

// copy 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!

Declaring twice triggers an error :
A variable should be declared only once.

A repeated declaration of the same variable is an error:
let message = "This";

// repeated 'let' leads to an error
let message = "That"; // SyntaxError: 'message' has already been declared

Variable naming
There are two limitations on variable names in JavaScript:
 The name must contain only letters, digits, or the symbols $ and _.
 The first character must not be a digit.

Examples of valid names:
let userName;
let test123;

The dollar sign '$' and the underscore '_' can also be used in names. They are regular symbols, just like letters, without any special meaning.

These names are valid:
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3


Case matters :
Variables named apple and APPLE are two different variables.


Non-Latin letters are allowed, but not recommended :
Technically, there is no error here. Such names are allowed.

Reserved names :
There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.
For example: let, class, return, and function are reserved.


An assignment without use strict :
Normally, we need to define a variable before using it. But in the old times, it was technically possible to create a 
variable by a mere assignment of the value without using let. This still works now if we don’t put use strict in our 
scripts to maintain compatibility with old scripts.

// note: no "use strict" in this example
num = 5; // the variable "num" is created if it didn't exist

alert(num); // 5

Constants :
Variables declared using const are called “constants”. They cannot be reassigned. An attempt to do so would cause an error:
const myBirthday = '18.04.1982';
myBirthday = '01.01.2001'; // error, can't reassign the constant!

Uppercase constants :
There is a widespread practice to use constants as aliases for difficult-to-remember values that are known before execution.
Such constants are named using capital letters and underscores.
For instance, let’s make constants for colors in so-called “web” (hexadecimal) format:

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

Benefits:
 COLOR_ORANGE is much easier to remember than "#FF7F00".
 It is much easier to mistype "#FF7F00" than COLOR_ORANGE.
 When reading the code, COLOR_ORANGE is much more meaningful than #FF7F00.
