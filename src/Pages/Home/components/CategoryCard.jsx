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

export default CategoryCard
