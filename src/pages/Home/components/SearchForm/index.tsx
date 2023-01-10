import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchPosts = (data: SearchFormInput) => {
    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h4>Publicações</h4>
        <span>6 publicações</span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
      <input type="submit" hidden />
    </SearchFormContainer>
  )
}
