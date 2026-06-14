import type {Project} from '../types/types'

type SubtitleProps = {
    text?: string
    project?: Project
}

export function Subtitle( {project, text}: SubtitleProps ) {
    
    if (!project) return (
        <span>{text}</span>
    )

    return (
        <span className='heading-subtitle'>{
            `Website property of ${project.title} & 
            ${project.subtitle ? 
            project.subtitle 
            : undefined}`
            }
        </span>
    )


}

export default Subtitle