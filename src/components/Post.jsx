import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import style from './Post.module.css'
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {

  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })
  const publishedDAteRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })
  function handleCreateNewComment() {
    event.preventDefault()
    const newCommentText = event.target.comment.value

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }
  function handelNewCommentChange(){
    setNewCommentText(event.target.value)
  }
  function deleteComment(commentToDelete){
    const commentWithoutDeleteOne = comments.filter(comment => {
      return comment != commentToDelete;
    })
    setComments(commentWithoutDeleteOne);
  }

  return (
    <>
      <article className={style.post}>
        <header>
          <div className={style.autor}>
            <Avatar
              hasBorder
              src={author.avatarUrl}
            />
            <div className={style.autorInfor}>
              <strong>{author.nome}</strong>
              <span>{author.role}</span>
            </div>
          </div>
          <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
            {publishedDAteRelativeToNow}
          </time>
        </header>
        <div className={style.conteudo}>
          {content.map(line => {
            if (line.type == 'paragraph') {
              return <p>{line.content}</p>;
            } else if (line.type == 'link') {
              return <p><a href="">{line.content}</a></p>;
            }
          })}

        </div>
        <form onSubmit={handleCreateNewComment} className={style.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea
            name="comment"
            value={newCommentText}
            placeholder="Deixe um Comentário"
            onChange={handelNewCommentChange}
          />
          <footer className={style.footerPost} ><button type="submit">Comentar</button></footer>
          {comments.map(comment => {
            return (<Comment
               key={comment} 
               content={comment}
               onDeleteComment={deleteComment}
               />)
          }
          )}
        </form>
      </article>

    </>
  )
}