import React from "react";


function Navbar() {
    return (

        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <span class="navbar-brand">Book Search</span>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Search</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/saved">Saved</a>
                        </li>
                    </ul>
            </nav>
        </div>
    );
}

export default Navbar;
