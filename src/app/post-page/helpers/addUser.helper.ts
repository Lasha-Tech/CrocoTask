import { Posts, PostsArray } from "../../../models/posts.interface";
import { Users, UsersArray } from "../../../models/users.interface";

export function addUser(posts:PostsArray,userArr:UsersArray) {
 return posts.map((post:Posts) => {

        return {
          ...post,
          userName:userArr.map((i:Users) => {
            return i.id === post.userId ? i : null
          }).filter((i:Users | any) => i != null)[0]
        }
      }) 
}