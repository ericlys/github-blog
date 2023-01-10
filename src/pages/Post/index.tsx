import { PostInfo } from './components/PostInfo'
import { Content, PostContainer } from './styles'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface PostProps {
  title: string
  body: string
  html_url: string
  comments: number
  updated_at: string
  user: {
    login: string
  }
}

export function Post() {
  const [post, setPost] = useState({} as PostProps)

  const { id } = useParams()

  const fetchPost = async (id: string) => {
    const response = await api.get(`/repos/ericlys/github-blog/issues/${id}`)
    setPost(response.data)
  }

  useEffect(() => {
    if (typeof id === 'string') fetchPost(id)
  }, [id])

  return (
    <PostContainer>
      <PostInfo info={post} />
      <Content>{post.body}</Content>
    </PostContainer>
  )
}
