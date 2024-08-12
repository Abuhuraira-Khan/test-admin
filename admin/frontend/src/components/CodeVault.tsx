
const CodeVault = () => {
  return (
    <div className="w-[80%] p-2 bg-slate-200">
        <div id="code_vault_wrapper" className="w-full">
            {/* all code list */}
            <div  style={{scrollbarWidth:'none'}} className="w-full overflow-y-scroll max-h-[80vh]">
                <div className="w-1/6 bg-blue-700 h-36 flex flex-col text-white relative">
                <button className="bg-red-500 hover:bg-red-600 absolute top-3 py-1 px-2 right-10">D</button>
                <button className="bg-red-500 hover:bg-red-600 absolute top-3 py-1 px-2 right-3">E</button>
                    <img src="https://my-mern-portfolio.vercel.app/assets/images/Screenshot%202024-04-16%20034539.png" alt="" />
                    <a className="hover:underline" href="">file</a>
                    <a className="hover:underline" href="">view project</a>
                </div>
            </div>
            {/* add new code */}
            <div className="w-1/2 bg-green-400 translate-x-1/2">
                <form>
                    <input type="file" />
                    <input type="file" />
                    <input type="text" placeholder="project link"/>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-
                    1 px-4 rounded">Add code</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default CodeVault
