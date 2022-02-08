import * as React from "react"
import { Link } from "gatsby"

const Header = () => (
    <header className="p-4 bg-neutral-100">
        <div className="flex justify-end">
            <Link className="px-4 py-1 transition-all duration-150 ease-linear hover:text-primary" to="/">關於我</Link>
            <Link className="px-4 py-1 transition-all duration-150 ease-linear hover:text-primary" to="/">作品專案</Link>
            <Link className="px-4 py-1 transition-all duration-150 ease-linear hover:text-primary" to="/">聯繫方式</Link>
        </div>
    </header>
)

export default Header