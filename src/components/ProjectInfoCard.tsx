import type {Project} from '../types/types'

type CardProps = {
    project: Project
    data?: string[]
}

export function ProjectInfoCard({project, data}: CardProps) {
    return (
    <div className="info-container">
      <h3>Technologies used:</h3>
      <div className="info-row">
        {`${project}.${data}.map((d) =>
        <img key={d} src={d} className="platform-logo"></img>)`}
      </div>
    </div>
    )
}