import { createContext, ReactNode, useState } from 'react'
import { api } from '../lib/axios'

interface Post {
  title: string
  created_at: string
  body: string
  number: number
}

interface PostsContextType {
  posts: Post[]
  postCount: number
  fetchPosts: (query?: string) => Promise<void>
}

interface PostsProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostsContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])
  const [postCount, setPostCount] = useState(0)

  const fetchPosts = async (query?: string) => {
    const response = await api.get('search/issues', {
      params: {
        q: `repo:ericlys/github-blog is:issue ${query ?? ''}`,
      },
    })
    setPosts(response.data.items)
    setPostCount(response.data.total_count)
  }

  return (
    <PostsContext.Provider
      value={{
        posts,
        postCount,
        fetchPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
