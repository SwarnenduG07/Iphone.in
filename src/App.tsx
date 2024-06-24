import Hero from "./componets/Hero"
import Highlights from "./componets/Highlights"
import Navbar from "./componets/Navbar"


const  App = () => {
  return (
        <main className="bg-black">
                <Navbar />
                <Hero />
                <Highlights/>
        </main>
  )  
}

export default App
