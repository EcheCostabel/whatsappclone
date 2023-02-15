import { RiChatPollLine, RiLoader3Line, RiMore2Fill } from "react-icons/ri";

function App() {
  return (
    <div className="min-h-screen grid grid-cols-1 xl:grid-cols-4 bg-[#0B131A] text-gray-300">
      <div className="bg-[#1B2831]">
        <div className="flex items-center justify-between p-4 h-[10vh]">
          <div>
            <img
              src="https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg"
              className="w-10 h-10 object-cover rounded-full"
            />
          </div>
          <div className="flex items-center gap-4 text-2xl">
            <RiLoader3Line className="hover:cursor-pointer" />
            <RiChatPollLine className="hover:cursor-pointer"/>
            <RiMore2Fill className="hover:cursor-pointer"/>
          </div>
        </div>
        <div className="bg-red-300 h-[90vh] overflow-y-scroll">Contacts</div>
      </div>
      <div className="xl:col-span-3">Hola 2</div>
    </div>
  );
}

export default App;
