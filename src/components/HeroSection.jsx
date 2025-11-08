import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      <div className="container max-w-3xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="block opacity-0 animate-fade-in">
              👋 Hey, I’m
            </span>
            <span className="block text-primary opacity-0 animate-fade-in-delay-1">
              Mahmoud&nbsp;Ammar
            </span>
            <span className="block text-gradient opacity-0 animate-fade-in-delay-2">
              Front-End Developer&nbsp;(React.js)
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I design and build interactive, high-performing web interfaces using React,
            Tailwind, and modern JavaScript frameworks. Passionate about creating clean,
            maintainable code and pixel-perfect UI experiences.
          </p>

          <div className="pt-6 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="cosmic-button px-6 py-3 rounded-2xl font-semibold shadow-md transition-all hover:scale-105 hover:shadow-lg"
            >
              🚀 View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2 tracking-wide uppercase">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>

      {/* Optional subtle background effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-background opacity-40" />
    </section>
  );
};
