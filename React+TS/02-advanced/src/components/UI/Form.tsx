import { useImperativeHandle, useRef, type ComponentPropsWithoutRef, type Ref, type SubmitEvent } from "react"

export type FormHandler = {
  clear: () => void;
}

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
  ref?: Ref<FormHandler>; 
}

export default function Form({ onSave, children, ref, ...rest }: FormProps) {
  const form = useRef<HTMLFormElement>(null)

  useImperativeHandle(ref, () => {
    return {
      clear() {
        form.current?.reset()
      }
    }
  })

  function submitHandler(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    onSave(data)
  }

  return <form onSubmit={submitHandler} {...rest} ref={form}>{children}</form>
}
