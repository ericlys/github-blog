import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useEffect } from 'react'
import { PostsContext } from '../../../../contexts/PostsContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchPosts, postCount } = useContext(PostsContext)

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchPosts = (data: SearchFormInput) => {
    fetchPosts(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h4>Publicações</h4>
        <span>
          {postCount} {postCount !== 1 ? 'publicações' : 'publicação'}
        </span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
      <input type="submit" hidden />
    </SearchFormContainer>
  )
}
