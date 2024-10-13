import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';


import style from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/114531262?v=4',
      nome: 'Emanuel Fortes',
      role: 'Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera' },
      { type: 'paragraph', content: 'Acabou de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return evento' },
      { type: 'link', content: 'Jane.design/doctorcare' }
    ],
    publishedAt: new Date('2024-09-28 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/101043200?v=4',
      nome: 'Augusto Pontes',
      role: 'Python Developer'

    },
    content: [
      { type: 'paragraph', content: 'Fala Galera' },
      { type: 'paragraph', content: 'Acabou de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return evento' },
      { type: 'link', content: 'Jane.design/doctorcare' }
    ],
    publishedAt: new Date('2024-09-27 20:00:00'),
  }
];


export function App() {
  return (
    <div className="style.">
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (<Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}
