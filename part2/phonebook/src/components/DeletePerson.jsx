const DeletePerson =({onClick}) => {
    return (
        <span>
            <button
                onClick={onClick}
                style={{ 
                    backgroundColor: 'red',
                    color: 'white'
                }}
                type="submit">delete
            </button>
        </span>
    )
}

export default DeletePerson