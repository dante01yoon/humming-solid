import { createSignal, JSX, mergeProps } from "solid-js";
import { TEXT_LIMIT } from "../constants/counts";

export interface TextFieldProps {
  limitCount?: number;
  disabled?: boolean;
}

export const TextField = (props: TextFieldProps) => {
  props = mergeProps({ 
    limitCount: TEXT_LIMIT.small,
    disabled: false,
  }, props);
  const [getText, setText] = createSignal("", {equals: false});
  const state = {
    get text() {
      return getText()
    },
  }

  const onChange: JSX.EventHandlerUnion<HTMLTextAreaElement, Event>  = (e) => {
    setText(e.currentTarget.value);
  }

  return (
    <textarea onChange={onChange} value={state.text} maxLength={props.limitCount} disabled={props.disabled}/>
  )
}