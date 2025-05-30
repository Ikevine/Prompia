'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn,signOut,useSession,getProviders} from "next-auth/react"

const Nav = () => {

    const {data:session} = useSession();

    const [providers, setProviders] = useState(null);
    // Tggle for the mobile version
    const [toggleDropdown, settoggleDropdown] = useState(false)
    // useEffect to get the providers (next-auth)
    useEffect(()=>{
        const setUpProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        }
        setUpProviders();
    },[])

    
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href="/" className='flex gap-2 flex-center'>
            <Image
            src="/assets/images/logo.svg"
            alt="Promptopia Logo"
            width={30}
            height={30}
            className='object-contain'
            />
            <p className='logo_text'>Prompia</p>
        </Link>



        {/* Desktop Navigatioin */}
        <div className="sm:flex hidden">
            {/* Logic to display nav content based on signin  */}
            {session?.user ?(
                <div className="flex gap-3 md:gap-5">
                   <Link href="/create-prompt" className='black_btn'>
                   Create-post
                   </Link> 

                   <button type='button' onClick={signOut} className='outline_btn'>
                     Sign Out
                   </button>

                   <Link href="/profile">
                    <Image
                    src={session?.user.image}
                    alt='Profile'
                    height={37}
                    width={37}
                    className='rounded-full'
                    />
                   </Link>
                </div>
                
            ):(
               <>
                {providers && Object.values(providers).map((provider) =>
                
                (
                    <button
                    type='button'
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className='black_btn'
                    >
                        Sign In
                    </button>
                ))}
               </>
            )}
        </div>


        {/* Mobile navigation */}
        <div className="sm:hidden flex relative">
            {session?.user ? (
                <div className="flex">
                    <Image
                    src={session?.user.image}
                    alt='Profile'
                    height={37}
                    width={37}
                    className='rounded-full'
                    onClick={()=> settoggleDropdown((prev)=> !prev)}
                    />
                    {toggleDropdown&&(
                        <div className="dropdown">
                            <Link 
                            href="/profile" 
                            className='dropdown_link'
                            onClick={()=>settoggleDropdown(false)}
                            >
                                My profile
                            </Link>
                            <Link 
                            href="/create-prompt" 
                            className='dropdown_link'
                            onClick={()=>settoggleDropdown(false)}
                            >
                                Create Prompt
                            </Link>
                            <button
                            type='button'
                            onClick={()=> {
                                settoggleDropdown(false);
                                signOut();
                            }}
                            className='mt-5 w-full black_btn'
                            >
                             Sign out
                            </button>
                            
                        </div>
                    )}
                </div>
            ):(
                <>
                {providers && Object.values(providers).map((provider) =>
                
                (
                    <button
                    type='button'
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className='black_btn'
                    >
                        Sign In
                    </button>
                ))}
                </>
            )}
        </div>

    </nav>
  )
}

export default Nav