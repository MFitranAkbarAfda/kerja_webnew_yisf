export default function Navbar() {
    return(
        <>
            <div>
                <nav className="navbar main-nav navbar-expand-lg px-2 px-sm-0 py-2 py-lg-0">
                    <div className="container">

                        <a className="navbar-brand" href="/">
                            <img src="images/logo/YISF.png" className="img-fluid" alt="logo" />
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="ti-menu"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home</a>
                                </li>

                                <li className="nav-item dropdown @@gallery">
                                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Gallery
                                    <span>
                                        <i className="ti-angle-down"></i>
                                    </span>
                                    </a>
                                    {/* <!-- Dropdown list --> */}
                                    <ul className="dropdown-menu">

                                        <li className="dropdown dropdown-submenu dropleft">
                                            <a className="dropdown-item dropdown-toggle" href="#!" id="dropdown0501" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Photo</a>
                            
                                            <ul className="dropdown-menu" aria-labelledby="dropdown0501">
                                                <li>
                                                    <a className="dropdown-item" href="/G2021"> 2021</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/"> 2022</a>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="dropdown dropdown-submenu dropleft">
                                            <a className="dropdown-item dropdown-toggle" href="#!" id="dropdown0501" role="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Video</a>
                            
                                            <ul className="dropdown-menu" aria-labelledby="dropdown0501">
                                                <li>
                                                    <a className="dropdown-item" href="/"> 2021</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="/"> 2022</a>
                                                </li>
                                            </ul>
                                        </li>

                                    </ul>
                                </li>

                                <li className="nav-item dropdown @@pages">
                                    <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Pages
                                        <span>
                                            <i className="ti-angle-down"></i>
                                        </span>
                                    </a>
                                    {/* <!-- Dropdown list --> */}
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="/about">About</a>
                                        </li>
                                        
                                        <li>
                                            <a className="dropdown-item" href="/curation1">Curation</a>
                                        </li>

                                        <li>
                                            <a className="dropdown-item" href="/document_writter">Documents Required</a>
                                        </li>

                                        {/* <li>
                                            <a className="dropdown-item" href="/certificate">Certificate Supervisor</a>
                                        </li> */}
                                    

                                    </ul>
                                </li>

                                <li className="nav-item @@contact">
                                    <a className="nav-link" href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}