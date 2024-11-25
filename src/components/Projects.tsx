import Link from "next/link";
import { cn } from "@/libs/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
  {
    title: "Qlock-in App",
    description:
      "A web application designed for small to medium-sized businesses, enabling employees to clock in using their biometrics.",
    tech: "Spring Boot",
    link: "https://qlockin-app.onrender.com",
  },
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution built with React and a Headless CMS, featuring Stripe integration for seamless transactions.",
    tech: "React",
    link: "https://samuelgbenga.github.io/e-commerce-store/",
  },
  {
    title: "Task Management App",
    description: "A productivity app built with React Native and Firebase",
    tech: "React Native",
    link: "#",
  },

  {
    title: "Escalayte Web Application",
    description:
      "A machine learning powered chatbot using Python and TensorFlow",
    tech: "Python",
    link: "#",
  },
];

const techColors = {
  React: "bg-blue-500",
  "React Native": "bg-green-500",
  "Vue.js": "bg-purple-500",
  Python: "bg-yellow-500",
};

export const Projects = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {projects.map((p, i) => (
          <Card key={i}>
            <CardContent className="pt-6 h-full">
              <div className="flex flex-col h-full">
                <Link
                  target="_blank"
                  href={p.link}
                  className="font-semibold text-primary hover:underline"
                >
                  {p.title}
                </Link>
                <p className="text-sm text-muted-foreground mt-1 mb-4">
                  {p.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className={cn(
                        "size-4 rounded-full",
                        techColors[p.tech as keyof typeof techColors]
                      )}
                    />
                    <span className="text-xs font-medium text-muted-foreground">
                      {p.tech}
                    </span>
                  </div>
                  <Link
                    target="_blank"
                    href={p.link}
                    className="flex items-center gap-2 text-sm text-primary hover:underline"
                  >
                    View Project
                    <ExternalLink className="inline-block size-3" />
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};