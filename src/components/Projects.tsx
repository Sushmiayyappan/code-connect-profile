
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Code, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "Developed a responsive e-commerce platform with product catalog, shopping cart, and payment integration using React.js and Node.js.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      links: {
        github: "https://github.com/sushmitha-a/ecommerce",
        demo: "https://ecommerce-demo.example.com"
      }
    },
    {
      title: "AI Image Recognition App",
      description: "Created an image recognition application that identifies objects using machine learning algorithms and provides detailed information about detected items.",
      tags: ["Python", "TensorFlow", "Flask", "React"],
      links: {
        github: "https://github.com/sushmitha-a/ai-image-recognition",
        demo: "https://ai-image.example.com"
      }
    },
    {
      title: "Smart Home IoT Dashboard",
      description: "Built a dashboard for monitoring and controlling IoT devices in a smart home environment, with real-time data visualization.",
      tags: ["IoT", "Arduino", "React", "MQTT"],
      links: {
        github: "https://github.com/sushmitha-a/smart-home-dashboard",
        demo: "https://smart-home.example.com" 
      }
    },
    {
      title: "Personal Finance Tracker",
      description: "Developed a personal finance application that helps users track expenses, set budgets, and visualize spending patterns with interactive charts.",
      tags: ["JavaScript", "Chart.js", "Firebase", "Bootstrap"],
      links: {
        github: "https://github.com/sushmitha-a/finance-tracker",
        demo: "https://finance-tracker.example.com"
      }
    }
  ];

  return (
    <section id="projects" className="bg-gray-50 py-16">
      <div className="section-container">
        <h2 className="section-title text-center mb-12">Projects</h2>
        
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" asChild>
                      <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a 
                        href={project.links.demo} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        <Monitor size={16} />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile carousel view */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index}>
                  <Card className="card-hover h-full flex flex-col">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <CardDescription className="text-base mb-4 flex-grow">
                        {project.description}
                      </CardDescription>
                      <div className="flex gap-3">
                        <Button size="sm" variant="outline" asChild>
                          <a 
                            href={project.links.github} 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center gap-2"
                          >
                            <Github size={16} />
                            Code
                          </a>
                        </Button>
                        <Button size="sm" asChild>
                          <a 
                            href={project.links.demo} 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center gap-2"
                          >
                            <Monitor size={16} />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="relative static transform-none mr-2" />
              <CarouselNext className="relative static transform-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
