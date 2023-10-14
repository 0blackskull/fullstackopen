
const App = () => {
  const course = 'Half Stack application development'
  const content = [
    {
      part: 1,
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      part: 2,
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      part: 3,
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course = {course} />
      <Content content = {content} />
      <Total exercises={[content[0].exercises, content[1].exercises, content[2].exercises]} />
    </div>
  )
}

const Total = ({exercises}) => {
  return (
      <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
  )
}

const Content = ({content}) => {

  return (
      <>
      <Part part = {content[0]} />
      <Part part = {content[1]} />
      <Part part = {content[2]} />
      </>
  )
}

const Header = ({course}) => {
  return (
      <h1>{course}</h1>
  )
}

const Part = ({part}) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}

export default App
