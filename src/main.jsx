import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { BrowserRouter } from "react-router-dom"

import { ModalProvider } from "./Contexts/AddModalContext"
import { CategoriesProvider } from "./Contexts/CategoryContext"
import { BookmarksProvider } from "./Contexts/BookMarkContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoriesProvider>
        <BookmarksProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </BookmarksProvider>
      </CategoriesProvider>
    </BrowserRouter>
  </React.StrictMode>
)
