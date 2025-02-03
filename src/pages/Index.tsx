import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, BookOpen, BarChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      progress: 75,
      description: "Learn the basics of HTML, CSS, and JavaScript",
      duration: "8 hours",
      lessons: 12,
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    },
    {
      id: 2,
      title: "React for Beginners",
      progress: 45,
      description: "Master React.js fundamentals and hooks",
      duration: "10 hours",
      lessons: 15,
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
    {
      id: 3,
      title: "Advanced JavaScript",
      progress: 30,
      description: "Deep dive into JavaScript concepts",
      duration: "12 hours",
      lessons: 18,
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF5EB]">
      <Navigation />
      
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            E-Learning Platform
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Enhance your skills with our interactive courses
          </p>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card 
                key={course.id} 
                className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => navigate(`/course/${course.id}`)}
              >
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <BookOpen size={16} />
                      {course.lessons} lessons
                    </span>
                    <span className="flex items-center gap-1">
                      <BarChart size={16} />
                      {course.duration}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>

                  <Button className="w-full gap-2">
                    <Play size={16} />
                    Continue Learning
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;