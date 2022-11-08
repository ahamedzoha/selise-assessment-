import { useState } from "react"
import { useModal } from "../../Contexts/AddModalContext"
import AddModal from "../../Global/Modal/AddModal"
import { useCategories } from "../../Contexts/CategoryContext"
import { useBookmarks } from "../../Contexts/BookMarkContext"
import CategoryCard from "./components/CategoryCard"
import CardItem from "./components/CardItem"
import CardDetails from "./components/CardDetails"

const Home = () => {
  const { openModal } = useModal()
  const { categories } = useCategories()
  const { bookmarks } = useBookmarks()

  const [selectedBookmark, setSelectedBookmark] = useState(null)

  const handleSelect = (bookmark) => {
    setSelectedBookmark(bookmark)
    console.log(bookmark)
  }

  return (
    <div className="mt-4 flex items-center flex-col">
      <button
        onClick={() => openModal()}
        className="text-xl bg-indigo-400 rounded-md py-2 px-3 text-white"
      >
        Add Bookmak
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
        {/* Category Cards container */}
        <div className=" m-4 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 space-x-2 space-y-2">
          {categories.map((category) => (
            <CategoryCard key={category.id} categoryName={category.name}>
              {bookmarks
                .filter(
                  (bookmark) =>
                    bookmark.category === category.id ||
                    bookmark.category === category.name
                )
                .map((bookmark) => (
                  <CardItem
                    key={bookmark.id}
                    title={bookmark.title}
                    url={bookmark.url}
                    handleSelect={() => handleSelect(bookmark)}
                  />
                ))}
            </CategoryCard>
          ))}
        </div>
        <CardDetails bookmark={selectedBookmark} />
      </div>
      <AddModal />
    </div>
  )
}

export default Home
