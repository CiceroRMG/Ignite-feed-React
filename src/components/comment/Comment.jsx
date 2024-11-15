import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {

    return (
      <div className={styles.comment}>
        <img src="https://github.com/nintendo.png" />

        <div className={styles.commentBox}> 
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Nome do autor</strong>
                        <time title='15 de Novembro às 08:00h' dateTime="2024-11-15 08:00:00">Cerca de 1h atrás</time>
                    </div>

                    <button title='Deletear comentário'>
                        <Trash size={22} />
                    </button>
                </header>

                <p>Muito bom Usuário, parabéns!!</p>
            </div>

            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
      </div>
    )
  }
  