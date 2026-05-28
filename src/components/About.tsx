import Title from "./Title";
import img from "../assets/img_profil.jpg";
import { TabletSmartphone, Paintbrush, EthernetPort } from "lucide-react";

const aboutSections = [
  {
    id: 1,
    title: "Développeur Web",
    description:
      "Je développe des applications web complètes, du frontend au backend, en utilisant React, Tailwind CSS et Firebase.",
    icon: <EthernetPort className="text-accent scale-125" />,
  },
  {
    id: 2,
    title: "Développeur Mobile",
    description:
      "Je développe des applications mobiles performantes et intuitives avec React Native, Android Studio et FlutterFlow.",
    icon: <TabletSmartphone className="text-accent scale-125" />,
  },
  {
    id: 3,
    title: "Passionné par l'UI/UX",
    description:
      "Je conçois des interfaces utilisateur attrayantes et modernes, en mettant l'accent sur l'expérience utilisateur.",
    icon: <Paintbrush className="text-accent scale-125" />,
  },
];

const About = () => {
  return (
    <div className="">
      <div className="bg-base-300 p-10 mb-10 md:mb-32">
        <Title title="À propos" />
        <div className="md:h-screen flex justify-center items-center">
          <div className="hidden md:block">
            <img
              src={img}
              alt="Hero Image"
              className="w-121 object-cover rounded-xl "
            />{" "}
          </div>
          <div>
            <div className="md:ml-4 space-y-4 ">
              {aboutSections.map((section) => (
                <div
                  key={section.id}
                  className="flex flex-col md:flex-row items-center bg-base-100 p-4 rounded-xl shadow-md p-5 md:w-96 shadow-xl"
                >
                  <div className="mb-2 md:mb-0">{section.icon}</div>
                  <div className="md:ml-4 text-center md:text-left">
                    <h2 className="text-xl font-bold mb-1">{section.title}</h2>
                    <p className="text-sm">{section.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
