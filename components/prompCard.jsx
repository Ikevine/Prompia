'use client'
import Image from "next/image"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
const PrompCard = ({post, handleTagClick, handleDelete, handleEdit}) => {

    // For implementing copy functions
    const [copied, setCopied] = useState("");
    const handleCopy = () =>{
     setCopied(post.prompt);
     navigator.clipboard.writeText(post.prompt);
     setTimeout(()=> setCopied(""),3000);
    }

    
  return (
    <div className="prompt_card">
       <div className="flex justify-between items-start gap-5">
        <div 
        className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
        // onClick={handleProfileClick}
        >
          <Image 
            src={post.creator.image}
            width={40}
            height={40}
            alt="Author"
            className="rounded-full object-contain"
          />

        {/* Displaying the username and email of the user */}
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
                {post.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
                {post.creator.email}
            </p>
          </div>
         </div>

          {/* Copy the Prompt  */}
          <div 
            className="copy_btn"
            onClick={handleCopy}
            >
            <Image
             src={
                copied === post.prompt 
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"   
             }
             alt= {copied === post.prompt? 'tick-icon':'copy-icon'}
             width={12}
             height={12}
            />
          </div>
       </div>

       {/* Display the prompt and the tag */}

       <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
       <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={()=> handleTagClick && handleTagClick(post.tag)}
       >#{post.tag}</p>
    </div>
  )
}

export default PrompCard