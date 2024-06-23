// import { useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  // const { pathname } = useLocation();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[100px_1fr_300px] 2xl:grid-cols-[200px_1fr_400px] min-[1680px]:grid-cols-[300px_1fr_500px]">
      <div className="hidden lg:block bg-[#101010]"></div>

      <div className="flex flex-1">
        <div>
          <Sidebar />
        </div>
        <div className="flex-1 min-h-[100dvh] bg-neutral-900">
          <Header />
          <div className="flex gap-x-5">
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block bg-neutral-900 border-l border-l-neutral-800"></div>
    </div>
  );
}
