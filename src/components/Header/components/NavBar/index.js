import React from "react";
import { Bell } from "react-bootstrap-icons";
import { Grid3x3GapFill } from "react-bootstrap-icons";
import { Gear } from "react-bootstrap-icons";
import avatar from "../../../../assets/avatar.gri.jpeg";
import Logo from '../../../../assets/logo-fucsia-Ada.png'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse  me-5" id="navbarSupportedContent">
                    <img src={Logo} alt=""></img>
                    <ul className="nav justify-content-center mx-5">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="props">Props</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="states">States</a>
                        </li>
                        <div className="btn-group">
                            <button type="button" className="btn btn-light dropdown-toggle text-primary" data-bs-toggle="dropdown" aria-expanded="false">
                                Consignas
                            </button>
                            <ul class="dropdown-menu">
                                <li><a className="dropdown-item" href="/states">States</a></li>
                                <li><a className="dropdown-item" href="/props">Props</a></li>
                            </ul>
                        </div>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/props">
                                <Bell />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/props">
                                <Grid3x3GapFill />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/props">
                                <Gear />
                            </a>
                        </li>
                        <li>
                            <div type='button'>
                                <img src={avatar} alt="user-avatar" width="32" className="rounded-circle ms-1 me-2" />
                                De Lio Griselda
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
