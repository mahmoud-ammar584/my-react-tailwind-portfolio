import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio built with React and TailwindCSS to showcase my work as a React Front-End Developer. Smooth animations, dark/light mode, and a clean design.",
    image: "/projects/portfolio.png",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    demoUrl: "https://mahmouddev.vercel.app",
    githubUrl: "https://github.com/mahmoudammar-dev/portfolio",
  },
  {
    id: 2,
    title: "QR Menu Web App",
    description:
      "A digital menu system for restaurants and cafés where users can scan a QR code to order and pay online. Includes admin analytics dashboard.",
    image: "/projects/qrmenu.png",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://qrmenu.mahmoud.dev",
    githubUrl: "https://github.com/mahmoudammar-dev/qrmenu",
  },
  {
    id: 3,
    title: "E-Commerce Storefront",
    description:
      "A modern online store interface with cart management, authentication, and Stripe payment integration — optimized for speed and UX.",
    image: "/projects/ecommerce.png",
    tags: ["React", "Redux", "Stripe API"],
    demoUrl: "https://ecommerce.mahmoud.dev",
    githubUrl: "https://github.com/mahmoudammar-dev/ecommerce",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects I've built using modern technologies. Each one
          focuses on clean UI, optimized performance, and seamless user
          experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/mahmoudammar-dev"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
