
const LearningLab = () => {
  return (
    <div className="w-[80%] p-2">
      <div id="learning_lab_wrapper" className="w-full">
        <h1 className="text-center">Learning lab</h1>
        {/* all pages list */}
        <div id="all_pages_list">
            <div className="flex gap-1 bg-blue-700 p-1 text-white items-center w-2/12">
                <span>index</span>
                <h4 className="hover:underline cursor-pointer">subject title</h4>
            </div>
        </div>
        {/* add new subject */}
        <div className="w-[80%] flex justify-center fixed bottom-0 h-10 bg-blue-600">
            <button className="px-2 py-1 hover:bg-red-400 bg-red-500 text-white">Add New Subject</button>
        </div>
      </div>
    </div>
  )
}

export default LearningLab
