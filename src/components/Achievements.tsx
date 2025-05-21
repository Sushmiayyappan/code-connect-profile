
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BadgeCheck, Star, Book } from "lucide-react";

const AchievementCard = ({ 
  icon: Icon, 
  title, 
  description, 
  colorClass = "text-amber-500" 
}: { 
  icon: any, 
  title: string, 
  description: string, 
  colorClass?: string 
}) => (
  <Card className="card-hover">
    <CardHeader className="pb-2">
      <CardTitle className="flex items-center gap-2 text-xl">
        <Icon className={colorClass} size={24} />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const Achievements = () => {
  const achievements = [
    {
      icon: Star,
      title: "TCS NQT",
      description: "Scored 73% in the Tata Consultancy Services National Qualifier Test",
      colorClass: "text-blue-500"
    },
    {
      icon: Award,
      title: "NPTEL Elite Gold",
      description: "Secured 91% in NPTEL courses and earned the Elite Gold badge",
      colorClass: "text-amber-500"
    },
    {
      icon: BadgeCheck,
      title: "Naandi Foundation",
      description: "Winner of shield and certificate from Naandi Foundation employability program",
      colorClass: "text-green-500"
    },
    {
      icon: Book,
      title: "AI Guinness Record",
      description: "Earned the AI Guinness Record badge for exceptional performance",
      colorClass: "text-purple-500"
    }
  ];

  return (
    <section id="achievements" className="section-container">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard 
              key={index}
              icon={achievement.icon}
              title={achievement.title}
              description={achievement.description}
              colorClass={achievement.colorClass}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-center mb-6">Education</h3>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-lg">B.E. Electronics and Communication Engineering</h4>
                  <p className="text-primary font-medium">SNS College of Engineering, Coimbatore</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">2022-2026</p>
                  <p className="font-bold text-primary">CGPA: 8.70</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-lg">Higher Secondary</h4>
                  <p className="text-primary font-medium">Beula Matriculation Higher Secondary School, Valparai</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">2022</p>
                  <p className="font-bold text-primary">87.0%</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-lg">Secondary</h4>
                  <p className="text-primary font-medium">Beula Matriculation Higher Secondary School, Valparai</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600">2020</p>
                  <p className="font-bold text-primary">87.2%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
