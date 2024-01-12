# Testing

Roles are ARIA roles. ARIA is a system meant for people with visual disabilities to define HTML elements. For example, in ARIA roles we have `headings` that refer to `h1, h2, h3, h4, h5, h6`. We have `button`, `input` and so on.

Testing is about learning how to write good tests and also the best implementation of those tests.

When writing component testing, we usually follow these steps:

1. Render the component
2. Find the component on the screen
3. Apply assertions

## Mock Functions

Fake functions that don't do anything

A mock function:

1. Records how many times it was called
2. Records the arguments it was called with
3. Used when we want to make sure that a component calls a callback (function props)
