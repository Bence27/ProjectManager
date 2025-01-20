import { Fragment } from "react";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";

const projects = [{ name: null, date: null, description: null, tasks: [] }];
function App() {
  return (
    <Fragment>
      <SidebarMenu projects={projects}></SidebarMenu>
    </Fragment>
  );
}

export default App;
