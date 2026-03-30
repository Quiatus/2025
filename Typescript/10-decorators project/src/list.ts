/// <reference path="component.ts" />

namespace App {
  export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
    assignedProjects: Project[]

    constructor(private type: 'active' | 'finished') {
      super('project-list', 'app', false, `${type}-projects` )
      this.assignedProjects = []

      this.configure()
      this.renderContent()
    }

    @autobind
    dragOver(e: DragEvent) {
      if (e.dataTransfer && e.dataTransfer.types[0] === 'text/plain') {
        e.preventDefault()
        const listEl = this.element.querySelector('ul')!
        listEl.classList.add('droppable')
      }
      
    }

    @autobind
    drop(e: DragEvent) {
      const prjId = e.dataTransfer!.getData('text/plain')
      projectState.moveProject(prjId, this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished)
    }

    @autobind
    dragLeave(_: DragEvent) {
      const listEl = this.element.querySelector('ul')!
      listEl.classList.remove('droppable')
    }

    private renderProjects() {
      const listEl = document.getElementById(`${this.type}-project-list`) as HTMLUListElement
      listEl.innerHTML = ''
      for (const prjItem of this.assignedProjects) {
        new ProjectItem(this.element.querySelector('ul')!.id, prjItem)
      }
    }

    configure() {
      this.element.addEventListener('dragover', this.dragOver)
      this.element.addEventListener('dragleave', this.dragLeave)
      this.element.addEventListener('drop', this.drop)

      projectState.addListener((projects: Project[]) => {
        const filteredProjects = projects.filter(prj => {
          if (this.type === 'active') {
            return prj.status === ProjectStatus.Active
          }
          return prj.status === ProjectStatus.Finished
        })
        this.assignedProjects = filteredProjects
        this.renderProjects()
      })
    }

    renderContent() {
      const listId = `${this.type}-project-list`
      this.element.querySelector('ul')!.id = listId
      this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS'
    }
  }
}