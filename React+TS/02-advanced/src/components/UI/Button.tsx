import type { ComponentPropsWithoutRef } from "react"

// type ButtonProps = {
//   el: 'button';
// } & ComponentPropsWithoutRef<'button'>

// type AnchorProp = {
//   el: 'anchor';
// } & ComponentPropsWithoutRef<'a'>

// export default function Button(props: ButtonProps | AnchorProp) {
//   if (props.el === 'anchor') {
//     return <a {...props}></a>
//   }

//   return (
//     <button className="button" {...props}></button>
//   )
// }


type ButtonProps =  ComponentPropsWithoutRef<'button'> & {
  href?: never
}

type AnchorProp =  ComponentPropsWithoutRef<'a'> & {
  href?: string
}

function isAnchorProps(props: ButtonProps | AnchorProp): props is AnchorProp {
  return 'href' in props
}

export default function Button(props: ButtonProps | AnchorProp) {
  if (isAnchorProps(props)) {
    return <a {...props}></a>
  }

  return (
    <button className="button" {...props}></button>
  )
}
