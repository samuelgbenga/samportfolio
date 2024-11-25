import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";

export const AboutMe = () => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          {/* Write 1-2 sentences about yourself */}
          I&apos;m a software engineer, weaving lines of code into scalable web
          magic. My passion? Building efficient apps that never crash—unless, of
          course, you&apos;re testing my patience with Internet Explorer 😉.
        </p>
      </CardContent>
    </Card>
  );
};
