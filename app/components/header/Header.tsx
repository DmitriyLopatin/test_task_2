import Link from 'next/link'
import React from 'react'
import AnnualIncom from '../../icons/AnnualIncom'
import Check from '../../icons/Check'
import InternalExpenses from '../../icons/InternalExpenses'
import Participants from '../../icons/Participants'
import Search from '../../icons/Search'
import BurgerBtn from '../burger-btn/BurgerBtn'

const Header = () => {

  const headerArr = [
    'защита и лоббирование интересов членов Ассоциации',
    'защита интересов членов Ассоциации на внутреннем IT рынке',
    'защита интересов членов Ассоциации на внутреннем IT рынке',
    'содействие членам Ассоциации в вопросах развития',
    'развитие взаимного аутсорсинга между членами Ассоциации',
    'правовая защита авторских и смежных прав членов Ассоциации'
  ]

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__top'>
          <div className='logo'>
            <Link href={'/'}><img src="/assets/images/logo.png" alt="" /></Link>
          </div>
          <BurgerBtn />
          <ul className='nav__list'>
            <li><Link href={'/'}>Об ассоциации</Link></li>
            <li><Link href={'/'}>Госпрограммы</Link></li>
            <li><Link href={'/'}>Обзоры рынка</Link></li>
            <li><Link href={'/'}>Статистика</Link></li>
            <li><Link href={'/'}>Участники</Link></li>
            <li><Link href={'/'}>Новости</Link></li>
            <li><Link href={'/'}>Партнеры</Link></li>
            <li><Link href={'/'}>Контакты</Link></li>
          </ul>
          <Search />
          <div className='lang'>
            <span >ru</span>
          </div>
        </div>
        <div className='header__content'>
          <h1>Казахстанская Ассоциация IT Компаний</h1>
          <p className='header__title'>объединяет более 50 IT-компаний Казахстана</p>
          <div className='header__missions'>
            {headerArr.map(item =>
              <div>
                <Check />
                <p>{item}</p>
              </div>
            )}
          </div>
          <button className='c-btn c-btn-header'>Вступить</button>
        </div>
        <div className='header__association'>
          <h2>Ассоциация сегодня</h2>
          <div className='header__association--content'>

            <div className='header__association--item'>
              <div className='header__association--border'></div>
              <p><span>Участники</span><Participants /></p>
              <p><span>IT компаний Казахстана</span><span>47</span></p>
            </div>


            <div className='header__association--item'>
              <div className='header__association--border'></div>
              <p><span>Годовой доход</span><AnnualIncom /></p>
              <div>
                <p>За 2020 год составил</p>
                <div>
                  <p>84,845</p>
                  <p>млн.тенге</p>
                </div>
              </div>
            </div>

            <div className='header__association--item'>
              <div className='header__association--border'></div>
              <p><span>Местное содержание</span> <InternalExpenses /></p>
              <div >
                <p>За 2020 год составил</p>
                <div className='header_hover'>
                  <p>84,845</p>
                  <p>млн.тенге</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header