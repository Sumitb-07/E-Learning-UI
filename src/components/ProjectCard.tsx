import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}

const ProjectCard = ({ title, description, technologies, imageUrl }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-up">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;