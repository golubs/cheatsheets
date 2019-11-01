Flexbox

FLEXBOX:
Justify-content:

- flex-start: Items align to the left side of the container.
- flex-end: Items align to the right side of the container.
- center: Items align at the center of the container.
- space-between: Items display with equal spacing between them.
- space-around: Items display with equal spacing around them.

Align-items:

- flex-start: Items align to the top of the container.
- flex-end: Items align to the bottom of the container.
- center: Items align at the vertical center of the container.
- baseline: Items display at the baseline of the container.
- stretch: Items are stretched to fit the container.

Flex-direction:

- row: Items are placed the same as the text direction.
- row-reverse: Items are placed opposite to the text direction.
- column: Items are placed top to bottom.
- column-reverse: Items are placed bottom to top.

Order: [number] (By default, items have a value of 0, but we can use this property to also set it to a positive or negative integer value (-2, -1, 0, 1, 2).)

Align-self: [same as align-items] (This property accepts the same values as align-items and its value for the specific item, like two yellow frogs among other green frogs (.yellow))

Flex-wrap:

- nowrap: Every item is fit to a single line.
- wrap: Items wrap around to additional lines.
- wrap-reverse: Items wrap around to additional lines in reverse.

Flex-flow: row wrap (The two properties flex-direction and flex-wrap are used so often together that the shorthand property flex-flow was created to combine them.)

Align-content:

- flex-start: Lines are packed at the top of the container.
- flex-end: Lines are packed at the bottom of the container.
- center: Lines are packed at the vertical center of the container.
- space-between: Lines display with equal spacing between them.
- space-around: Lines display with equal spacing around them.
- stretch: Lines are stretched to fit the container.

NOTE:  
This can be confusing, but align-content determines the spacing between lines, while align-items determines how the items as a whole are aligned within the container. When there is only one line, align-content has no effect.

Before:  
Using positioning values like “static”, “relative”, “absolute” and “fixed”
Using CSS floats (this allowed us to position page elements to the right or to the left of one another)
-> Better than what was there previously (html-tables…)

Now:  
CSS Flexbox!
Flexbox is all about the relationship between the parent layout container and its flexible child containers.

In order to use Flexbox, first we’ll set an element to be a parent flex container. Any elements that are direct children of the parent container automatically become child flex items.

Your layout can contain as many parent and child flex elements as you need and you can even create nested flex structures to create even more complex layouts.

And, parent and child flex containers can be controlled in a variety of ways via CSS. For instance, you can apply borders, backgrounds, margin, padding, and other CSS properties as needed, or you can even combine other CSS layout properties, like positioning, floating, and even mix in CSS Grid properties. This makes Flexbox incredibly “flexible”.

Some very important Flexbox terminology:

- Flex Container (This is the parent flex element. It contains child flex-items. It can be any HTML element that can contain child elements within it: like a `<div>, <section>, <footer>, <article>`, and so on.)
- Flex-Items (These are the child-elements that appear directly within a parent flex-container. These can be any HTML-element at all, like an `<img>, <div>, <p>, <section>`, or any other HTML element.)
- Main Axis (This is the flow-direction (aka: the primary axis) that child flex-items will flow along within a parent flex-container. The main flow axis can run either horizontally or vertically in your layout.)
- Cross Axis (This is the flow-direction that runs in the opposite, or perpendicular, direction to the main axis. The direction of the cross axis is going to be determined by the main axis flow.)

- Assign display: flex; to parent
- Flex-direction: row or column
- Flex-direction: column reverse
- Flex-direction + flex-wrap = flex-flow: row/column/row-reverse/column-reverse … wrap/wrap-reverse/nowrap
- Justify-content: center/flex-end/flex-start/space-around/space-between
- Flex-grow: 1 (how the flex item will occupy the available space in relation to other items, takes a ratio based value, no value reverts to flex-basis value)
- Flex-shrink
- Flex-basis (a flexible layout “starting point”. Base size/ideal size for our flexbox layout)
  (tells the browser how large child flex items should be and how they should be sized and scaled in comparison to other child flex items. This also controls how child flex items will respond if and when the parent flex container scales and resizes in for instance the layout being displayed on a smaller screen size.)
