// src/components/Hero.jsx
function Hero() {
    return (<section id="hero" className="py-5">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8">
                    <h1 className="display-4 fw-bold mb-3">Alex Zhu</h1>
                    <h2 className="h4 text-muted mb-3">
                        Cybersecurity &amp; Software Enthusiast<br />
                            Engineering Science @ University of Toronto
                    </h2>

                    <a href="#projects" className="btn btn-primary btn-lg">View projects</a>
                </div>
            </div>
        </div>
    </section>);
}
export default Hero;