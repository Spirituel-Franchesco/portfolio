import { Container } from "lucide-react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { HiDocument } from "react-icons/hi2";

const footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center p-10">
      <aside>
        <Container className="w-10 h-10" />

        <p className="font-bold">
          Franchesco's<span className="text-sm text-accent"> Portfolio</span>
        </p>
        <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/Spirituel-Franchesco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 text-current" />
          </a>
          <a
            href="https://www.youtube.com/@JordanSeugue"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="w-6 h-6 text-current" />
          </a>
          <a
            href="https://www.linkedin.com/in/franchesco-seugue/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6 text-current" />
          </a>
          <a
            href="/CV_Franchesco_Jordan_A26.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
            title="Voir mon CV"
          >
            <HiDocument size={20} />
          </a>
        </div>
      </nav>
    </footer>
  );
};
export default footer;
