<h1 align="center">Matter Physics Engine Demo - Drawing Animations</h1>

<h3 align="center">The Modern Javascript Bootcamp Course (2021) part II Applications</h3>    

<!-- GETTING STARTED -->
## Getting Started
Part 2 of the modern bootcamp course, switching from classroom style to applied learning through the building of projects. 


[MDN JS Web Docs - URL](https://developer.mozilla.org/en-US/docs/Web/javascript)

[Matter JS Library - URL](https://brm.io/matter-js)
Matter.js is a 2D physics engine for the web


## Matter JS Terminology - High Level Notes.
[Matter JS Docs](https://brm.io/matter-js/docs/)
WORLD: Object that contains all of the different "things" in our matter app.
ENGINE: Reads in the current state of the world from the world object, then calculates changes in the positions of all the different shapes.
RUNNER: Gets the engine and world to work together. Runs about 60 times per second.
RENDER: Whenever the engine processes an update, Render will take a look at all the different shapes and show them on the screen.
BODIES: A shape that we are displaying. Can be a circle, rectangle, oval, etc.

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.