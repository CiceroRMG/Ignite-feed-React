import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from '../avatar/Avatar'

export function Comment({content, onDeleteComment}) {
    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
      <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/nintendo.png" />

        <div className={styles.commentBox}> 
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Nome do autor</strong>
                        <time title='15 de Novembro às 08:00h' dateTime="2024-11-15 08:00:00">Cerca de 1h atrás</time>
                    </div>

                    <button title='Deletar comentário' onClick={handleDeleteComment}>
                        <Trash size={22} />
                    </button>
                </header>

                <p>{content}</p>
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
  