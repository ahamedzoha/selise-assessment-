import { useContext, createContext, useState, useEffect } from "react"

const CategoriesContext = createContext()

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState(
    JSON.parse(localStorage.getItem("categories")) || []
  )

  useEffect(() => {
    setCategories(JSON.parse(localStorage.getItem("categories")) || [])
  }, [])

  const addCategory = (category) => {
    setCategories([...categories, category])
    localStorage.setItem(
      "categories",
      JSON.stringify([...categories, category])
    )
  }

  const removeCategory = (id) => {
    setCategories(categories.filter((category) => category.id !== id))
    localStorage.setItem(
      "categories",
      JSON.stringify(categories.filter((category) => category.id !== id))
    )
  }

  const updateCategory = (id, updatedCategory) => {
    setCategories(
      categories.map((category) =>
        category.id === id ? updatedCategory : category
      )
    )
    localStorage.setItem(
      "categories",
      JSON.stringify(
        categories.map((category) =>
          category.id === id ? updatedCategory : category
        )
      )
    )
  }

  return (
    <CategoriesContext.Provider
      value={{ categories, addCategory, removeCategory, updateCategory }}
    >
      {children}
    </CategoriesContext.Provider>
  )
}

export const useCategories = () => {
  return useContext(CategoriesContext)
}
