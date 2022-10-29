import { Home, Error404 } from "./Pages"
import { Routes, Route } from "react-router-dom"

import { Navbar } from "./Global"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      {/* <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={toasterOptions}
      /> */}
    </>
  )
}

export default App
