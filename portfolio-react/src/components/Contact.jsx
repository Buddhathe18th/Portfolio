// src/components/Contact.jsx
function Contact() {
    return (<section id="contact" className="py-5">
        <div className="container">
            <h2 className="mb-4">Contact</h2>
            <p className="mb-4">
                Open to software and cybersecurity opportunities, collaborations, and questions about my work.
            </p>
            <div className="d-flex flex-wrap gap-4 align-items-center">

                <a href="mailto:alexyifanzhu@gmail.com"
                    className="icon text-decoration-none text-body d-flex align-items-center">
                    <i className="bi bi-envelope-fill me-2 fs-3"></i>
                    <span className="contact">Email</span>
                </a>

                <a href="https://github.com/Buddhathe18th" target="_blank" rel="noopener noreferrer"
                    className="icon text-decoration-none text-body d-flex align-items-center">
                    <i className="bi bi-github me-2 fs-3"></i>
                    <span className="contact">GitHub</span>
                </a>

                <a href="https://www.linkedin.com/in/alex-zhu-389058185/" target="_blank" rel="noopener noreferrer"
                    className="icon text-decoration-none text-body d-flex align-items-center">
                    <i className="bi bi-linkedin me-2 fs-3"></i>
                    <span className="contact">LinkedIn</span>
                </a>

            </div>
        </div>
    </section>);
}
export default Contact;