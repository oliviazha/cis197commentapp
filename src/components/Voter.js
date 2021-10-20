import React, {useState} from 'react'


const Voter = () => {
    const [votes, updateVotes] = useState(0)
  
    return (
      <div class="vote flex-parent">
        <button class= "vote flex-child" onClick={() => updateVotes(votes + 1)} > + </button>
        <p class= "vote flex-child">{votes}</p>
        <button class= "vote flex-child" onClick={() => updateVotes(votes- 1)} > - </button>
      </div>
    )
  }
export default Voter