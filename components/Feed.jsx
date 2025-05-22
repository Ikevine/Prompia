'use client'

import { useState, useEffect} from 'react';
import PrompCard from './prompCard'

//This component is only going to be used in here //Function return the html tag
const PrompCardList = ({data, handleTagClick}) => {
 return(
  <div className="mt-16 prompt_layout">
     {
      data.map((post) =>(
        <PrompCard 
         key={post._id}
         post={post}
         handleTagClick={handleTagClick}
        />
      ))
     }
 </div>
 );
};

// Feed function start here
const Feed = () => {
  const [searchText, setsearchText] = useState('');

  const [posts, setposts] = useState([])
  
  const handleSearchChange = (e) =>{
      // get request
  }

  useEffect(() => {
    const fetchPosts = async()=>{
    const response = await fetch('/api/prompt');
    const data = await response.json();

    setposts(data)
    }

    fetchPosts();
  }, [])
  
  return (
    <section className='feed'>
        <form className='relative w-full fle-center'>
          <input 
          type="text" 
          placeholder='Search for tag or username'
          onChange={handleSearchChange}
          className='peer search_input'
          />
        </form>


        <PrompCardList
          data = {posts}
          handleTagClick = {()=>{}}
        />
    </section>
  )
}

export default Feed