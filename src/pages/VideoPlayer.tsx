import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const VideoPlayer = () => {
  const { courseId, videoId } = useParams();
  const navigate = useNavigate();

  // This would typically come from an API
  const videoDetails = {
    id: Number(videoId),
    title: "Introduction to HTML",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    description: "Learn the basics of HTML structure and common elements.",
    nextVideo: 2,
    previousVideo: null,
  };

  return (
    <div className="min-h-screen bg-[#FFF5EB]">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            className="mb-4"
            onClick={() => navigate(`/course/${courseId}`)}
          >
            <ArrowLeft className="mr-2" size={16} />
            Back to Course
          </Button>

          <div className="aspect-video mb-6">
            <iframe
              src={videoDetails.videoUrl}
              title={videoDetails.title}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <h1 className="text-2xl font-bold mb-4">{videoDetails.title}</h1>
          <p className="text-gray-600 mb-8">{videoDetails.description}</p>

          <div className="flex justify-between">
            {videoDetails.previousVideo && (
              <Button
                onClick={() => navigate(`/video/${courseId}/${videoDetails.previousVideo}`)}
              >
                <ArrowLeft className="mr-2" size={16} />
                Previous Lesson
              </Button>
            )}
            {videoDetails.nextVideo && (
              <Button
                className="ml-auto"
                onClick={() => navigate(`/video/${courseId}/${videoDetails.nextVideo}`)}
              >
                Next Lesson
                <ArrowRight className="ml-2" size={16} />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;