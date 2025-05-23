"use client"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

import Profile from "@components/Profile"

const MyProfile = () => {

  // Fetching the post of specific user
  const [posts, setPosts] = useState([]);

  const {data: session} = useSession();
  useEffect(() => {
      const fetchPosts = async()=>{
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
  
      setPosts(data)
      }
  
      if(session?.user.id) fetchPosts();
    }, [])


  const handleEdit = () =>{

  }
  const handleDelete = async()=>{

  }

  return (
    <Profile
      name='My'
      desc="Welcome to your personalized Profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyProfile