import Nav from "./Nav"
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative">
      <div className="relative flex bg-blue-900 justify-between items-center p-8 text-white">
        <h1 className="text-xl font-bold">Chachos Pool</h1>

        <button className="lg:hidden" 
        onClick={() => setIsOpen(!isOpen)}>  

          <div className={`w-6 h-1 bg-white rounded-sm tranform transition-transform duration-1000 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-1 bg-white rounded-sm my-1 transition-opacity duration-500 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-1 bg-white rounded-sm tranform transition-transform duration-1000 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>

        </button>
        <Nav isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>

      <div className="bg-blue-700 text-white text-center py-1">
        <h2 className="text-lg font-semibold">Your reliable pool services</h2>
      </div>

    </header>
  )
}