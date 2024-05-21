import React from "react";
import Badge from '@mui/material/Badge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoopIcon from '@mui/icons-material/Loop';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <>

      <div className="header">


        {/* Menu */}
        <div className="header-menu">
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">My Account</a>
            </li>
            <li>
              <a href="">Wishlist</a>
            </li>
            <li>
              <a href="">Order Tracking</a>
            </li>
          </ul>
        </div>
        {/* Offer */}
        <div className="offer">
          <h5>
            Get great devices up to 50% off{" "}
            <a href="" style={{ color: "green" }}>
              View details
            </a>
          </h5>
        </div>
        {/* Contact and info */}
        <div className="contact-info">
          <ul>
            <li>
              <p>
                Need help? Call Us:<a href=""> + 1800 900</a>
              </p>
            </li>
            <li>
              <p>English</p>
            </li>
            <li>
              <p>USD</p>
            </li>
          </ul>
        </div>
      </div>


      {/* Main-Header */}

      <div className="main-header">
        <div className="brand">
          <img src="https://nest-nextjs-13.vercel.app/assets/imgs/theme/logo.svg" alt="" />
        </div>
        <div className="search">
          <form action="">
            <select name="" id="">
              <option value="">All Category</option>
            </select>
            <input type="search" placeholder="search" />
            
          </form>
          <SearchIcon color="action" />
        </div>
        {/* Side Content */}
        <div className="side-content">
          <div className="location">
            <select name="" id="">
              <option value="location">Your Location</option>
            </select>
          </div>
          <div className="button-icon">
            <ul>
              <li><h3><Badge badgeContent={1} color="success">
                <LoopIcon color="action" fontSize="large" />
              </Badge> Compare</h3></li>
              <li><h3><Badge badgeContent={1} color="success">
                <FavoriteBorderIcon color="action" fontSize="large" />
              </Badge> Wishlist</h3></li>
              <li><h3><Badge badgeContent={1} color="success">
                <ShoppingCartOutlinedIcon color="action" fontSize="large" />
              </Badge>Cart</h3></li>
              <li><h3>
                <Badge badgeContent={1} color="success">
                  <PermIdentityIcon color="action" fontSize="large" />
                </Badge>
                Account</h3></li>
            </ul>
          </div>
        </div>

      </div>

    </>
  );
}

export default Header;