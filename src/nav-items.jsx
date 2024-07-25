import { Home, Sword, Book, Building } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "History",
    to: "/history",
    icon: <Book className="h-4 w-4" />,
    page: <div>Roman History Page</div>,
  },
  {
    title: "Military",
    to: "/military",
    icon: <Sword className="h-4 w-4" />,
    page: <div>Roman Military Page</div>,
  },
  {
    title: "Architecture",
    to: "/architecture",
    icon: <Building className="h-4 w-4" />,
    page: <div>Roman Architecture Page</div>,
  },
];
