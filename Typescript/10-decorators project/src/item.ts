/// <reference path="component.ts" />

namespace App {
  export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable {
    private project: Project

    get persons() {
      if (this.project.people === 1) {
        return '1 person assigned'
      } else {
        return `${this.project.people} people assigned`
      }
    }

    constructor(hostId: string, project: Project) {
      super('single-project', hostId, false, project.id)
      this.project = project
      this.configure()
      this.renderContent()
    }

    @autobind
    dragStart(e: DragEvent) {
      e.dataTransfer!.setData('text/plain', this.project.id)
      e.dataTransfer!.effectAllowed = 'move'
    }

    dragEnd(_: DragEvent) {
      
    }

    configure() {
      this.element.addEventListener('dragstart', this.dragStart)
      this.element.addEventListener('dragend', this.dragEnd)
    }

    renderContent() {
      this.element.querySelector('h2')!.textContent = this.project.title
      this.element.querySelector('h3')!.textContent = this.persons
      this.element.querySelector('p')!.textContent = this.project.description
    }
  }
}