import { relativeDate } from '../../../../utils/data'
import { PostItemContainer } from './styles'

interface Post {
  title: string
  created_at: string
  body: string
  number: number
}

interface PostItemProps {
  data: Post
}

export function PostItem({ data }: PostItemProps) {
  return (
    <PostItemContainer href={`/post/${data.number}`}>
      <header>
        <h5>{data.title}</h5>
        <span>{relativeDate(new Date(data.created_at))}</span>
      </header>
      <p>{data.body}</p>
    </PostItemContainer>
  )
}
