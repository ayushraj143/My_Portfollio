import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3>Hello, I'm</h3>
        <h1>Ayush Raj</h1>

       <TypeAnimation
  sequence={[
    "Full Stack Developer",
    2000,
    "React Developer",
    2000,
    "Java Developer",
    2000,
    "Cloud Enthusiast",
    2000,
  ]}
  speed={50}
  repeat={Infinity}
  className="typing"
/>

        <p>
          Passionate developer focused on building modern,
          scalable and user-friendly web applications.
        </p>

        <div className="hero-buttons">
         <a href="/resume.pdf" download>
  <button>Download Resume</button>
</a>
        </div>

        <div className="social-icons">
         <a
  href="https://github.com/ayushraj143"
  target="_blank"
  rel="noreferrer"
>
  <FaGithub />
</a>

         <a
  href="https://www.linkedin.com/in/ayush-raj-3a7723305"
  target="_blank"
  rel="noreferrer"
>
  <FaLinkedin />
</a>
        </div>
      </motion.div>

     <div className="hero-image-container">
 <motion.img
  src={profile}
  alt="Profile"
  onClick={speakAboutMe}
  style={{ cursor: "pointer" }}
/>

  <div className="speech-bubble">
    👋 Hi, I'm Ayush Raj <br />
    💻 Full Stack Developer <br />
    ☁️ AWS Learner <br />
    🚀 Building Modern Web Apps
  </div>
</div>
    </section>
  );
}

export default Hero;
const speakAboutMe = () => {
  const text = `
    Hi, I am Ayush Raj.
    I am a Computer Science student and Full Stack Developer.
    I am passionate about Web Development, Cloud Computing, and AWS.
    I enjoy building modern and scalable web applications.
  `;

  const speech = new SpeechSynthesisUtterance(text);
  speech.rate = 1;
  speech.pitch = 1;
  speech.volume = 1;

  window.speechSynthesis.speak(speech);
};