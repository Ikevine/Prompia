import PrompCard from "./prompCard"

const Profile = ({name, desc, data, handleEdit, handleDelete}) => {
  return (
    <section className="w-full"> 
       <h1 className="head_text text-left blue_gradient">
        {name} Profile
       </h1>
       <p className="desc text-left">{desc}</p>

       {/* Displayint the prompts */}
    <div className="mt-10 prompt_layout">
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
    </section>
  )
}

export default Profile