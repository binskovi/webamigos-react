import { type ComponentPropsWithRef, useId, forwardRef, type Ref } from "react";
import { type FieldError } from "react-hook-form";
import { cn } from "../../utils/cn";

type Props = {
  label: string;
  error?: FieldError
} & ComponentPropsWithRef<'input'>

export const Input = forwardRef(
  ({ label, error, ...rest }: Props, ref: Ref<HTMLInputElement>) => {
    const id = useId();    // hook useId
    return(
      <div className="my-2">
        <label className="mr-2" htmlFor={id}>
          {label}
        </label>
        <input id={id} ref={ref} {...rest} className={cn({
          "text-red-900 border-2 border-red-300 ring-red-300 placeholder:text-red-300 focus:ring-red-500": error,
          })}
        />
        {error && <p className="text-red-500">{error.message}</p>}
      </div>
    );
  });