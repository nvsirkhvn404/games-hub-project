import NavBar from "@/components/NavBar";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <NavBar />
      <div className="mt-20">
        <Outlet />
      </div>
    </>
  )
}
