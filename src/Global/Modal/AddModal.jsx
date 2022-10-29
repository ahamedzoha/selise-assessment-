import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { useModal } from "../../Contexts/AddModalContext"
import { Formik } from "formik"
import { useBookmarks } from "../../Contexts/BookMarkContext"
import { useCategories } from "../../Contexts/CategoryContext"

const AddModal = () => {
  const { isModalOpen, closeModal } = useModal()
  const { addBookmark } = useBookmarks()
  const { addCategory, categories } = useCategories()

  return (
    <Dialog open={isModalOpen} onClose={() => closeModal()}>
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="w-full max-w-sm rounded bg-white p-4">
          <Dialog.Title className="font-bold">Add Bookmak</Dialog.Title>
          <Dialog.Description>
            {/* Form */}
            <form className="flex flex-col space-y-2">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                className="border border-gray-300 rounded-md p-2"
              />

              <label htmlFor="category">Category</label>
              <input
                type="text"
                name="category"
                id="category"
                className="border border-gray-300 rounded-md p-2"
              />
              <label htmlFor="url">URL</label>
              <input
                type="text"
                name="url"
                id="url"
                className="border border-gray-300 rounded-md p-2"
              />
              <button className="bg-indigo-400 text-white rounded-md p-2">
                Add
              </button>
              <button className="bg-red-500 text-white rounded-md p-2">
                Cancel
              </button>
            </form>
          </Dialog.Description>

          {/* ... */}
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default AddModal
