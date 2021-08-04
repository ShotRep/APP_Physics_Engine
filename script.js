////////////////////BOILER PLATE CODE\\\\\\\\\\\\\\\\\\\\\\\\

//Call objects of Matter JS
const {Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse} = Matter
console.log(Matter)

//Create
const engine = Engine.create() //this creates a world object
engine.gravity.scale = 0.0001
const {world} = engine
console.log(world)

//setting dimensions for all screen sizes.
const width = window.innerWidth - 20
const height = window.innerHeight - 20

const render = Render.create({
  element: document.body, //options object showing where to render
  engine: engine, //point ot our created engine
  options: {
    // size on canvas
    wireframes: false,
    width, //we will add to this later-remove static sizes
    height,
  },
})

Render.run(render) //start to render
Runner.run(Runner.create(), engine) //coordinates the states of our engine

World.add(
  world,
  MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
  })
)
////////////////////BOILER PLATE CODE\\\\\\\\\\\\\\\\\\\\\\\\

//WALLS - Give the canvas a boundary that keeps our shapes on tht page\\
const walls = [
  Bodies.rectangle(width / 2, 0, width, 20, {isStatic: true}),
  Bodies.rectangle(width / 2, height, width, 20, {isStatic: true}),
  Bodies.rectangle(width, height / 2, 20, height, {isStatic: true}),
  Bodies.rectangle(0, height / 2, 20, height, {isStatic: true}),
]
World.add(world, walls)
//Random Shapes
for (let i = 0; i < 100; i++) {
  if (Math.random() >= 0.75) {
    World.add(
      world,
      Bodies.rectangle(Math.random() * width, Math.random() * height, 35, 35)
    )
  } else if (Math.random() < 0.75 && Math.random() >= 0.5) {
    World.add(
      world,
      Bodies.polygon(Math.random() * width, Math.random() * height, 6, 25)
    )
  } else if (Math.random() < 0.5 && Math.random() > 0.25) {
    World.add(
      world,
      Bodies.polygon(Math.random() * width, Math.random() * height, 3, 25)
    )
  } else {
    World.add(
      world,
      Bodies.circle(Math.random() * width, Math.random() * height, 25)
    )
  }
}

// Add shapes to our world individually\\
// const shape = Bodies.rectangle(100, 100, 50, 50, {  //positionX, positionY, sizeW, sizeH
//   isStatic: false  //Turn gravity on and off
// })
// World.add(world,shape)
