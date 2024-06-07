import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const MostVotes = (props) => {
  const index = props.points.indexOf(Math.max(...props.points))
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[index]}</p>
      <p>has {props.points[index]} votes</p>
    </>
    
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const getAnecdote = () => {
    console.log('selected oli', {selected})
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
    console.log('ja selected on nyt', {random})
  }

  const increaseVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    console.log('taulukko on', copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <p>has {points[selected]} votes</p>
      <div>
        <Button
          handleClick={increaseVote}
          text='vote'
        />
        <Button
          handleClick={getAnecdote}
          text='next anecdote'
        />
      </div> 
      <MostVotes anecdotes={anecdotes} points={points}/>
    </div> 
  )
}

export default App