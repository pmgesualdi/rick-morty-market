import { useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { characterState } from '../../state/recoil';
import Card from '../Card';
import { Character } from '../Container/interfaces';
import LoadingCard from '../LoadingCard';
import styles from './styles.module.scss'

interface ListProps {
  showFavorites: boolean
}

const List = ({ showFavorites }: ListProps) => {
  const [characters] = useRecoilState(characterState)
  const loadingPlaceholder = useMemo(() => {
    return Array(20).fill(<LoadingCard />)
  }, [])
  const favorites: Array<Character> = useMemo(() => {
    if (!characters) return []

    return characters.filter((char: Character) => char.favorite)
  }, [characters])

  if (!characters || !characters.length) return (
    <section className={styles.list}>
      {loadingPlaceholder}
    </section>
  )

  const cards: Array<Character> = showFavorites ? favorites : characters 

  return (
    <section className={styles.list}>
      {cards.map((character: Character, i) => (
        <li key={`${character.name}-${i}`}>
          <Card {...character} />
        </li>
      ))}
      {!cards.length && (
        <div className={styles.noFavorites}>You have to select some favorite characters first!</div>
      )}
    </section>
  )
}

export default List
