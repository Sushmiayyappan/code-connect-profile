
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
      title: "Automatic Protection and Control of DC Microgrids",
      description: "Implemented automated protection systems for DC microgrids to efficiently reduce faults in motors and machines. Designed circuits and control algorithms to detect and mitigate electrical issues before they cause damage.",
      tags: ["Circuit Design", "Control Systems", "Fault Detection", "DC Microgrids"],
      links: {
        github: "https://github.com/yourusername/dc-microgrid-protection",
        demo: "#"
      }
    },
    {
      title: "Smart Door Lock System",
      description: "Developed a Python-based home security system featuring facial recognition using the Haar Cascade classifier. The system provides secure access control through biometric verification, enhancing home security.",
      tags: ["Python", "OpenCV", "Facial Recognition", "Security Systems", "Haar Cascade"],
      links: {
        github: "https://github.com/yourusername/smart-door-lock",
        demo: "#"
      }
    },
    {
      title: "Elevator Fault Surveillance and Management System",
      description: "Created a comprehensive monitoring system for elevator faults using STM32 microcontroller integrated with vibration, pressure, and acceleration sensors. The system detects abnormalities and prevents potential failures.",
      tags: ["STM32", "Embedded Systems", "Sensors", "IoT", "Fault Detection"],
      links: {
        github: "https://github.com/yourusername/elevator-monitoring",
        demo: "#"
      }
    },
    {
      title: "Arduino-based Bridge Flood Safety System",
      description: "Engineered a safety system using Arduino and water-level sensors to monitor rising water levels at bridges. The system provides real-time alerts and automatically restricts pedestrian and vehicle crossing during flood conditions.",
      tags: ["Arduino", "Sensors", "Safety Systems", "Embedded Systems", "IoT"],
      links: {
        github: "https://github.com/yourusername/bridge-flood-safety",
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
