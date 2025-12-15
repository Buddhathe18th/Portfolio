// src/components/Navbar.jsx
function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand nav-bar-item" href="#hero">Alex Zhu</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar"
                    aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="mainNavbar">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#awards">Awards</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#projects">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                        <button id="theme-toggle" class="icon btn btn-sm ms-3" type="button">
                            <i class="bi bi-moon" id="theme-icon"></i>
                        </button>

                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
