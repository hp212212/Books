import React from "react";
import { NavLink } from "react-router-dom";
// import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-success">
        <div class="container  py-3">
          <NavLink className="navbar-brand text-center" to="/">Book Bazzar</NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="Books">Books</NavLink>
              </li>
              <li class="nav-item">
                <a class="nav-link text-warning" href="/a">Bookbazzar@gmail.com</a>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                {/* <NavLink className="nav-link" to="Login">Login</NavLink> */}
                <div class="dropdown">
                  <button class="btn dropdown-toggle btn-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Login
                  </button>
                  <ul class="dropdown-menu">
                    <li><NavLink className="dropdown-item" to="Admin">Admin</NavLink></li>
                    <li><NavLink className="dropdown-item" to="UserLogin">Users</NavLink></li>
                    <li><NavLink className="dropdown-item" to="Registration">New Registrations</NavLink></li>
                  </ul>
                </div>
              </li>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-warning" type="button">Search</button>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;