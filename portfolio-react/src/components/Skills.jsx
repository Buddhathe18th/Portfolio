// src/components/Skills.jsx
function Skills() {
    return (
        <div className="col-lg-5">
            <h2 className="mb-4">Skills</h2>
            <div className="row row-cols-3 g-3">
                {/* Python */}
                <div className="col">
                    <div className="d-flex flex-column align-items-center">
                        {/* Light theme icon */}
                        <img
                            src="assets/logos/python-dark.svg"
                            alt="Python"
                            className="mb-1 skill-icon skill-icon-light"
                            style={{ width: '40px', height: 'auto' }}
                        />
                        {/* Dark theme icon */}
                        <img
                            src="assets/logos/python-light.svg"
                            alt="Python"
                            className="mb-1 skill-icon skill-icon-dark"
                            style={{ width: '40px', height: 'auto' }}
                        />
                        <span className="small text-muted">Python</span>
                    </div>
                </div>

                {/* Cryptography */}
                <div className="col">
                    <div className="d-flex flex-column align-items-center">
                        <span className="skill-icon-container">
                            <i
                                className="bi bi-key-fill mb-1"
                                style={{ fontSize: '2rem' }}
                            ></i>
                        </span>
                        <span className="small text-muted">Cryptography</span>
                    </div>
                </div>

                {/* Digital forensics */}
                <div className="col">
                    <div className="d-flex flex-column align-items-center">
                        <span className="skill-icon-container">
                            <i
                                className="bi bi-fingerprint mb-1"
                                style={{ fontSize: '2rem' }}
                            ></i>
                        </span>
                        <span className="small text-muted">Digital forensics</span>
                    </div>
                </div>

                {/* HTML */}
                <div className="col">
                    <div className="d-flex flex-column align-items-center">
                        <img
                            src="assets/logos/html-dark.svg"
                            alt="HTML"
                            className="mb-1 skill-icon skill-icon-light"
                            style={{ width: '40px', height: 'auto' }}
                        />
                        <img
                            src="assets/logos/html-light.svg"
                            alt="HTML"
                            className="mb-1 skill-icon skill-icon-dark"
                            style={{ width: '40px', height: 'auto' }}
                        />
                        <span className="small text-muted">HTML</span>
                    </div>
                </div>

                {/* CSS */}
                <div className="col">
                    <div className="d-flex flex-column align-items-center">
                        <img
                            src="assets/logos/css-dark.svg"
                            alt="CSS"
                            className="mb-1 skill-icon skill-icon-light"
                            style={{ width: '40px', height: 'auto' }}
                        />
                        <img
                            src="assets/logos/css-light.svg"
                            alt="CSS"
                            className="mb-1 skill-icon skill-icon-dark"
                            style={{ width: '40px', height: 'auto' }}
                        />
                        <span className="small text-muted">CSS</span>
                    </div>
                </div>

                {/* JavaScript */}
                <div className="col">
                    <div className="d-flex flex-column align-items-center">
                        <img
                            src="assets/logos/javascript-dark.svg"
                            alt="JavaScript"
                            className="mb-1 skill-icon skill-icon-light"
                            style={{ width: '40px', height: 'auto' }}
                        />
                        <img
                            src="assets/logos/javascript-light.svg"
                            alt="JavaScript"
                            className="mb-1 skill-icon skill-icon-dark"
                            style={{ width: '40px', height: 'auto' }}
                        />
                        <span className="small text-muted">JavaScript</span>
                    </div>
                </div>

                {/* Next.js */}
                <div className="col">
                    <div className="d-flex flex-column align-items-center">
                        <img
                            src="assets/logos/nextjs-dark.svg"
                            alt="Next.js"
                            className="mb-1 skill-icon skill-icon-light"
                            style={{ width: '40px', height: 'auto' }}
                        />
                        <img
                            src="assets/logos/nextjs-light.svg"
                            alt="Next.js"
                            className="mb-1 skill-icon skill-icon-dark"
                            style={{ width: '40px', height: 'auto' }}
                        />
                        <span className="small text-muted">Next.js</span>
                    </div>
                </div>

                {/* Flask */}
                <div className="col">
                    <div className="d-flex flex-column align-items-center">
                        <img
                            src="assets/logos/flask-dark.svg"
                            alt="Flask"
                            className="mb-1 skill-icon skill-icon-light"
                            style={{ width: '40px', height: 'auto' }}
                        />
                        <img
                            src="assets/logos/flask-light.svg"
                            alt="Flask"
                            className="mb-1 skill-icon skill-icon-dark"
                            style={{ width: '40px', height: 'auto' }}
                        />
                        <span className="small text-muted">Flask</span>
                    </div>
                </div>

                {/* Linux */}
                <div className="col">
                    <div className="d-flex flex-column align-items-center">
                        <span className="skill-icon-container">
                            <i
                                className="bi bi-terminal-fill mb-1"
                                style={{ fontSize: '2rem' }}
                            ></i>
                        </span>
                        <span className="small text-muted">Linux security</span>
                    </div>
                </div>

                {/* OpenCV */}
                <div className="col">
                    <div className="d-flex flex-column align-items-center">
                        <img
                            src="assets/logos/opencv-dark.svg"
                            alt="OpenCV"
                            className="mb-1 skill-icon skill-icon-light"
                            style={{ width: '40px', height: 'auto' }}
                        />
                        <img
                            src="assets/logos/opencv-light.svg"
                            alt="OpenCV"
                            className="mb-1 skill-icon skill-icon-dark"
                            style={{ width: '40px', height: 'auto' }}
                        />
                        <span className="small text-muted">OpenCV</span>
                    </div>
                </div>

                {/* Network defense */}
                <div className="col">
                    <div className="d-flex flex-column align-items-center">
                        <span className="skill-icon-container">
                            <i
                                className="bi bi-shield-lock-fill mb-1"
                                style={{ fontSize: '2rem' }}
                            ></i>
                        </span>
                        <span className="small text-muted">Network defense</span>
                    </div>
                </div>

                {/* Bootstrap */}
                <div className="col">
                    <div className="d-flex flex-column align-items-center">
                        <img
                            src="assets/logos/bootstrap-dark.svg"
                            alt="Bootstrap"
                            className="mb-1 skill-icon skill-icon-light"
                            style={{ width: '40px', height: 'auto' }}
                        />
                        <img
                            src="./assets/logos/bootstrap-light.svg"
                            alt="Bootstrap"
                            className="mb-1 skill-icon skill-icon-dark"
                            style={{ width: '40px', height: 'auto' }}
                        />
                        <span className="small text-muted">Bootstrap</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
