import React, { useState } from 'react'

const Voter = () => {
  const [votes, updateVotes] = useState(0)
  return (
    <div className="vote flex-parent">
      <button type="button" className="vote flex-child" onClick={() => updateVotes(votes + 1)}> + </button>
      <p className="vote flex-child">{votes}</p>
      <button type="button" className="vote flex-child" onClick={() => updateVotes(votes - 1)}> - </button>
    </div>
  )
}
export default Voter
