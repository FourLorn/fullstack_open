const Header = (props) => { 
  return (
    <div>
      <h2>{props.name}</h2>
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
    props.courses.map(course =>
      <div key={course.id}>
        <Header name={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
  )
}

const Total = (props) => {
const initialTotal = 0
const totalWithInitial = props.parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    initialTotal,
  );
  return (
    <p>
      total of {totalWithInitial} exercises
    </p>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course courses={courses} />
    </div>
  )
}

export default App