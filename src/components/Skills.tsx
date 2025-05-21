
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, FileCode, Settings, BookCheck } from "lucide-react";

const Skills = () => {
  const programmingSkills = [
    { name: "HTML", level: "Intermediate" },
    { name: "CSS", level: "Intermediate" },
    { name: "Java", level: "Beginner" },
    { name: "Python", level: "Beginner" },
  ];

  const tools = [
    "VS Code",
    "Canva",
    "MS Office",
  ];

  const softSkills = [
    "Team Work",
    "Adaptability",
    "Time Management",
  ];

  const languages = [
    "English",
    "Tamil",
  ];

  return (
    <section id="skills" className="section-container bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Code className="text-primary" size={20} />
                Programming
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {programmingSkills.map((skill) => (
                  <div key={skill.name} className="w-full mb-3">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-full bg-primary rounded-full" 
                        style={{ 
                          width: skill.level === "Beginner" ? "40%" : 
                                 skill.level === "Intermediate" ? "70%" : "90%" 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <FileCode className="text-primary" size={20} />
                Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Badge key={tool} variant="secondary" className="text-sm">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Settings className="text-primary" size={20} />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <BookCheck className="text-primary" size={20} />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {languages.map((language) => (
                  <Badge key={language} variant="secondary" className="text-sm">
                    {language}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
