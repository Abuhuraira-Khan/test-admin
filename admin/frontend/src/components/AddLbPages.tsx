import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold,faItalic,faUnderline,faListUl,faListOl,faLink,faImage,faCode,faFile,faPalette,faMarker,faChartArea} from '@fortawesome/free-solid-svg-icons';

const AddLbPages = () => {
    return (
      <div className="w-[80%] bg-slate-200 p-2">
        <div id="add_lb_pages_wrapper" className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Create New Learning Subject</h2>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600">
              Publish
            </button>
          </div>
          
          {/* Title Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter your title here"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
  
          {/* Toolbar */}
          <div className="flex space-x-2 mb-4 border-b pb-2">
          <button className="p-2 border rounded-md hover:bg-gray-200">
            <FontAwesomeIcon icon={faBold} />
          </button>
          <button className="p-2 border rounded-md hover:bg-gray-200">
            <FontAwesomeIcon icon={faItalic} />
          </button>
          <button className="p-2 border rounded-md hover:bg-gray-200">
            <FontAwesomeIcon icon={faUnderline} />
          </button>
          <button className="p-2 border rounded-md hover:bg-gray-200">
            <FontAwesomeIcon icon={faListUl} />
          </button>
          <button className="p-2 border rounded-md hover:bg-gray-200">
            <FontAwesomeIcon icon={faListOl} />
          </button>
          <button className="p-2 border rounded-md hover:bg-gray-200">
            <FontAwesomeIcon icon={faLink} />
          </button>
          <button className="p-2 border rounded-md hover:bg-gray-200">
            <FontAwesomeIcon icon={faImage} />
          </button>
          <button className="p-2 border rounded-md hover:bg-gray-200">
          <FontAwesomeIcon icon={faCode} />
          </button>
          <button className="p-2 border rounded-md hover:bg-gray-200">
          <FontAwesomeIcon icon={faFile} />
          </button>
          <button className="p-2 border rounded-md hover:bg-gray-200">
          <FontAwesomeIcon icon={faPalette} />
          </button>
          <button className="p-2 border rounded-md hover:bg-gray-200">
          <FontAwesomeIcon icon={faMarker} />
          </button>
          <button className="p-2 border rounded-md hover:bg-gray-200">
          <FontAwesomeIcon icon={faChartArea} />
          </button>
        </div>
  
          {/* Content Area */}
          <div>
            <textarea
              rows={15}
              placeholder="Write your blog post here..."
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
  
          {/* Add Media Section */}
          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600">
                Add Image
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600">
                Add Video
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600">
                Add File
              </button>
            </div>
            <div>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-600">
                Discard
              </button>
            </div>
          </div>
  
        </div>
      </div>
    )
  }
  
  export default AddLbPages;
  