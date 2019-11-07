- [...] That said, JavaScript also allows to create servers, mobile applications, etc.

### Languages “over” JavaScript

- The syntax of JavaScript does not suit everyone’s needs. Different people want different features.  
  That’s to be expected, because projects and requirements are different for everyone.  
  So recently a plethora of new languages appeared, which are transpiled (converted) to JavaScript before they run in the browser.  
  Modern tools make the transpilation very fast and transparent, actually allowing developers to code in another language and auto-converting it “under the hood”.  
  Examples of such languages:  
  **CoffeeScript** is a “syntactic sugar” for JavaScript. It introduces shorter syntax, allowing us to write clearer and more precise code. Usually, Ruby devs like it.
  **TypeScript** is concentrated on adding “strict data typing” to simplify the development and support of complex systems. It is developed by Microsoft.
  **Flow** also adds data typing, but in a different way. Developed by Facebook.
  **Dart** is a standalone language that has its own engine that runs in non-browser environments (like mobile apps), but also can be transpiled to JavaScript. Developed by Google.
  There are more. Of course, even if we use one of transpiled languages, we should also know JavaScript to really understand what we’re doing.

- Developer tools allow us to see errors, run commands, examine variables, and much more.

- So first, let’s see how we attach a script to a webpage. For server-side environments (like Node.js), you can execute the script with a command like `"node my.js"`.

- **Functional languages**
  It’s interesting to note that there exist functional programming languages, like Scala or Erlang that forbid changing variable values.  
  In such languages, once the value is stored “in the box”, it’s there forever. If we need to store something else, the language forces us to create a new box (declare a new variable). We can’t reuse the old one.  
  Though it may seem a little odd at first sight, these languages are quite capable of serious development. More than that, there are areas like parallel computations where this limitation confers certain benefits. Studying such a language (even if you’re not planning to use it soon) is recommended to broaden the mind.

- **Reuse or create?**  
  And the last note. There are some lazy programmers who, instead of declaring new variables, tend to reuse existing ones.  
  As a result, their variables are like boxes into which people throw different things without changing their stickers. What’s inside the box now? Who knows? We need to come closer and check.  
  Such programmers save a little bit on variable declaration but lose ten times more on debugging.  
  An extra variable is good, not evil.  
  Modern JavaScript minifiers and browsers optimize code well enough, so it won’t create performance issues. Using different variables for different values can even help the engine optimize your code.

- **Mathematical operations are safe**  
  Doing maths is “safe” in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.  
  The script will never stop with a fatal error (“die”). At worst, we’ll get `NaN` as the result.

http://software.hixie.ch/utilities/js/live-dom-viewer/
