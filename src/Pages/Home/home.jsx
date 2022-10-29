import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchUsers } from "../../API/fetch20user"
// import items from "../../Utils/dummy"
import { useModal } from "../../Contexts/AddModalContext"
import AddModal from "../../Global/Modal/AddModal"

const Home = () => {
  const { openModal } = useModal()
  return (
    <div className="mt-4 flex items-center flex-col">
      <button
        onClick={() => openModal()}
        className="text-xl bg-indigo-400 rounded-md py-2 px-3 text-white"
      >
        Add Bookmak
      </button>
      {/* Category Cards container */}
      <div className="w-full m-4 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 space-x-2 space-y-2">
        {/* Category Card */}

        <CategoryCard categoryName="Javascript">
          <CardItem />
        </CategoryCard>
      </div>
      <AddModal />
    </div>
  )
}

const CategoryCard = ({ categoryName, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-md font-bold">{categoryName}</h2>
      <div className="grid grid-cols-1 gap-2">
        {/* Items */}
        {children}
      </div>
    </div>
  )
}

const CardItem = ({ title, categoryName, url }) => {
  return (
    <div className="flex justify-between pr-2 bg-gray-200 rounded-lg p-2">
      <span>{title}</span>
      <button className="text-sm bg-orange-500 px-2  py-1 rounded-lg">
        Details
      </button>
    </div>
  )
}

export default Home
