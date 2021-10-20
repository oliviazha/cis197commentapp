import React, { useState, useEffect } from 'react'

// functional component
const Form = ({ setPosts, posts, isTopForm }) => {
  const [userInputName, changeUserInputName] = useState('')
  const [userInputComment, changeUserInputComment] = useState('')
  const [isFormVisible, changeIsFormVisible] = useState(true)

  return (isFormVisible && (
    <div>
      <br />
      <input type="text" id="name" value={userInputName} onChange={e => changeUserInputName(e.target.value)} placeholder="Name..." />
      <br />
      <textarea id="new-post" value={userInputComment} onChange={e => changeUserInputComment(e.target.value)} placeholder="Write a new post..." />
      <br />
      <button
        type="button"
        id="submit"
        disabled={userInputName.length === 0 || userInputComment.length === 0}
        onClick={() => {
          setPosts([...posts, { userInputName, userInputComment }])
          changeUserInputName('')
          changeUserInputComment('')
          if (!isTopForm) changeIsFormVisible(!isFormVisible)
        }}
      >
        Submit
      </button>
    </div>
  ))
}

export default Form
