import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-white md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-row">
        <nav>
          <Link to="/" className="mr-5 text-black hover:text-gray-500">
            Home
          </Link>
          <Link to="/workexperience" className="mr-5 text-black hover:text-gray-500">
            Experience
          </Link>
          <Link to="/projects" className="mr-5 text-black hover:text-gray-500">
            Projects 
          </Link>
        </nav>
      </div>
    </header>
  );
}
