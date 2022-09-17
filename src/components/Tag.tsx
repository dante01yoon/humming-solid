import { Accessor, createSignal } from "solid-js";

type Size = "small" | "medium" | "large";

  
const reducer = (prevSize: Accessor<Size>, letterCount: number ): Size => {
  if(letterCount <= 50) {
    return "small"
  }
  
  if(letterCount <= 150) {
    return "medium";
  }
  
  return "large";
}

export interface TagProps {
  limitCount?: number;
  disabled?: boolean;
}

export function Tag({
  limitCount = 50,
  disabled= false,
}: TagProps) {
  const [getSize, setSize] = createSignal(reducer(() => "small", limitCount))
  const [getCount ,setCount] = createSignal(limitCount);
  const [getMode, setMode] = createSignal<"read" | "edit">("read")
  
  const state =  {
    get mode() {
      return getMode();
    },
    get count() {
      return getCount()
    },
    get size() {
      return getSize();
    }
  }
  
  const setSizeAction = (count: number) => {
    setSize(reducer(getSize, count));
    setCount(count);
  }

  return (
    <div>
      {
        !disabled && state.mode === "edit" ?
          <div>
            <div>
              <button onClick={() => setSizeAction(state.count - 1)}>-</button>
              <span>{state.count}</span>
              <button onClick={() => setSizeAction(state.count + 1)}>+</button>
            </div>
            <div onClick={() => setMode("read")}>done</div>
          </div> : 
          <>
          <div onClick={() => !disabled && setMode("edit")}>{state.size}</div>
          </>
    }
    </div>
  )
}
