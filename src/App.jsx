import {
  RiChatPollLine,
  RiLoader3Line,
  RiMore2Fill,
  RiSearchLine,
} from "react-icons/ri";

function App() {
  return (
    <div className="min-h-screen grid grid-cols-1 xl:grid-cols-4 text-gray-300">
      <div className="bg-[#1B2831] flex flex-col">
        <div className="p-4 h-[15vh]">
          <div className="flex items-center justify-between mb-4">
            <div>
              <img
                src="https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg"
                className="w-10 h-10 object-cover rounded-full"
              />
            </div>
            <div className="flex items-center gap-4 text-2xl">
              <RiLoader3Line className="hover:cursor-pointer" />
              <RiChatPollLine className="hover:cursor-pointer" />
              <RiMore2Fill className="hover:cursor-pointer" />
            </div>
          </div>
          <form className="w-full">
            <div className="relative">
              <RiSearchLine className="absolute top-1/2 -translate-y-1/2 left-4" />
              <input
                className="bg-[#222C32] w-full rounded-full py-3 pl-10 pr-4 outline-none"
                placeholder="Buscar o empezar un chat nuevo"
              />
            </div>
          </form>
        </div>
        {/* Contacts  */}
        <div className="h-[85vh] overflow-y-scroll mt-5">
          <div  className="p-4 flex items-center gap-4 bg-[#222C32] border-b border-[#222C32] hover:cursor-pointer">

            <img
              src="https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg"
              className="w-10 h-10 object-cover rounded-full mt-6"
            />
            <div className="flex-1 flex justify-between">
              <div>
              <h1>Flor</h1>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit, amet consect... </p>
              </div>
              <div className="text-sm text-gray-500">14:21</div>
            </div>
          </div>
          <div className="p-4 flex items-center gap-4 hover:bg-[#222C32] border-b border-[#222C32] transition-colors hover:cursor-pointer">

            <img
              src="https://img.freepik.com/foto-gratis/retrato-joven-sonriente-gafas_171337-4842.jpg"
              className="w-10 h-10 object-cover rounded-full mt-6"
            />
            <div className="flex-1 flex justify-between">
              <div>
              <h1>Flor</h1>
              <p className="text-gray-500 text-sm">Lorem ipsum dolor sit, amet consect... </p>
              </div>
              <div className="text-sm text-gray-500">14:21</div>
            </div>
          </div>
        </div>
      </div>
      <div className="xl:col-span-3">Hola 2</div>
    </div>
  );
}

export default App;
