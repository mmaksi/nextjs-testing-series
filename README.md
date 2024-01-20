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

## Select any element on the screen

### 1. ARIA roles

### 2. Testing Playground

If you don't know the ARIA role associated with the element you want to select for testing, you can use the handful tool `screen.logTestingPlaygroundURL()` and it will print the HTML content in an encoded format so you can see the ARIA roles associated with each rendered element on the screen.

### 3. data-testid

You can use a special attribute called `data-testid` and pass it a unique value and select that `testid` in your test file and do you testing on it.

### 4. Query Selectors

Finally, if you want a direct approach, you can use query selectors if you don't wish to add extra attributes to your components only for the sake of testing. When you render a component on the screen using the `render` method, you get an object with different properties, and one of them is the `container`. That container wraps your entire component so you can use it to select elements inside it.
