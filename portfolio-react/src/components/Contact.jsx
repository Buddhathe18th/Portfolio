// src/components/Contact.jsx
function Contact() {
    return (<section id="contact" class="py-5">
        <div class="container">
            <h2 class="mb-4">Contact</h2>
            <p class="mb-4">
                Open to software and cybersecurity opportunities, collaborations, and questions about my work.
            </p>
            <div class="d-flex flex-wrap gap-4 align-items-center">

                <a href="mailto:alexyifanzhu@gmail.com"
                    class="icon text-decoration-none text-body d-flex align-items-center">
                    <i class="bi bi-envelope-fill me-2 fs-3"></i>
                    <span class="contact">Email</span>
                </a>

                <a href="https://github.com/Buddhathe18th" target="_blank" rel="noopener noreferrer"
                    class="icon text-decoration-none text-body d-flex align-items-center">
                    <i class="bi bi-github me-2 fs-3"></i>
                    <span class="contact">GitHub</span>
                </a>

                <a href="https://www.linkedin.com/in/alex-zhu-389058185/" target="_blank" rel="noopener noreferrer"
                    class="icon text-decoration-none text-body d-flex align-items-center">
                    <i class="bi bi-linkedin me-2 fs-3"></i>
                    <span class="contact">LinkedIn</span>
                </a>

            </div>
        </div>
    </section>);
}
export default Contact;