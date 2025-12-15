// src/components/Projects.jsx
function Projects() {
    return (<section id="projects" class="py-5">
        <div class="container">
            <h2 class="mb-4">Projects</h2>
            <div class="row g-4">
                <div class="col-md-6">
                    <article class="card h-100">
                        <img src="assets/projects/fourierTransforms.png" class="card-img-top"
                            alt="Fourier Transform Visualizer" />
                            <div class="card-body d-flex flex-column">
                                <h3 class="h5 card-title mb-1">Fourier Transform - Interactive Visualization</h3>
                                <p class="text-muted small mb-2">Javascript (Next.js, Tailwind CSS)</p>

                                <p class="card-text mb-2 text-main">FourierTransform is an interactive web app that
                                    visualizes how
                                    signals decompose into their frequency components using Fourier transforms. Users
                                    can experiment with different shapes and drawings and immediately see the
                                    corresponding sinusoidal representation, making an abstract math concept more
                                    intuitive.</p>

                                <ul class="small mb-3 card-text">
                                    <li>Derived the core Fourier transform procedure by working through the math on
                                        paper</li>
                                    <li>Implemented the derived algorithm in code and verified it matched the
                                        theoretical behavior</li>
                                    <li>Debugged discrepancies between the mathematical formulation and the coded
                                        implementation</li>
                                    <li>Designed and implemented an algorithm to merge sinusoidal components into a 2D
                                        circular visualization</li>
                                </ul>

                                <div class="mt-auto">
                                    <a href="https://fouriertransform.vercel.app/" class="btn btn-primary btn-sm me-2"
                                        target="_blank">Live demo</a>
                                    <a href="https://github.com/4oeuhtns/fouriertransform"
                                        class="btn btn-outline-secondary btn-sm" target="_blank">View code</a>
                                </div>
                            </div>
                    </article>
                </div>

                <div class="col-md-6">
                    <article class="card h-100">
                        <img src="assets/projects/spotifyDown.png" class="card-img-top" alt="Offline Music Tool" />
                            <div class="card-body d-flex flex-column">
                                <h3 class="h5 card-title mb-1">SpotifyDown - Offline Music Tool</h3>
                                <p class="text-muted small mb-2">Python (Flask, Spotipy, yt-dlp)</p>
                                <p class="card-text mb-2">SpotifyDown is a tool that lets users download tracks from
                                    Spotify playlists by combining Spotify metadata with audio sourced through YouTube.
                                    It provides a simple local web interface for entering playlist details, then
                                    automates fetching track info and saving the resulting audio files for personal
                                    offline listening.</p>
                                <ul class="small mb-3 card-text">
                                    <li>Sole developer responsible for the overall design, implementation, and setup
                                        instructions</li>
                                    <li>Integrated the Spotify API and YouTube download pipeline to resolve tracks and
                                        retrieve audio automatically</li>
                                    <li>Implemented the Python backend and local web interface, including virtual
                                        environment setup, dependency management, and run scripts</li>
                                </ul>
                                <div class="mt-auto">
                                    <a href="https://github.com/Buddhathe18th/SpotifyDown"
                                        class="btn btn-primary btn-sm me-2" target="_blank">Live demo</a>
                                    <a href="https://github.com/Buddhathe18th/SpotifyDown"
                                        class="btn btn-outline-secondary btn-sm" target="_blank">View code</a>
                                </div>
                            </div>
                    </article>
                </div>

                <div class="col-md-6">
                    <article class="card h-100">
                        <img src="assets/projects/nonogramBlast.png" class="card-img-top" alt="Logic Puzzle Solver" />
                            <div class="card-body d-flex flex-column">
                                <h3 class="h5 card-title mb-1">Nonogram Blast - Logic Puzzle Solver</h3>
                                <p class="text-muted small mb-2">Python (OpenCV, Tesseract OCR, Pillow, Pygame)</p>
                                <p class="card-text mb-2">NonogramBlast is a Python-based tool that takes nonogram
                                    puzzles and automatically computes valid solutions using logical deduction. It has
                                    multiple modes, including ones where screenshots of the puzzle could be uploaded to
                                    be automatically solved.</p>
                                <ul class="small mb-3 card-text">
                                    <li>Sole developer responsible for the design, implementation, and testing of the
                                        solver</li>
                                    <li>Designed and implemented a custom nonogram solving algorithm in Python, using
                                        NumPy to represent grids and apply step-by-step deduction</li>
                                    <li>Integrated OpenCV, Pillow, and Tesseract OCR to read puzzle grids from images
                                        and convert them into usable constraints</li>
                                    <li>Built the visualization and interaction layer with Pygame to display puzzles and
                                        solutions clearly</li>
                                </ul>
                                <div class="mt-auto">
                                    <a href="https://github.com/Buddhathe18th/NonogramBlast"
                                        class="btn btn-primary btn-sm me-2" target="_blank">Live demo</a>
                                    <a href="https://github.com/Buddhathe18th/NonogramBlast"
                                        class="btn btn-outline-secondary btn-sm" target="_blank">View code</a>
                                </div>
                            </div>
                    </article>
                </div>

                <div class="col-md-6">
                    <article class="card h-100">
                        <img src="assets/projects/focusfy.png" class="card-img-top" alt="Productivity Web App" />
                            <div class="card-body d-flex flex-column">
                                <h3 class="h5 card-title mb-1">Focusfy - Productivity Web App</h3>
                                <p class="text-muted small mb-2">HTML, CSS, JavaScript</p>
                                <p class="card-text mb-2">Focusfy is a browser-based productivity app that helps users
                                    plan and run focused work sessions using a simple, distraction-free interface. It
                                    provides a centralized to-do list, a schedule, and a customizable focus timer with
                                    work and break intervals.</p>
                                <ul class="small mb-3 card-text">
                                    <li>Implemented interactive UI behaviors including hover states and click animations
                                        for key controls</li>
                                    <li>Developed responsive layout and CSS for a resizable main window and tabbed
                                        interface</li>
                                    <li>Built the core timer logic in JavaScript to handle starting, pausing, and
                                        resetting focus sessions</li>
                                    <li>Implemented the to-do list using HTML and JavaScript, including adding,
                                        updating, and removing tasks</li>
                                </ul>
                                <div class="mt-auto">
                                    <a href="https://focusfy.vercel.app/" class="btn btn-primary btn-sm me-2"
                                        target="_blank">Live demo</a>
                                    <a href="https://github.com/Buddhathe18th/Focusfy"
                                        class="btn btn-outline-secondary btn-sm" target="_blank">View code</a>
                                </div>
                            </div>
                    </article>
                </div>

            </div>
        </div>
    </section>);
}
export default Projects;