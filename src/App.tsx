
import { Model } from "mongoose"
import Hero from "./componets/Hero"
import Highlights from "./componets/Highlights"
import Navbar from "./componets/Navbar"
import Moldel from "./componets/Model"



const  App = () => {
  return (
        <main className="bg-black">
                <Navbar />
                <Hero />
                <Highlights/>
                <Moldel />
        </main>
  )  
}

export default App
