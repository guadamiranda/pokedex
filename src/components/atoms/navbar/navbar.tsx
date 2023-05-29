import Style from './navbar.module.scss'
import { TbPokeball } from 'react-icons/tb'

const Navbar = () => {
    return(
        <div className={Style.navbar}>
            <div className={Style.navbar__header}>
                <div className={Style.navbar__header__logo}>
                    <TbPokeball className={Style.navbar__header__logo__icon}/>
                    <span className={Style.navbar__header__logo__text}>Pokedex</span>
                </div>
            </div>
        </div>
    )
}

export default Navbar