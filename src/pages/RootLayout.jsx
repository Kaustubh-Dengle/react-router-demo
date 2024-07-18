import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import classes from "./RootLayout.module.css";

export default function RootLayout() {
  return (
    <>
      <NavigationBar />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
}
