import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="w-[20%] sticky bottom-0 min-h-screen p-2 bg-slate-200 border-r-2 border-blue-500">
        <div id="sidebar_wrapper" className="w-full">
            <div id="sidebar_content" className="w-full">
                <div id="sidebar_header" className="w-full border-b-[1px] border-blue-500 pb-2">
                    <img width={70} height={70} className="rounded-full object-cover bg-[#2b2b2c]" src="https://web-portfolio-theta-nine.vercel.app/_next/static/media/site-logo-transparent.a596c5c7.svg" alt="" />
                    <h4>Abu huraira Khan - Universe</h4>
                    <p className="w-full whitespace-nowrap text-ellipsis overflow-hidden">
                      <a className="hover:underline text-[#0000EE]" href="https://web-portfolio-theta-nine.vercel.app/">
                      https://web-portfolio-theta-nine.vercel.app/
                      </a>
                    </p>
                </div>
                <div id="sidebar_list" className="w-full pt-5">
                    <ul>
                        <Link to={'/home'}><li className="py-1 px-2 text-lg cursor-context-menu hover:text-white w-full hover:bg-slate-600 mb-1">Home</li></Link>
                        <Link to={'/product'}><li className="py-1 px-2 text-lg cursor-context-menu hover:text-white w-full hover:bg-slate-600 mb-1">Product</li></Link>
                        <Link to={'/project'}><li className="py-1 px-2 text-lg cursor-context-menu hover:text-white w-full hover:bg-slate-600 mb-1">Project</li></Link>
                        <Link to={'/blog'}><li className="py-1 px-2 text-lg cursor-context-menu hover:text-white w-full hover:bg-slate-600 mb-1">Blog</li></Link>
                        <Link to={'/learning-lab'}><li className="py-1 px-2 text-lg cursor-context-menu hover:text-white w-full hover:bg-slate-600 mb-1">Learning Lab</li></Link>
                        <Link to={'/code-vault'}><li className="py-1 px-2 text-lg cursor-context-menu hover:text-white w-full hover:bg-slate-600 mb-1">Code Vault</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
