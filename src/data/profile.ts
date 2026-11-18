/** Update this one object when you have a verified email, LinkedIn URL, or CV. */
export const profile = {
  fullName: "Fawsil Ameer Fayaj Ahamad",
  displayName: "Fayaj Ahamad",
  shortName: "Fayaj",
  role: "Network Engineering Undergraduate | Python Developer | Network & Security Automation",
  location: "Sri Lanka",
  university: "NSBM Green University",
  academicYear: "Third-year undergraduate",
  github: "https://github.com/fayajahamad",
  linkedin: "https://www.linkedin.com/in/fayajahamadameer/", // Listed publicly in your GitHub profile README.
  email: "fayajahamedameer@gmail.com", // Listed publicly in your GitHub profile README; check before deployment.
  cv: "", // Add /documents/cv.pdf only when the real file is in public/documents/.
  introduction:
    "I'm a third-year Network Engineering undergraduate at NSBM Green University, working at the intersection of Python development, network infrastructure, and cybersecurity. I learn by building labs, investigating problems, and documenting the decisions behind them.",
  about: [
    "I am a third-year Network Engineering undergraduate at NSBM Green University, Sri Lanka, with a strong interest in software development, network engineering, cybersecurity, and network automation.",
    "I enjoy exploring how software and networking technologies work together to solve real-world problems. My learning journey involves developing practical applications, configuring network environments, experimenting with security technologies, and continuously improving my programming skills.",
    "I have worked on practical projects involving Python-based network monitoring, password strength analysis, VoIP infrastructure using Asterisk, and firewall and network security configurations using pfSense.",
    "I believe in learning through building. Rather than limiting myself to theoretical knowledge, I focus on hands-on projects, technical experimentation, problem-solving, and documenting what I develop.",
    "My current goal is to strengthen my software engineering and infrastructure skills while seeking opportunities to contribute to real-world engineering teams through an internship.",
  ] as readonly string[],
} as const;
