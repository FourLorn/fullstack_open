import { useState } from 'react'

const Header = (props) => <div>
      <h1>{props.title}</h1>
    </div>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Stats = (props) => <div>
  <li>
      {props.text} {props.number}
  </li>
</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <Header title="give feedback"/>
      <Button onClick={handleGoodClick} text="Good"/>
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />
      <Header title="statistics"/>
      <Stats text="good" number={good} />
      <Stats text="neutral" number={neutral} />
      <Stats text="bad" number={bad} />
    </div>
  )
}

export default App