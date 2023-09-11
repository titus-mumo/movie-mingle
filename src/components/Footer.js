import { Link } from "react-router-dom";

export const Footer = () => {
  return (
      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Movie API</Link>. All Rights Reserved.</span>
          <ul className="flex flex-row items-center justify-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="https://github.com/titus-mumo" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6 ">Github</a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/titus-mumo-a9971926a/" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
              </li>
              <li>
                  <a href="https://twitter.com/TitusKennedy9" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">Twitter</a>
              </li>
              <li>
                  <a href="https://www.instagram.com/_tito_ken/" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
              </li>
              
          </ul>
      </footer>
  )
}