const CardItem = ({ title, url, handleSelect }) => {
  return (
    <div className="flex flex-wrap justify-between pr-2 bg-gray-200 rounded-lg p-2">
      <p className=" pr-3 pl-1 pt-1 w-48">
        {title.length > 15 ? title.slice(0, 14) + "..." : title}
      </p>

      <div className="flex flex-wrap">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="bg-white rounded-lg p-2 mr-2"
        >
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
        </a>

        <button
          onClick={handleSelect}
          className="text-sm bg-orange-500 px-2  py-1 rounded-lg"
        >
          Details
        </button>
      </div>
    </div>
  )
}

export default CardItem
