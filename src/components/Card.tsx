import { createSignal } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import { Tag, TextField, TextFieldProps } from ".";
import { createAccessor } from "../utils/accessor";
import { EditButton } from "./Buttons/EditButton";

interface Card extends TextFieldProps { 
    
}

export const Card = ({
  limitCount,
}: TextFieldProps): JSX.Element => {
  const [disabled, setDisabled]  = createSignal(false);
  const state = createAccessor({name: 'disabled', func: disabled});
  
  const onClick = () => {
    setDisabled(!state.disabled);
  }
  
  return (
    <div>
      <TextField limitCount={limitCount} disabled={state.disabled}/>
      <EditButton onClick={onClick}>{state.disabled ? '수정' : '완료'}</EditButton>
      <Tag limitCount={limitCount} disabled/>
    </div>
  )  
}