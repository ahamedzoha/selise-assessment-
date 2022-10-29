import { useContext, createContext, useState } from "react"

const BookmarksContext = createContext()

// a bookmark context provider with localstorage
export const BookmarksProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem("bookmarks")) || []
  )

  const addBookmark = (bookmark) => {
    setBookmarks([...bookmarks, bookmark])
    localStorage.setItem("bookmarks", JSON.stringify([...bookmarks, bookmark]))
  }

  const removeBookmark = (id) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id))
    localStorage.setItem(
      "bookmarks",
      JSON.stringify(bookmarks.filter((bookmark) => bookmark.id !== id))
    )
  }

  const updateBookmark = (id, updatedBookmark) => {
    setBookmarks(
      bookmarks.map((bookmark) =>
        bookmark.id === id ? updatedBookmark : bookmark
      )
    )
    localStorage.setItem(
      "bookmarks",
      JSON.stringify(
        bookmarks.map((bookmark) =>
          bookmark.id === id ? updatedBookmark : bookmark
        )
      )
    )
  }

  return (
    <BookmarksContext.Provider
      value={{ bookmarks, addBookmark, removeBookmark, updateBookmark }}
    >
      {children}
    </BookmarksContext.Provider>
  )
}
export const useBookmarks = () => {
  return useContext(BookmarksContext)
}
