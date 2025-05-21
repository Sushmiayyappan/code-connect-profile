
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Monitor } from "lucide-react";
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
      title: "Weather App",
      description: "Developed a responsive weather application that provides current and forecasted weather conditions based on user location or search. Implemented geolocation and weather API integration.",
      tags: ["HTML", "CSS", "JavaScript", "API Integration"],
      links: {
        github: "https://github.com/yourusername/weather-app",
        demo: "https://weather-app-demo.example.com"
      }
    },
    {
      title: "Task Management System",
      description: "Created a task management application allowing users to create, organize, and track tasks with priority levels and deadlines. Implemented user authentication and data persistence.",
      tags: ["React", "CSS", "LocalStorage", "User Authentication"],
      links: {
        github: "https://github.com/yourusername/task-manager",
        demo: "https://task-manager-demo.example.com"
      }
    },
    {
      title: "Portfolio Website",
      description: "Designed and developed a responsive personal portfolio website to showcase projects, skills, and achievements. Implemented modern UI/UX principles and optimized for performance.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      links: {
        github: "https://github.com/yourusername/portfolio",
        demo: "https://yourusername.github.io/portfolio"
      }
    },
    {
      title: "Student Management System",
      description: "Built a comprehensive system for managing student information, course registrations, and academic performance tracking. Implemented database integration and reporting features.",
      tags: ["Java", "MySQL", "GUI Development", "JDBC"],
      links: {
        github: "https://github.com/yourusername/student-management",
        demo: "#"
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
                    {project.links.demo !== "#" && (
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
                    )}
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
                        {project.links.demo !== "#" && (
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
                        )}
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
