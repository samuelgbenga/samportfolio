import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = [
  "Java",
  "Spring Framework",
  "Spring Boot",
  "Spring MVC",
  "C#",
  ".NET",
  "ASP.NET",
  "CI/CD Pipelining",
  "AWS Services",
  "MySql",
  "TypeScript",
  "JavaScript",
  "Python",
  "FastApi",
  "C++",
  "SQL",
  "HTML",
  "CSS",
  "TailwindCSS",
  "NextJS",
  "ReactJS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "Docker",
  "Linux",
  "Windows",
  "MacOS",
];

export const Skills = () => {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((s, i) => (
            <Badge key={i} variant="secondary">
              {s}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
