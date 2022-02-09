import List from '../List'
import { useFetchCharacters } from './effects'
import { CharacterFetchResponse } from './interfaces'

const Container = () => {
  const { characters }: CharacterFetchResponse = useFetchCharacters()

  // Improve with loading cards
  if (!characters) return <p>Loading characters</p>
  
  console.log(characters)
  
  return (
    <article>
      <List />
    </article>
  );
}

export default Container
