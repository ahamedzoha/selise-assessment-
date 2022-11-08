import { useCategories } from "../../../Contexts/CategoryContext"
import { useBookmarks } from "../../../Contexts/BookMarkContext"

const CardDetails = ({ bookmark }) => {
  const { categories } = useCategories()
  const { bookmarks } = useBookmarks()

  const category = categories.find(
    (category) =>
      category.id === bookmark?.category || category.name === bookmark?.category
  )

  return bookmark ? (
    <div className="bg-white rounded-lg shadow-lg p-4 relative py-24 px-8">
      <div className="mb-10">
        <h2 className="text-sm font-bold">Title</h2>
        <span className="text-5xl "> {bookmark.title}</span>
      </div>

      <div>
        <h2 className="text-sm font-bold">URL</h2>
        <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
          <span className="pt-10">
            {bookmark.url}{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5  text-blue-500"
            >
              <path
                fillRule="evenodd"
                d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </a>
      </div>
      <p className="absolute bottom-6 text-sm">
        <span className="font-bold">Category:</span> {category?.name}
      </p>
    </div>
  ) : bookmarks?.length > 0 || categories.length > 0 ? (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-md font-bold">None Selected</h2>
    </div>
  ) : null
}

export default CardDetails
