import { useState } from 'react'

const Filter = (props) => {
  return (
    <div>filter shown with <input value={props.searchString} onChange={props.onChangeHandler}/></div>
  )
}

const PersonForm = (props) => {
  return (
    <form onSubmit={props.onSubmitHandler}>
        <div>
          name: <input value={props.newName} onChange={props.nameChangeHandler}/>
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.numberChangeHandler}/>
        </div>
        <div> 
          <button type="submit">add</button>
        </div>
    </form>
  )
}

const Persons = (props) => {
  return (
    <li> {props.key}  {props.name}  {props.nr} </li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('enter new name')
  const [newNumber, setNewNumber] = useState('enter new number')
  const [showFilter, setShowFilter] = useState(false)
  const [searchString, setSearchString] = useState('enter filter')

  const handleFilter = (event) => {
    setSearchString(event.target.value)
    setShowFilter(true)
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const addNewEntry = (event) => {
    event.preventDefault()
    //Check if name already exists
    if (!persons.some(pers => pers.name===newName)) {
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1 
      }
      setPersons(persons.concat(newPerson))
    } else {
      alert(`${newName} is already added to phonebook`) //Backticks!
    }
  }

  const entriesToShow = !showFilter ? persons : persons.filter( person => person.name.toLowerCase().includes(searchString.toLowerCase()))
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchString={searchString} onChangeHandler={handleFilter} />
      <h3>Add new</h3>
      <PersonForm
        onSubmitHandler={addNewEntry}
        newName={newName}
        newNumber={newNumber}
        nameChangeHandler={handleNewName}
        numberChangeHandler={handleNewNumber}
      />
      <h3>Numbers</h3>
      <ul>
        {entriesToShow.map( entry => 
          <Persons key={entry.id}  name={entry.name}  nr={entry.number} />
        )}
      </ul>
    </div>
  )
}


export default App