import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <header>
        <h4>Publicações</h4>
        <span>6 publicações</span>
      </header>
      <input placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
