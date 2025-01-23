import { Fragment } from "react";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import FormContent from "./components/FormContent/FormContent";
import { useState } from "react";

function App() {
  const [projects, setProjects] = useState([
    {
      name: "project1",
      date: Date.now(),
      description: "React",
      tasks: ["Hello"],
    },
  ]);
  const [selectedProject, setSelectedProject] = useState(projects[0]);
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
  function addTask(task, oldProject) {
    if (task.length > 0) {
      let updatedProject = oldProject;
      updatedProject.tasks.push(task);
      setProjects(
        projects.map((project) =>
          project === oldProject ? updatedProject : project
        )
      );
    }
  }
  function clearTask(removedTask, oldProject) {
    let updatedProject = oldProject;
    updatedProject.tasks = updatedProject.tasks.filter(
      (task) => task !== removedTask
    );
    setProjects(
      projects.map((project) =>
        project === oldProject ? updatedProject : project
      )
    );
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
        selectedProject={selectedProject}
        addTask={addTask}
        clearTask={clearTask}
      ></FormContent>
    </Fragment>
  );
}

export default App;
