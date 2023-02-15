import { RiChatPollLine, RiMore2Fill } from "react-icons/ri";

function App() {

  return (
    <div className="min-h-screen grid grid-cols-1 xl:grid-cols-4 bg-[#0B131A] text-gray-300">
      <div className="bg-[#1B2831] flex items-center justify-between">
        <div>
          <img src="https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg"
          className="w-10 h-10 object-cover rounded-full"
          />
        </div>
        <div>
          <RiChatPollLine />
          <RiMore2Fill />
        </div>
      </div>
      <div className="xl:col-span-3">Hola 2</div>
    </div>
  )
}

export default App
