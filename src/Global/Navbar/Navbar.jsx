import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()

  const links = [
    {
      to: "/",
      name: "Home",
      active: location.pathname === "/",
    },
  ]
  return (
    <nav className="flex justify-between bg-slate-700 px-2 py-4 text-white text-lg">
      <span>Bookmark Manager</span>
      <ul className="flex  space-x-3">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`py-2 px-3 rounded-lg ${
                link.active ? "bg-slate-600" : "bg-slate-700"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
