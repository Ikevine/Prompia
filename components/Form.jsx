import Link from 'next/link'

const Form = ({ type , post , setPost , submitting , handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
       <h1 className='head_text text-left blue_gradient'>{type} Post</h1>
       <p className='desc text-left max-w-md'>
        {type} and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform
       </p>

       <form
       onSubmit={handleSubmit}
       className='mt-1o w-full max-w-2xl flex flex-col gap-7 glassmorphism'
       >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-70'>Your AI promp</span>

          <textarea
            value={post.prompt}
            onChange={(e)=> setPost({ ...post, prompt: e.target.value})}
            placeholder='write your post here'
            required
            className='form_textarea'
          />
        </label>

        {/* Field OR TAGof the prompt */}

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-70'>Tag
            <span className='font-normal'>#product, #Development, #idea</span>
          </span>
          
          <input
            value={post.tag}
            onChange={(e)=> setPost({ ...post, tag: e.target.value})}
            placeholder="#tag"
            required
            className='form_input'
          />
        </label>
          
          {/* button to submit or cancel the request */}
      <div className="flex-end mx-3 mb-5 gap-4">

        <Link href="/" className='text-gray-500 text-sm'>
        Cancel
        </Link>

        <button
        type='submit'
        disabled={submitting}
        className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
        >
         {submitting ? `${type}...`: type}
        </button>
      </div>

       </form>
    </section>
  )
}

export default Form