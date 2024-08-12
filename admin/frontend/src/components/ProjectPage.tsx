
const ProjectPage = () => {
  return (
    <div className="w-[80%] bg-slate-200 p-2">
      <div id="projectPage_wrapper" className="w-full">
        <h1 className="text-center">project page</h1>
        {/* all project list */}
        <div className="">
          <div className="flex gap-2">
            <div className="w-1/5 h-64 bg-blue-700 text-slate-300 relative">
            <button className="px-2 py-1 hover:bg-red-400 bg-red-500 text-white absolute top-2 right-10">D</button>
            <button className="px-2 py-1 hover:bg-red-400 bg-red-500 text-white absolute top-2 right-3">E</button>
              <img className="w-full h-[50%] object-cover" src="https://my-mern-portfolio.vercel.app/assets/images/Screenshot%202024-04-16%20034539.png" alt="" />
              <h5>title</h5>
              <span>type</span>
              <p style={{scrollbarWidth:'none',}} className=" bg-blue-400 max-h-14 overflow-y-scroll">description</p>
              <a className="hover:underline" href="">demo link</a>
            </div>
          </div>
        </div>
        {/* add new project */}
        <div className="sticky w-full bottom-0">
          <div className="w-1/2 bg-blue-700 translate-x-1/2 p-1 flex flex-col items-center">
            <form className="h-0 overflow-hidden">
              <input className="w-full mb-1" type="file" />
              <input className="w-full mb-1" type="text" name="title" placeholder="title" />
              <input className="w-full mb-1" type="text" name="type" placeholder="type" />
              <textarea className="w-full h-24" name="description" placeholder="description"></textarea>
            </form>
            <button className="px-2 py-1 hover:bg-red-400 bg-red-500 text-white">Add new project</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
