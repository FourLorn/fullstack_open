const Header = (props) => { 
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    props.parts.map(part =>
      <li key={part.id}>
        <Part name={part.name} exercises={part.exercises} />
      </li>
    )
  )
}

const Course = (props) => {
  return (
    <div>
      <Header name={props.course.name}/>
      <Content parts={props.course.parts}/>
      <Total parts={props.course.parts} />
    </div>
  )
}

const Total = (props) => {
  let total = 0
  props.parts.map(part => total += part.exercises)
  return (
    <p>
      total of {total} exercises
    </p>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  return <Course course={course} />
}

export default App