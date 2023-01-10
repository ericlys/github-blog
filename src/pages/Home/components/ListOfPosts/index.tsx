import { useContext } from 'react'
import { PostsContext } from '../../../../contexts/PostsContext'
import { PostItem } from '../PostItem'
import { ListOfPostsContainer } from './styles'

export function ListOfPosts() {
  const { posts } = useContext(PostsContext)

  return (
    <ListOfPostsContainer>
      {!!posts &&
        posts.map((post) => <PostItem key={post.number} data={post} />)}
    </ListOfPostsContainer>
  )
}
