import { useState } from 'react'

const Header = (props) => <div>
      <h1>{props.title}</h1>
    </div>

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = (props) => <div>
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

  const total = good + neutral + bad

  const average = (good - bad) / total

  const positive = (good / total) * 100 + " %"


  return (
    <div>
      <Header title="give feedback"/>
      <Button onClick={handleGoodClick} text="Good"/>
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />
      <Header title="statistics"/>
      <Statistics text="good" number={good} />
      <Statistics text="neutral" number={neutral} />
      <Statistics text="bad" number={bad} />
      <Statistics text="all" number={total} />
      <Statistics text="average" number={average} />
      <Statistics text="positive" number={positive} />
    </div>
  )
}

export default App