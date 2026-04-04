import { useState, useEffect } from 'react'
import Person from './components/Person'
import Search from './components/Search'
import AddNewPerson from './components/AddNewPerson'
import personsService from './services/persons'
import Notification from './components/Notification'
import Error from './components/Error'
import './index.css'

const App = (props) => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
     const personObject = {
      name: newName,
      number: newNumber
    }
    const updatePerson = persons.find(person => person.name === newName)
    if (updatePerson != null) {
      if (!window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) return
      
      personsService
        .update(updatePerson.id, personObject)
        .then(updatedPerson => {
          setPersons(persons.map(person => person.id === updatePerson.id ? updatedPerson : person))
          setNotificationMessage(`Updated '${updatedPerson.name}'`)
          setTimeout(() => {
            setNotificationMessage(null)
          }, 5000)
        })
        .catch(error => {
          setErrorMessage(`the person does not exist`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setPersons(persons.filter(p => p.id !== updatePerson.id))
          
        })
      return 
    }
    personsService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNotificationMessage(`Added '${returnedPerson.name}'`)
        setTimeout(() => {
            setNotificationMessage(null)
        }, 5000)
    })
      .catch(error => {
        setErrorMessage('the person does not exist')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
  }

  const deletePerson = (id) => {
    const personToDelete = persons.find(p => p.id === id)
    if (!window.confirm(`Delete ${personToDelete.name}?`)) return
    personsService.deletePerson(id).then(() => {
      setPersons(persons.filter(p => p.id !== id))
    })
    .catch(error => {
      alert(`the person does not exist`)
      setPersons(persons.filter(p => p.id !== id))
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
      <Notification message={notificationMessage} />
      <Error message={errorMessage} />
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
          <Person 
            key={person.id}
            id={person.id}
            name={person.name} 
            number={person.number}
            onDelete={deletePerson}
          />
        )}
      </li>
    </div>
  )
}

export default App