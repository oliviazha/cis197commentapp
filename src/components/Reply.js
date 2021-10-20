import React, {useState} from 'react'
import Form from './Form'
import Posts from './Posts'


const Reply = ({depth}) => {

    const [depth2, setDepth] = useState(depth + 1)
    const [isReplyFormVisible, changeReplyFormVisible] = useState(false)
    const [allReplies, setAllReplies] = useState([])

    return (
        <>
            <button onClick={() => changeReplyFormVisible(!isReplyFormVisible)}
            > Reply </button>
            {isReplyFormVisible && <Form setPosts = {setAllReplies} posts = {allReplies} isTopForm = {false}/>}
            <Posts allPosts = {allReplies} depth = {depth2}/>
        </>
    )

}

export default Reply