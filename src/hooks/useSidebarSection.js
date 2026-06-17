import { useLocation } from "react-router-dom";
import SIDEBAR_SECTIONS from "../config/sidebarSections";

// Sidebar data lives in src/config/sidebarSections.js.
// See docs/sidebar-sections-guide.md for full update mapping (routes/pages/cards).

const useSidebarSection = () => {
  const location = useLocation();

  const activeSection =
    SIDEBAR_SECTIONS.find((section) => section.match(location.pathname)) ||
    null;

  return {
    activeSection,
    hasSidebarSection: Boolean(activeSection),
  };
};

export default useSidebarSection;