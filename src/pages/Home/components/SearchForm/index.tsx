import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { PostsContext } from '../../../../contexts/PostsContext'
import { CircleNotch } from 'phosphor-react'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchPosts, postCount } = useContext(PostsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchPosts = (data: SearchFormInput) => {
    fetchPosts(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <div>
          <h4>Publicações</h4>
          {isSubmitting && <CircleNotch size={18} weight="bold" />}
        </div>
        <span>
          {postCount} {postCount !== 1 ? 'publicações' : 'publicação'}
        </span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
      <input disabled={isSubmitting} type="submit" hidden />
    </SearchFormContainer>
  )
}
