import { useState } from 'react'

const Person = ({person}) => 
  <p> {person.name} {person.number} </p>

const Persons = ({persons}) =>
  <>
   {persons.map(person => <Person key={person.name} person={person}/> )}
  </>

const Filter = ({filterValue, handleFilterChange}) => 
  <form>
        <div>
          filter shown with <input
                              value={filterValue}
                              onChange={handleFilterChange}
                            />
        </div>
  </form>

  const PersonForm = (props) => 
    <form onSubmit={props.addPerson}>
        <div>
          name: <input 
            value={props.newName} 
            onChange={props.handleNameChange}
          />
        </div>
        <div>
          number: <input
            value={props.newNumber}
            onChange={props.handleNumberChange}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterValue, setNewFilterValue] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('ennen ', persons)
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName, 
        number: newNumber
      }
      setPersons(persons.concat(personObject))
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log('filter: ', event.target.value)
    setNewFilterValue(event.target.value)
  }

  const personsToShow = filterValue < 1
    ? persons
    : persons.filter(person => person.name.toUpperCase().includes(filterValue.toUpperCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue={filterValue} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange}
                  newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={personsToShow}/>
    </div>
  )

}

export default App