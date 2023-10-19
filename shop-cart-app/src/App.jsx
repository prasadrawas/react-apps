import { AuthPage } from "./pages/auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./pages/dashboard/DashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/login",
    element: <AuthPage path={"login"} />,
  },
  {
    path: "/register",
    element: <AuthPage path={"register"} />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <DashboardPage />
    </RouterProvider>
  );
}

export default App;
