import DeletePerson from './DeletePerson'

const Person = ({ id, name, number, onDelete }) => {
  return (
        <p>
          {name} {number}
          <DeletePerson onClick={() => onDelete(id)}/>
        </p>
  )
}
export default Person