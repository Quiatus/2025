import Button from "./Button"

export default function Sidebar({ onAddProject, projects }) {
  return (
    <aside className="bg-stone-900 text-stone-50 px-8 py-16 w-1/3 md:w-72 rounded-tr-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your projects</h2>
      <ul className="mb-8">
        {projects.map(project => <li key={project.id}>
          <button className="w-full text-left px-2 py-1 text-stone-400 rounded-sm my-1 hover:bg-stone-800 hover:cursor-pointer">{project.title}</button>
        </li>)}
      </ul>
      <div>
        <Button onClick={onAddProject}>
         + Add Project
        </Button>
      </div>
    </aside>
  )
}
