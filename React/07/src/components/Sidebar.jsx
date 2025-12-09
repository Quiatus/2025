import Button from "./Button"

export default function Sidebar({ onAddProject, projects, onSelectProject, selectedProjectId }) {
  return (
    <aside className="bg-stone-900 text-stone-50 px-8 py-16 w-1/3 md:w-72 rounded-tr-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
      <ul className="mb-8">
        {projects.map(project => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:bg-stone-800 hover:cursor-pointer"

          if (project.id === selectedProjectId) {
            cssClasses += ' bg-stone-800 text-stone-200'
          } else {
            cssClasses += ' text-stone-400'
          }
          return (
            <li key={project.id}>
              <button 
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}>
                  {project.title}
              </button>
            </li>
          )
        })}
      </ul>
      <div>
        <Button onClick={onAddProject}>
         + Add Project
        </Button>
      </div>
    </aside>
  )
}
