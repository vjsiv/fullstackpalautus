import { useState } from 'react'

const Statistics = (props) => {
  if (props.all < 1) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <StatisticLine
          text='good'
          value={props.good}/>
        <StatisticLine
          text='neutral'
          value={props.neutral}/>
        <StatisticLine
          text='bad'
          value={props.bad}/>
        <StatisticLine
          text='all'
          value={props.all}/>
        <StatisticLine
          text='average'
          value={(props.good - props.bad)/props.all}/>
        <StatisticLine
          text='positive'
          value={(props.good/props.all)*100 + ' %'}/>
      </table>
  )
}

const StatisticLine = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.text}</td><td>{props.value}</td>
      </tr>
    </tbody>
  )
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const increaseGood = () => {
    console.log('increasing, value before', good)
    const updatedGood = good + 1
    setGood(updatedGood)
    setAll(updatedGood + neutral + bad)
  }

  const increaseNeutral = () => {
    console.log('increasing, value before', neutral)
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAll(good + updatedNeutral + bad)
  }

  const increaseBad = () => {
    console.log('increasing, value before', bad)
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAll(good + neutral + updatedBad)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button
          handleClick={increaseGood}
          text='good'
        />
        <Button
          handleClick={increaseNeutral}
          text='neutral'
        />
        <Button
          handleClick={increaseBad}
          text='bad'
        />
      </div>
      <h1>statistics</h1>
      <div>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          all={all}
          />
      </div>
    </div>
  )
}

export default App