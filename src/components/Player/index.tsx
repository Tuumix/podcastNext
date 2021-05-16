import styles from './styles.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando agora"/>
        <strong>Tocando agora</strong>
      </header>

      <div className={styles.emptyPlayer}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer>
        <div className={styles.progress}> 
          <span>00:00</span>
          <div className={styles.emptySlider}>
           <span>00:00</span>
          </div>
        </div>

        <div className={styles.buttons}>
          <button type="button">
            <img src="/shuffle.svg" alt="emabaralhar"/>
          </button>

          <button type="button">
            <img src="/play-previous.svg" alt="tocar anterior"/>
          </button>

          <button type="button">
            <img src="/play-next.svg" alt="tocar proxima"/>
          </button>

          <button type="button">
            <img src="/repeat.svg" alt="repetir"/>
          </button>
        </div>
      </footer>
    </div>
  )
}

export default Header;
