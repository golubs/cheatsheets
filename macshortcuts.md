Mac Shortcuts

Command + Shift 3-5 (Screenshots nehmen)

Option + Command + j or i (open chrome dev tools on chrome)

Then Chrome “command line” is where we can type JavaScript commands. Press Enter to run them (Shift+Enter to input multi-line commands).

- `Esc` in Chrome Dev Tools to open console right below the Element tab.
  Now the last selected element is available as `$0`, the previously selected is `$1` etc.  
  We can run commands on them. For instance, `$0.style.background = 'red'`  
  That’s how to get a node from Elements in Console.

- There’s also a road back. If there’s a variable referencing a DOM node, then we can use the command inspect(node) in Console to see it in the Elements pane.  
  Or we can just output the DOM node in the console and explore “in-place”, like document.body below:
