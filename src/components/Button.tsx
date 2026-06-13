import { Link } from "react-router-dom";

type ButtonProps = {
  link:string,
  text:string
}

export function Button({ ...props }:ButtonProps) {
  return (
    <Link className="btn" to={props.link}>{props.text}</Link>
  )
}

export default Button