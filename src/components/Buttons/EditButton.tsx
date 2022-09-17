import { JSX } from "solid-js/jsx-runtime"

export interface EditButtonProps extends  JSX.ButtonHTMLAttributes<HTMLButtonElement>{
}

export const EditButton = (props: EditButtonProps) => {
  return (
    <button {...props}>{props.children}</button>
  )
}