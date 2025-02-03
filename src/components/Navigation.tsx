import { useState } from "react";
import { Menu, X, BookOpen, BarChart2, Play, User, Settings, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: "Courses", icon: BookOpen },
    { label: "Progress", icon: BarChart2 },
    { label: "My Learning", icon: Play },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 py-4 border-b">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/')}
            className="mr-2"
          >
            <Home size={20} />
          </Button>
          <h1 className="text-xl font-bold text-primary">E-Learning</h1>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Settings size={18} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Help</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <User size={18} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Account</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}
              <Button variant="outline" className="gap-2">
                <Settings size={18} />
                Settings
              </Button>
              <Button variant="outline" className="gap-2">
                <User size={18} />
                Profile
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;