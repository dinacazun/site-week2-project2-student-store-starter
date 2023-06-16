import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"

export default function Navbar() {
  return (
    <nav className = "navbar">
      <div className = "codepathLogo">
        <img src = "https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"/>
      </div>
      <Logo>Home Page</Logo>
    </nav>
  )
}
