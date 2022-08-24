import React from 'react';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

export default function NavBar(props) {
  const path ='/'
  return (
    <>
        <nav className="navbar bg-primary  navbar-expand-lg ">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-light" id="onLarge" to="/">{props.title}</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
            {props.navItemOne.needed ? <li className="nav-item">
              <NavLink className="nav-link  text-light"  to="/">{props.navItemOne.text}</NavLink>
            </li> : null}
            {props.navItemTwo.needed ? <li className="nav-item">
              <NavLink className="nav-link text-light" to={path+props.navItemTwo.text}>{props.navItemTwo.text}</NavLink>
            </li> : null}
            {props.navItemThree.needed ? <li className="nav-item">
              <NavLink className="nav-link text-light" to={path+props.navItemThree.text}>{props.navItemThree.text}</NavLink>
            </li> : null}
            {props.navItemFour.needed ? <li className="nav-item">
              <NavLink className="nav-link text-light" to={path+props.navItemFour.text}>{props.navItemFour.text}</NavLink>
            </li> : null}
            {props.navItemFive.needed ? <li className="nav-item">
              <NavLink className="nav-link text-light" to={path+props.navItemFive.text}>{props.navItemFive.text}</NavLink>
            </li> : null}
            {props.navItemSix.needed ? <li className="nav-item">
              <NavLink className="nav-link text-light" to={path+props.navItemSix.text}>{props.navItemSix.text}</NavLink>
            </li> : null}
            {props.navItemSeven.needed ? <li className="nav-item">
              <NavLink className="nav-link text-light" to={path+props.navItemSeven.text}>{props.navItemSeven.text}</NavLink>
            </li> : null}
            {props.navItemEight.needed ? <li className="nav-item">
              <NavLink className="nav-link text-light" to={path+props.navItemEight.text}>{props.navItemEight.text}</NavLink>
            </li> : null}
            
          {props.dropDown.needed ? <li className="nav-item dropdown mt-1">
          <a className="nav-link dropdown-toggle" href="/lng" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.dropDown.title}
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/1">{props.dropDown.item1Text}</a></li>
            <li><a className="dropdown-item" href="/2">{props.dropDown.item2Text}</a></li>
            <li><a className="dropdown-item" href="/3">{props.dropDown.item3Text}</a></li>
            <li><a className="dropdown-item" href="4">{props.dropDown.item4Text}</a></li>
            <li><a className="dropdown-item" href="4">{props.dropDown.item5Text}</a></li>
          </ul>
        </li>: null}
        </ul>

          {props.searchBarNeeded ? <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-info" type="submit">Search</button>
          </form> : null}
        </div>
      </div>
    </nav>
    </>
  )
}
NavBar.defaultProps={
  title: "navTitle"
}
NavBar.propTypes={
  title:PropTypes.string
}