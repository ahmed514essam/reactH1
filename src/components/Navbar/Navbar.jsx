import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./navbar.module.css"

export default function Navbar() {
    return (
        <header className={styles.navbar}>
            <Link className={styles.one} to={"/"}>Weki Home</Link>
            <nav>
                <Link className={styles.two} to={"/favourites"}>Favourites</Link>
            </nav>
        </header>
    )
}
