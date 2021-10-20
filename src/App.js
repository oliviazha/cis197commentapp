import React, {useState} from 'react'

import Title from './components/Title'
import Form from './components/Form'
import Posts from './components/Posts'

 
const App = () => {

    const [allPosts, setAllPosts] = useState([])
    const [isTopForm, setIsTopForm] = useState(true)

  return (
    <>
      <Title />
      <Form setPosts = {setAllPosts} posts = {allPosts} isTopForm = {isTopForm}/>
      <Posts allPosts = {allPosts} depth = {0}/> 
    </>
  )
}
export default App