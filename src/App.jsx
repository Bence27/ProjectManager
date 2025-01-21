import { Fragment } from "react";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import FormContent from "./components/FormContent/FormContent";
import { useState } from "react";

const PROJECTS = [{ name: null, date: null, description: null, tasks: [] }];
function App() {
  const [projects, setProjects] = useState(PROJECTS);
  return (
    <Fragment>
      <SidebarMenu projects={projects}></SidebarMenu>
      <FormContent></FormContent>
    </Fragment>
  );
}

export default App;
