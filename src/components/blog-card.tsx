import { Card } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export const BlogCard = () => {
  return (
    <Card className="bg-background grid grid-cols-1 lg:grid-cols-2 p-4">
      <AspectRatio ratio={2}>
        <img src="http://placehold.jp/800x600.png" alt="hero" className="rounded w-full h-full object-cover" />
      </AspectRatio>
      <div className="flex flex-col py-4 px-0 lg:px-16 lg:py-16 gap-4 justify-center">
        <h2 className="text-3xl font-bold">A web application built using Slidx and shadcn/ui components.</h2>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="gap-2">
            <Avatar className="w-4 h-4">
              <AvatarFallback className="bg-blue-500" />
            </Avatar>
            John Doe
          </Badge>
          <Badge variant="outline" className="gap-2">
            <CalendarIcon size={14} />
            <span>Sep 23</span>
          </Badge>
          <Badge variant="outline">5 min read</Badge>
        </div>
        <p className="leading-7">Slidx is a React starter kit based on shadcn/ui and Tailwind that comes with a set of pre-configured tools to kickstart your app development.</p>
      </div>
    </Card>
  )
}
