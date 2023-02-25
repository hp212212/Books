import React from "react";
import { NavLink } from "react-router-dom";
// import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-success">
        <div class="container  py-3">
          <a class="navbar-brand text-center" href="/">Book Bazzar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="AboutUs">About Us</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="Services">Services</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="Paginations">Paginations</NavLink>
              </li>
              <li class="nav-item">
                <a class="nav-link text-warning" href="/a">Bookbazzar@gmail.com</a>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                {/* <a class="nav-link" style={{ color: "black" }} href="/a">Contact Us</a> */}
                <div class="dropdown">
                  <button class="btn dropdown-toggle btn-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ABC
                  </button>
                  <ul class="dropdown-menu">
                    <li><NavLink className="dropdown-item" to="Admin1">Admin1</NavLink></li>
                    <li><NavLink className="dropdown-item" to="Admin1/UserLogin1">Users1</NavLink></li>
                    <li><NavLink className="dropdown-item" to="Admin1/Registration1">New Registrations1</NavLink></li>
                  </ul>
                </div>
              </li>
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
                <button class="btn btn-outline-warning" type="submit">Search</button>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;