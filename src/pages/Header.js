import React, { Component } from "react";
import { dataBase } from "../dataBase";
import { Outlet, Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'

class Header extends Component {
    render() {
        if(!dataBase) return null;

        const logo = dataBase.main.logo;

        return (
            <div>
                <nav className="py-10 px-7">
                    <ul className="flex justify-between gap-2">
                        <li>
                            <Link to="/"><img src= {logo} alt="404"/></Link>
                        </li>
                        <div className="flex justify-between gap-10 items-center font-semibold text-2xl text-white font-dosis">
                            <li>
                                <NavLink to="/About" activeClassName="active">About</NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/Product" activeClassName="active">Product</NavLink>
                            </li> */}
                            <li>
                                <NavLink to="/Service" activeClassName="active">Service</NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/Product">
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Profile">
                                    <FontAwesomeIcon icon={faUser} />
                                </NavLink>
                            </li> */}
                        </div>
                    </ul>
                </nav>
                <Outlet />
            </div>
        );
    }
}

export default Header;