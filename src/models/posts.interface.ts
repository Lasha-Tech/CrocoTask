import { Users } from "./users.interface"

export type PostsArray = Posts[]

export interface Posts {
  userId: number
  id: number
  title: string
  body: string
  userName?:Users | null
}
