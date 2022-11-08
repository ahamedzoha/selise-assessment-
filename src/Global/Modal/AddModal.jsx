import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { useModal } from "../../Contexts/AddModalContext"
import { useFormik } from "formik"
import { useBookmarks } from "../../Contexts/BookMarkContext"
import { useCategories } from "../../Contexts/CategoryContext"
import { v4 as uuidv4 } from "uuid"
import * as Yup from "yup"

const AddModal = () => {
  const [createCategory, setCreateCategory] = useState(false)
  const { isModalOpen, closeModal } = useModal()
  const { addBookmark } = useBookmarks()
  const { addCategory, categories } = useCategories()

  const { values, handleChange, handleSubmit, resetForm, errors } = useFormik({
    initialValues: {
      id: "",
      title: "",
      url: "",
      category: categories[0]?.id,
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(30, "Must be 30 characters or less")
        .required("Title is required"),
      url: Yup.string()
        .matches(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
          "Enter correct url! (inlcude http:// or https://)"
        )
        .required("Please enter website"),
      category: Yup.string().required("Category is required"),
    }),
    onSubmit: (values) => {
      if (createCategory) {
        addCategory({ id: uuidv4(), name: values.category })
        setCreateCategory(false)
      }
      addBookmark({ ...values, id: uuidv4() })
      closeModal()
      resetForm({
        values: {
          category: categories[0]?.id,
        },
      })
    },
  })

  // console.log(errors)

  return (
    <Dialog open={isModalOpen} onClose={() => closeModal()}>
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel className="w-full max-w-sm rounded bg-white p-4">
          <Dialog.Title className="font-bold mb-4">Add Bookmak</Dialog.Title>
          <Dialog.Description>{/* Form */}</Dialog.Description>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={handleChange}
              value={values.title}
              className="border border-gray-300 rounded-md p-2"
            />
            {errors.title && (
              <span className="text-red-500 text-sm">{errors.title}</span>
            )}

            <label htmlFor="url">URL</label>
            <input
              type="text"
              name="url"
              id="url"
              onChange={handleChange}
              value={values.url}
              className="border border-gray-300 rounded-md p-2"
            />
            {errors.url && (
              <span className="text-red-500 text-sm">{errors.url}</span>
            )}

            {createCategory ? (
              <div className="flex items-end justify-between">
                <div className="flex flex-col items-start">
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    onChange={handleChange}
                    value={values.category}
                    className="border border-gray-300 rounded-md p-2"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => {
                    addCategory({ id: uuidv4(), name: values.category })
                    setCreateCategory(false)
                  }}
                  className="bg-green-300 px-2 py-1 text-sm rounded-lg"
                >
                  Add Category +
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between ">
                <div className="flex flex-col items-start">
                  <label htmlFor="category">Category</label>
                  <select
                    name="category"
                    id="category"
                    onChange={handleChange}
                    value={values.category}
                    // selected={categories[0]?.id}
                    className="border border-gray-300 rounded-md p-2"
                  >
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="button"
                  onClick={() => setCreateCategory(true)}
                  className="bg-green-300 px-2 py-1 text-sm rounded-lg"
                >
                  Add Category
                </button>
              </div>
            )}

            <button
              type="submit"
              className="mt-4 bg-indigo-400 text-white rounded-md p-2"
            >
              Add
            </button>
          </form>
          <button
            onClick={() => closeModal()}
            className=" bg-red-500 text-white rounded-md p-2 w-full mt-4"
          >
            Cancel
          </button>

          {/* ... */}
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default AddModal
