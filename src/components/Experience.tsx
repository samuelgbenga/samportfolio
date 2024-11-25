import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
  {
    role: "Software Engineer", // TODO: Replace with actual role
    company: "Decagon", // TODO: Replace with actual company name
    logo: "/decagonLogo.svg", // TODO: Replace with actual logo
    duration: "2024 - Present",
    description:
      "As a Software Engineer at Decagon, I design, develop, and deliver high-quality software solutions while collaborating with cross-functional teams to drive innovation and excellence.",
    link: "https://decagonhq.com",
    images: [ "/qlockin1.png", "/qlockin2.png"],
  },
  {
    role: "Web Designer / Web Design Instructor", // TODO: Replace with actual role
    company: "Creating Great Standard Hub.", // TODO: Replace with actual company name
    logo: "/cgshub.svg", // TODO: Replace with actual logo
    duration: "2020 - 2023",
    description:
      "Developed and maintained the organization's website while mentoring students in software development fundamentals, inspiring them to pursue tech careers and explore the evolving industry.",
    link: "https://websolutions.com",
    images: [],
  },
  // {
  //     role: "Senior Full-Stack Developer", // TODO: Replace with actual role
  //     company: "Tech Innovators Inc.", // TODO: Replace with actual company name
  //     logo: "/company.svg", // TODO: Replace with actual logo
  //     duration: "2016 - 2018",
  //     description:
  //         "Assisted in the development of web applications, gained experience in agile methodologies and version control.",
  //     link: "https://startupventures.com",
  //     images: [
  //         "/devvault.png",
  //         "/devvault.png",
  //     ],
  // },
];

export const Experience = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-8">
            {jobs.map((j, i) => (
              <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                {/* Job Details */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={j.logo}
                    alt={j.company}
                    width={40}
                    height={40}
                    className="rounded-md border shadow-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{j.role}</h3>
                    <p className="text-sm text-muted-foreground">{j.company}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                  <CalendarDays className="size-3 mr-2" />
                  {j.duration}
                </p>
                <p className="text-sm mt-2">{j.description}</p>
                {/* Job Images */}
                <JobImages
                  role={j.role}
                  link={j.link}
                  images={j.images}
                  duration={j.duration}
                />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
