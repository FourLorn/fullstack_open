const Course = ({ courses }) => {
  return (
    courses.map(course =>
      <div key={course.id}>
        <Header name={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
  )
}

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

const Total = (props) => {
const initialTotal = 0
const totalWithInitial = props.parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    initialTotal,
  );
  return (
    <p>
      <b>total of {totalWithInitial} exercises</b>
    </p>
  )
}

export default Course