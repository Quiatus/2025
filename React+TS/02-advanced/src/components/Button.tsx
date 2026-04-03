import type { ComponentPropsWithoutRef } from "react"

type ButtonProps = {
  el: 'button';
} & ComponentPropsWithoutRef<'button'>

type AnchorProp = {
  el: 'anchor';
} & ComponentPropsWithoutRef<'a'>

export default function Button(props: ButtonProps | AnchorProp) {
  if (props.el === 'anchor') {
    return <a {...props}></a>
  }

  return (
    <button className="button" {...props}></button>
  )
}
