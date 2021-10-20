import React, { useState } from 'react'
import Reply from './Reply'
import Voter from './Voter'

// display the inputs as posts
const Posts = ({ allPosts, depth }) => {
  const [depth2, setDepth] = useState(depth)

  if (depth === 3) {
    return null
  }

  return (
    allPosts.map((post, num) => (
      <div className={depth}>
        <div className="one-post">
          <Voter />
          <div className="post-text">
            <h2 className="post-name">
              { post.userInputName }
            </h2>
            <p>
              { post.userInputComment}
            </p>
            <Reply depth={depth2} />
          </div>
        </div>
      </div>
    )))
}

export default Posts
