import { Mail } from "lucide-react";
import img from "../assets/img_profil.jpg";

const Home = () => {
  return (
    <div
      className="flex flex-col-reverse md:flex-row items-center justify-center md:my-32 my-10"
      id="Home"
    >
      <div className="flex flex-col">
        <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
          Bonjour, <br /> je suis{" "}
          <span className="text-accent">Franchesco</span>, <br />
        </h1>
        <p className="text-md md:text-xl text-center md:text-left mt-4">
          Je suis un développeur fullstack mobile et web <br /> passionné par la
          création d'applications innovantes.
          <br /> Contactez-moi si vous avez besoin de mes services.
        </p>
        <a
          href="mailto:jordanseugue@gmail.com"
          className="btn btn-accent mt-2 md:w-fit"
        >
          <Mail className="w-5 h-5" />
          Contactez-moi
        </a>
      </div>
      <div className="md:ml-30">
        <img
          src={img}
          alt="Hero Image"
          className="w-96 h-96 object-cover border-8 border-accent shadow-lg"
          style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%  " }}
        />
      </div>
    </div>
  );
};
export default Home;
