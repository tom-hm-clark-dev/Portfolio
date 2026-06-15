import type {Project} from '../types/types'

type CardProps = {
    project: Project
    dataType: string
}

export function ProjectInfoCard({project, dataType}: CardProps) {
    return (
      PopulateCard({project, dataType})
    )
}

export function PopulateCard({project, dataType}: CardProps) {
  if (dataType === 'tech')
      return(
        <div className="info-container">
          <h3>Technologies used:</h3>
            <div className="info-row">
              {project[dataType]?.map((item) => (
                <img key={item} src={item} className="platform-logo"></img>
              ))}
            </div>
        </div>
      )

      if (dataType === 'roles')
        return (
      <div className='info-container'>
        <h3>My roles:</h3>
        <div className='info-row'>
          {project[dataType]?.map((item) => (
            <span key={item} className='tag'>{item}</span>
          ))}
        </div>
      </div>)
  }
