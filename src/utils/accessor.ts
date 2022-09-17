import { Accessor } from "solid-js";

type CustomAccessor = {
  [key: string]: ReturnType<Accessor<any>>
}

interface SingleParam {
  name: string;
  func: Accessor<any>
}

export const createAccessor = (...params: SingleParam[]): CustomAccessor => {
  return params.reduce((acc,curr) => {
    const functionName = curr.name;
    console.log(functionName)
    Object.defineProperty(acc, functionName, {
      get: () => {
        return curr.func.call(null);
      },
    });
    return acc;
  }, {} as CustomAccessor)
}