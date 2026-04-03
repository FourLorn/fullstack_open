import { useState, useEffect } from 'react'
import Person from './components/Person'
import Search from './components/Search'
import AddNewPerson from './components/AddNewPerson'
import personsService from './services/persons'

const App = (props) => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
     const personObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    }
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    personsService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson))
        setPersons('')
    })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const peopleToShow = !filterName
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))

  const handleFilterChange = (event) => {
    setFilterName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Search value={filterName} onChange={handleFilterChange} />
      <h2>Add a New Person</h2>
      <AddNewPerson
        newName={newName}
        newNumber={newNumber}
        onNameChange={handleNameChange}
        onNumberChange={handleNumberChange}
        onSubmit={addPerson}
      />
      <h2>Numbers</h2>
      <li>
        {peopleToShow.map(person => 
          <Person key={person.id} name={person.name} number={person.number} />
        )}
      </li>
    </div>
  )
}

export default App