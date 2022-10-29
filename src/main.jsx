import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

import { ModalProvider } from "./Contexts/AddModalContext"
import { CategoriesProvider } from "./Contexts/CategoryContext"
import { BookmarksProvider } from "./Contexts/BookMarkContext"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CategoriesProvider>
          <BookmarksProvider>
            <ModalProvider>
              <App />
            </ModalProvider>
          </BookmarksProvider>
        </CategoriesProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
)
