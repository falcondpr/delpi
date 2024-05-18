import RouteApp from "./routes/Route";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <RouteApp />
    </>
  );
}
