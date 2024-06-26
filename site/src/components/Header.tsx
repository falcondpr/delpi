import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

interface HeaderProps {
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
}

export default function Header({
  showSidebar,
  setShowSidebar,
}: HeaderProps) {
  return (
    <div className="h-16 border-b border-neutral-800 p-5">
      <button
        className="lg:hidden"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? (
          <FaTimes className="text-2xl text-white" />
        ) : (
          <FaBars className="text-2xl text-white" />
        )}
      </button>
    </div>
  );
}
