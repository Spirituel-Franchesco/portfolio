import { Container } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-center md:justify-between items-center p-4">
      <a href="#" className="flex items-center font-bold text-3xl md:text-5xl">
        <Container className="mr-2" />
        Franchesco's<span className="text-sm text-accent">Portfolio</span>
      </a>
      <ul className="hidden md:flex items-center space-x-8 text-lg font-medium">
        <li>
          <a href="#Home" className="btn btn-sm btn-ghost">
            Accueil
          </a>
        </li>
        <li>
          <a href="#About" className="btn btn-sm btn-ghost">
            À propos
          </a>
        </li>
        <li>
          <a href="#Experiences" className="btn btn-sm btn-ghost">
            Mes expériences
          </a>
        </li>
        <li>
          <a href="#Projects" className="btn btn-sm btn-ghost">
            Mes projets
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
