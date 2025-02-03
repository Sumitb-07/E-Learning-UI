import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Play, Clock, BookOpen, Home } from "lucide-react";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Course data based on ID
  const courses = {
    "1": {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Learn the basics of HTML, CSS, and JavaScript with practical examples and hands-on projects.",
      progress: 75,
      duration: "8 hours",
      lessons: 12,
      introVideo: "https://www.youtube.com/embed/ysEN5RaKOlA", // Intro to Web Development
      videos: [
        {
          id: 1,
          title: "Introduction to HTML",
          duration: "15:30",
          completed: true,
          thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        },
        {
          id: 2,
          title: "CSS Basics",
          duration: "20:45",
          completed: true,
          thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
        },
        {
          id: 3,
          title: "JavaScript Fundamentals",
          duration: "25:15",
          completed: false,
          thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        },
      ],
    },
    "2": {
      id: 2,
      title: "React for Beginners",
      description: "Master React.js fundamentals and hooks with practical examples.",
      progress: 45,
      duration: "10 hours",
      lessons: 15,
      introVideo: "https://www.youtube.com/embed/Tn6-PIqc4UM", // React in 100 Seconds
      videos: [
        {
          id: 1,
          title: "React Fundamentals",
          duration: "18:30",
          completed: true,
          thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
        },
        {
          id: 2,
          title: "React Hooks",
          duration: "22:15",
          completed: false,
          thumbnail: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2",
        },
        {
          id: 3,
          title: "State Management",
          duration: "20:45",
          completed: false,
          thumbnail: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2",
        },
      ],
    },
    "3": {
      id: 3,
      title: "Advanced JavaScript",
      description: "Deep dive into JavaScript concepts and advanced programming techniques.",
      progress: 30,
      duration: "12 hours",
      lessons: 18,
      introVideo: "https://www.youtube.com/embed/DHjqpvDnNGE", // Advanced JavaScript Concepts
      videos: [
        {
          id: 1,
          title: "Closures & Scope",
          duration: "23:15",
          completed: true,
          thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        },
        {
          id: 2,
          title: "Promises & Async/Await",
          duration: "25:30",
          completed: false,
          thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
        },
        {
          id: 3,
          title: "Object-Oriented JavaScript",
          duration: "28:45",
          completed: false,
          thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a",
        },
      ],
    },
  };

  const courseDetails = courses[id as keyof typeof courses] || courses["1"];

  return (
    <div className="min-h-screen bg-[#FFF5EB]">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="gap-2"
            >
              <Home size={20} />
              Home
            </Button>
          </div>

          <h1 className="text-3xl font-bold mb-4">{courseDetails.title}</h1>
          <p className="text-gray-600 mb-8">{courseDetails.description}</p>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Course Introduction</h2>
            <div className="aspect-video mb-6">
              <iframe
                src={courseDetails.introVideo}
                title="Course Introduction"
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>{courseDetails.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen size={20} />
              <span>{courseDetails.lessons} lessons</span>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span>Course Progress</span>
              <span>{courseDetails.progress}%</span>
            </div>
            <Progress value={courseDetails.progress} className="h-3" />
          </div>

          <h2 className="text-2xl font-bold mb-6">Course Content</h2>
          <div className="space-y-4">
            {courseDetails.videos.map((video) => (
              <Card 
                key={video.id}
                className="p-4 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => navigate(`/video/${courseDetails.id}/${video.id}`)}
              >
                <div className="flex items-center gap-4">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-32 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{video.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{video.duration}</span>
                      {video.completed && (
                        <span className="text-green-500">Completed</span>
                      )}
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Play size={16} />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;