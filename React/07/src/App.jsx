import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Empty from "./components/Empty";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  function handleAddTask(text) {
    setProjectsState(prevState => {
      const taskId =  Math.random()
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      }
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    })
  }

  function handleDeleteTask(id) {    
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      }
    })
  }
  
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
  
  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject} tasks={projectsState.tasks} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask}/>
  
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
