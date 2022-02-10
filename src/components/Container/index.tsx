import { useState } from 'react'
import List from '../List'
import { useFetchCharacters } from './effects'
import styles from './styles.module.scss'

const Container = () => {
  const [showFavorites, setShowFavorites] = useState<boolean>(false)

  useFetchCharacters()
  
  return (
    <article className={styles.container}>
      <div className={styles.tab}>
        <button onClick={() => setShowFavorites(false)}>All</button>
        <button onClick={() => setShowFavorites(true)}>Favorites</button>
      </div>
      <div>
        <List showFavorites={showFavorites} />
      </div>
    </article>
  );
}

export default Container
