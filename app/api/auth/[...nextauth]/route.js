/** We're using NextAuth’s dynamic API routing, which automatically creates different URLs like:

/api/auth/signin – Sign-in page

/api/auth/callback/google – Where Google sends users back

/api/auth/session – Get session inf */

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@models/user";
import { connectToDB } from "@utils/database";

// // Checking if we are getting the data
// console.log("Here is the console" , {
//   clientId: process.env.GOOGLE_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET
// })


const handler = NextAuth({
    
    // Getting our credentials about the google 
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    async session({session}){
        const sessionUser = await User.findOne({
            email: session.user.email
        })
        session.user.id = sessionUser._id.toString();

        //Know which user is currently logged in
        return session;
    },

    async signIn({profile}){
        try {
            await connectToDB();
            //Check if a user already exists
            const userExists = await User.findOne({
                email: profile.email
            })
            // if not create a new user 
            if (!userExists){
                await User.create({
                    email: profile.email,
                    username: profile.name.replace(" ", "").toLowerCase(),
                    image: profile.picture
                })
            }
            return true
        } catch (error) {
            console.log("Error checking if user exists", error.message);
            return false
        }
    },
})

export { handler as GET, handler as POST }; 