// Source: https://dev.to/chris__sev/creating-a-css-animated-loading-card-5187

import styles from './styles.module.scss'

const LoadingCard = () => {

  return (
    <div className={styles.cardIsLoading}>
      <div className={styles.image}></div>
      <div>
        <p></p>
      </div>
    </div>
  )
}

export default LoadingCard
