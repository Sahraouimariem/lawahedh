import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
   
    <nav className="navbar navbar-expand-lg navbar-dark bg-[#E6E6E6]">
    <div className="container-fluid position-relative">
      <a className="navbar-brand me-16" href="#">
        <img style={{width:"50px",borderRadius:"50%",marginLeft:"70px"}}
          className="img-fluid"
          src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/438174567_1019723182843887_2638632724819371443_n.jpg?stp=c0.155.1131.1131a_dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=52bb43&_nc_ohc=1lYE9rXSrKkQ7kNvgG2F5ZP&_nc_zt=23&_nc_ht=scontent.ftun1-2.fna&_nc_gid=AfwhjA-G77I9-UOPQln5Lrm&oh=00_AYAuk3O660eV7UgyQzaaiic0JB4p1dcJgxtgSiH8pS39_w&oe=6772E4CF"
          alt=""
        />
      </a>
      <div style={{fontFamily: "Dancing Script",marginLeft:"50px"}} className="collapse navbar-collapse position-absolute top-50 start-50 translate-middle">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link text-dark" href="/">
              <b>Home</b>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="">
            <b>Chocolats & Macarons</b>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="/products">
              <b>Products</b>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">
            <b>Mariage & Naissance</b>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">
            <b>Nos meilleures ventes</b>
            </a>
          </li>
        </ul>
      </div>
      <div className="d-none d-lg-block">
        <a className="d-inline-block" href="#">
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 0.5H2.16667L2.5 2.16667M3.83333 8.83333H12.1667L15.5 2.16667H2.5M3.83333 8.83333L2.5 2.16667M3.83333 8.83333L1.92259 10.7441C1.39762 11.269 1.76942 12.1667 2.51184 12.1667H12.1667M12.1667 12.1667C11.2462 12.1667 10.5 12.9129 10.5 13.8333C10.5 14.7538 11.2462 15.5 12.1667 15.5C13.0871 15.5 13.8333 14.7538 13.8333 13.8333C13.8333 12.9129 13.0871 12.1667 12.1667 12.1667ZM5.5 13.8333C5.5 14.7538 4.75381 15.5 3.83333 15.5C2.91286 15.5 2.16667 14.7538 2.16667 13.8333C2.16667 12.9129 2.91286 12.1667 3.83333 12.1667C4.75381 12.1667 5.5 12.9129 5.5 13.8333Z"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      <div className="d-lg-none">
        <button className="btn btn-primary d-flex align-items-center px-2 py-1 navbar-burger">
          <svg viewBox="0 0 100 45" width={26} height={20}>
            <rect width={100} height={6} />
            <rect y={18} width={100} height={6} />
            <rect y={38} width={100} height={6} />
          </svg>
        </button>
      </div>
    </div>
  </nav>



  )
}

export default Header