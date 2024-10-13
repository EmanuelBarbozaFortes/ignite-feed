import style from './Header.module.css'
import ignitelogo from '../img/Ignite-simbol.png';

export function Header(){
  return(
    <header className={style.header}>
      <img src={ignitelogo} alt="" />
    <strong >Ignite Feed</strong>
    </header>
  )
}