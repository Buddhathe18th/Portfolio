// src/components/Skills.jsx
function Skills() {
    return (<div class="col-lg-5">
        <h2 class="mb-4">Skills</h2>
        <div class="row row-cols-3 g-3">
            {/*Python */}
            <div class="col">
                <div class="d-flex flex-column align-items-center">
                    {/*Light theme icon */}
                    <img src="assets/logos/python-dark.svg" alt="Python"
                        class="mb-1 skill-icon skill-icon-light" style="width:40px; height:auto;" />
                    {/*Dark theme icon */}
                    <img src="assets/logos/python-light.svg" alt="Python"
                        class="mb-1 skill-icon skill-icon-dark" style="width:40px; height:auto;" />
                    <span class="small text-muted">Python</span>
                </div>
            </div>

            {/*Cryptography */}
            <div class="col">
                <div class="d-flex flex-column align-items-center">
                    <span class="skill-icon-container"><i class="bi bi-key-fill mb-1"
                        style="font-size: 2rem;"></i></span>
                    <span class="small text-muted">Cryptography</span>
                </div>
            </div>

            {/*Digital forensics */}
            <div class="col">
                <div class="d-flex flex-column align-items-center">
                    <span class="skill-icon-container"><i class="bi bi-fingerprint mb-1"
                        style="font-size: 2rem;"></i></span>
                    <span class="small text-muted">Digital forensics</span>
                </div>
            </div>

            {/*HTML */}
            <div class="col">
                <div class="d-flex flex-column align-items-center">
                    {/*Light theme icon */}
                    <img src="assets/logos/html-dark.svg" alt="HTML"
                        class="mb-1 skill-icon skill-icon-light" style="width:40px; height:auto;" />
                    {/*Dark theme icon */}
                    <img src="assets/logos/html-light.svg" alt="HTML"
                        class="mb-1 skill-icon skill-icon-dark" style="width:40px; height:auto;" />
                    <span class="small text-muted">HTML</span>
                </div>
            </div>

            {/*CSS */}
            <div class="col">
                <div class="d-flex flex-column align-items-center">
                    {/*Light theme icon */}
                    <img src="assets/logos/css-dark.svg" alt="CSS"
                        class="mb-1 skill-icon skill-icon-light" style="width:40px; height:auto;" />
                    {/*Dark theme icon */}
                    <img src="assets/logos/css-light.svg" alt="CSS"
                        class="mb-1 skill-icon skill-icon-dark" style="width:40px; height:auto;" />
                    <span class="small text-muted">CSS</span>
                </div>
            </div>

            {/*Javascript */}
            <div class="col">
                <div class="d-flex flex-column align-items-center">
                    {/*Light theme icon */}
                    <img src="assets/logos/javascript-dark.svg" alt="JavaScript"
                        class="mb-1 skill-icon skill-icon-light" style="width:40px; height:auto;" />
                    {/*Dark theme icon */}
                    <img src="assets/logos/javascript-light.svg" alt="JavaScript"
                        class="mb-1 skill-icon skill-icon-dark" style="width:40px; height:auto;" />
                    <span class="small text-muted">JavaScript</span>
                </div>
            </div>

            {/*Nextjs */}
            <div class="col">
                <div class="d-flex flex-column align-items-center">
                    {/*Light theme icon */}
                    <img src="assets/logos/nextjs-dark.svg" alt="Next.js"
                        class="mb-1 skill-icon skill-icon-light" style="width:40px; height:auto;" />
                    {/*Dark theme icon */}
                    <img src="assets/logos/nextjs-light.svg" alt="Next.js"
                        class="mb-1 skill-icon skill-icon-dark" style="width:40px; height:auto;" />
                    <span class="small text-muted">Next.js</span>
                </div>
            </div>

            {/*Flask */}
            <div class="col">
                <div class="d-flex flex-column align-items-center">
                    {/*Light theme icon */}
                    <img src="assets/logos/flask-dark.svg" alt="Flask"
                        class="mb-1 skill-icon skill-icon-light" style="width:40px; height:auto;" />
                    {/*Dark theme icon */}
                    <img src="assets/logos/flask-light.svg" alt="Flask"
                        class="mb-1 skill-icon skill-icon-dark" style="width:40px; height:auto;" />
                    <span class="small text-muted">Flask</span>
                </div>
            </div>

            {/*Linux */}
            <div class="col">
                <div class="d-flex flex-column align-items-center">
                    <span class="skill-icon-container"><i class="bi bi-terminal-fill mb-1"
                        style="font-size: 2rem;"></i></span>
                    <span class="small text-muted">Linux security</span>

                </div>
            </div>

            {/*OpenCV */}
            <div class="col">
                <div class="d-flex flex-column align-items-center">
                    {/*Light theme icon */}
                    <img src="assets/logos/opencv-dark.svg" alt="OpenCV"
                        class="mb-1 skill-icon skill-icon-light" style="width:40px; height:auto;" />
                    {/*Dark theme icon */}
                    <img src="assets/logos/opencv-light.svg" alt="OpenCV"
                        class="mb-1 skill-icon skill-icon-dark" style="width:40px; height:auto;" />
                    <span class="small text-muted">OpenCV</span>
                </div>
            </div>

            {/*Network defense */}
            <div class="col">
                <div class="d-flex flex-column align-items-center">
                    <span class="skill-icon-container"><i class="bi bi-shield-lock-fill mb-1"
                        style="font-size: 2rem;"></i></span>
                    <span class="small text-muted">Network defense</span>
                </div>
            </div>

            {/*Bootstrap */}
            <div class="col">
                <div class="d-flex flex-column align-items-center">
                    {/*Light theme icon */}
                    <img src="assets/logos/bootstrap-dark.svg" alt="Bootstrap"
                        class="mb-1 skill-icon skill-icon-light" style="width:40px; height:auto;" />
                    {/*Dark theme icon */}
                    <img src="assets/logos/bootstrap-light.svg" alt="Bootstrap"
                        class="mb-1 skill-icon skill-icon-dark" style="width:40px; height:auto;" />
                    <span class="small text-muted">Bootstrap</span>
                </div>
            </div>
        </div>
    </div>);
}
export default Skills;