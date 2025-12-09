import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Empty from "./components/Empty";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  })
  
  function handleClickAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null, 
        
      }
    })
  }
  
  function handleCancel() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined, 
      }
    })
  }
  
  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId =  Math.random()
      const newProject = {
        ...projectData,
        id: projectId
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }
  
  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id, 
      }
    })
  }
  
  function handleDeleteProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined, 
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      }
    })
  }
  
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)
  
  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />
  
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel}/>
  } else if (projectsState.selectedProjectId === undefined) {
    content = <Empty onAddProject={handleClickAddProject}/> 
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddProject={handleClickAddProject} projects={projectsState.projects} selectedProjectId={selectedProject?.id} onSelectProject={handleSelectProject}/>
      {content}
    </main>
  );
}

export default App;
