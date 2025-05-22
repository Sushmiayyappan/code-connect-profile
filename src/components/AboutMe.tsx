
import { GraduationCap, Code, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const AboutMe = () => {
  return (
    <section id="about" className="pt-24 pb-16 bg-gradient-to-b from-accent to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl">
              <Avatar className="w-full h-full">
                <AvatarImage src="/lovable-uploads/98c77dd6-2770-4405-bf97-e0a3f53d90d7.png" alt="Sushmitha A" className="w-full h-full object-cover" />
                <AvatarFallback className="text-6xl font-bold">S</AvatarFallback>
              </Avatar>
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="gradient-heading">Sushmitha A</span>
            </h1>
            <h2 className="text-xl text-gray-700 mb-6">
              Electronics & Communication Engineering Student
            </h2>
            
            <p className="text-gray-600 mb-6">
              I'm currently pursuing my B.E. in Electronics and Communication Engineering at SNS College of Engineering, Coimbatore. 
              With a passion for technology and continuous learning, I'm focused on developing my skills in software development and AI.
              My academic journey has equipped me with strong technical fundamentals and problem-solving skills,
              which I've enhanced through internships and project work.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-700">
                <GraduationCap className="text-primary" />
                <span>B.E. ECE (2022-2026)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Code className="text-primary" />
                <span>Software Development</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <BookOpen className="text-primary" />
                <span>Continuous Learner</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#achievements">View Achievements</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
