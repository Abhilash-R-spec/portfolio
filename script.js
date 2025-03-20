document.addEventListener("DOMContentLoaded", () => {
    // Scroll Animation for Sections
    const sections = document.querySelectorAll("section");

    function revealOnScroll() {
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight - 100) {
                section.classList.add("reveal");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger animation on page load

    // Dynamic Certifications
    const certifications = [
        { name: "AWS Certified", icon: "fas fa-cloud" },
        { name: "Google Cloud Certified", icon: "fab fa-google" },
        { name: "Microsoft Azure", icon: "fab fa-microsoft" },
        { name: "Flutter Expert", icon: "fab fa-android" },
        { name: "Python AI/ML", icon: "fab fa-python" },
        { name: "Full-Stack Developer", icon: "fas fa-laptop-code" }
    ];

    const certContainer = document.getElementById("certifications-list");

    certifications.forEach(cert => {
        let certDiv = document.createElement("div");
        certDiv.classList.add("skill");
        certDiv.innerHTML = `<i class="${cert.icon}" style="font-size: 40px;"></i> ${cert.name}`;
        certContainer.appendChild(certDiv);
    });
});
