import { cn } from "@/lib/utils"
import { ReactNode } from "react"

const MaxwidthWrapper = ({className,children}:{className?:string,children:ReactNode}) => {
  return (
    <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20",className)}>
      {children}
    </div>
  )
}


export default MaxwidthWrapper
