import { Fragment } from "react";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import FormContent from "./components/FormContent/FormContent";
import { useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);
  const [isCreateProject, setCreateProject] = useState(false);
  function addNewProject(name, date, description) {
    let newProject = [{ name: null, date: null, description: null, tasks: [] }];
    newProject.name = name;
    newProject.date = date;
    newProject.description = description;
    setProjects([...projects, newProject]);
  }
  function handleStateChange() {
    setCreateProject((isCreateProject) => !isCreateProject);
  }
  function handleStateChangeMenu() {
    setCreateProject(true);
  }
  return (
    <Fragment>
      <SidebarMenu
        projects={projects}
        handleStateChangeMenu={handleStateChangeMenu}
      ></SidebarMenu>
      <FormContent
        addNewProject={addNewProject}
        isCreateProject={isCreateProject}
        handleStateChange={handleStateChange}
      ></FormContent>
    </Fragment>
  );
}

export default App;
