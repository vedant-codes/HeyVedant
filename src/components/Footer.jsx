import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <div className="text-xl md:text-2xl font-bold mb-2">© 2025</div>
          <div className="text-gray-400">LAST UPDATED: 23/05/2025</div>
          <div className="text-gray-400">PUNE, IN (GMT+5:30)</div>
          {/* <Link
            to="#"
            className="text-gray-400 flex items-center justify-center md:justify-start gap-1 hover:text-white"
          >
            PINOKIO ↗
          </Link>
          <Link
            to="#"
            className="text-gray-400 flex items-center justify-center md:justify-start gap-1 hover:text-white"
          >
            APPSHOT ↗
          </Link>
          <Link
            to="#"
            className="text-gray-400 flex items-center justify-center md:justify-start gap-1 hover:text-white"
          >
            PREVIEW ↗
          </Link> */}
        </div>

        <div className="text-center md:text-right">
          <div className="text-xl md:text-2xl font-bold mb-2">@ CONNECT</div>
          <Link to="https://www.instagram.com/_ve_dantt._/" className="text-gray-400 flex items-center justify-center md:justify-end gap-1 hover:text-white">
            INSTAGRAM ↗
          </Link>
          <Link to="https://x.com/vedantshinde343" className="text-gray-400 flex items-center justify-center md:justify-end gap-1 hover:text-white">
            TWITTER (X) ↗
          </Link>
          <a
  href="mailto:vedantshinde.vs12@gmail.com"
  className="text-gray-400 flex items-center justify-center md:justify-end gap-1 hover:text-white"
>
  MAIL
</a>

        </div>
      </div>
    </footer>
  )
}

export default Footer
