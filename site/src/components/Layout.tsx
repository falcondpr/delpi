// import { useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  // const { pathname } = useLocation();

  return (
    <div className="flex">
      <Sidebar />
      <div className="min-h-[100dvh] bg-neutral-900 w-full">
        <Header />
        <div className="flex gap-x-5">
          <div className="flex-1">{children}</div>
          {/* {pathname === "/" ? null : (
            <aside className="mt-5 p-7 w-[370px] border-l border-neutral-700">
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. A laborum est possimus, labore quam cum. Non id
                ea assumenda animi.
              </p>
            </aside>
          )} */}
        </div>
      </div>
    </div>
  );
}
