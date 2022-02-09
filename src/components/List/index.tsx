import { useRecoilState } from 'recoil';
import { characterState } from '../../state/marketplace';
import Card from '../Card';
import { Character } from '../Container/interfaces';
import styles from './styles.module.scss'

const List = () => {
  const [characters] = useRecoilState(characterState)

  return (
    <section className={styles.list}>
      {characters.map((character: Character, i) => (
        <li key={`${character.name}-${i}`}>
          <Card {...character} />
        </li>
      ))}
    </section>
  )
}

export default List
