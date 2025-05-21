import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

//Creating our metadata
export const metadata = {
    title:"Prompia",
    description:"Discover and share AI prompts",
}


const RootLayout = ({ children }) => (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient"/>
            </div>
            {/* Our  main content */}
            <main className="app">
                {/* Importing navbar */}
                <Nav/>
                {children}
            </main>
        </body>
    </html>
)
export default RootLayout