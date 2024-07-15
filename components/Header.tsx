import Link from "next/link";

const Header = () => {
    return (
        <header>
        <nav>
          <ul className="nav">
            <Link href="#socials">Contact</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#about">About</Link>
          </ul>
        </nav>
      </header>
    )
}

export default Header;