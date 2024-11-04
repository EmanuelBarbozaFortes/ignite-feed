import { ThumbsUp, Trash } from 'phosphor-react'

import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({content, onDeleteComment}) {
  function handleDeleteComment(){
    onDeleteComment(content)
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/114531262?v=4"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.autorAndTime}>
              <strong>Emanuel Fortes</strong>
              <time title="25 de setembro às 08:13h" dateTime="2024-09-25 01:07:35">Publicado há 1h</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
        <button>
          <ThumbsUp />
          aplaudir <span>20</span>
        </button>
      </footer>
      </div>
    </div>
  )
}