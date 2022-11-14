function OneNews({title, archived}) {
  return (
    <>
    <div>{title}</div>
    {archived ? <button>Delete</button> : <button>Archive</button>}
    </>
  )
}

export default OneNews