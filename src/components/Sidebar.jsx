
import { PencilLine } from 'phosphor-react'

import style from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar(){
  return(
    <aside className={style.sidebar}>
      <img className={style.cover} src="https://images.unsplash.com/photo-1461784121038-f088ca1e7714?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div className={style.profile}>
        <Avatar
          hasBorder
          src="https://avatars.githubusercontent.com/u/114531262?v=4"
        />
        <strong>Emanuel Fortes</strong>
        <span>React Developer</span>
      </div>
      <footer>
          <a href="#">
            <PencilLine size={20}/> 
            Editar o seu perfil
            </a>
        </footer>
    </aside>
  )
}