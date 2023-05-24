import Style from './navbar.module.scss'
import { TbPokeball } from 'react-icons/tb'

interface generationList{
    generations: Array<string>
}

const Navbar = (props:generationList) => {
    const generationNames = props.generations

    return(
        <div className={Style.navbar}>
            <div className={Style.navbar__header}>
                <div className={Style.navbar__header__logo}>
                    <TbPokeball className={Style.navbar__header__logo__icon}/>
                    <span className={Style.navbar__header__logo__text}>Pokedex</span>
                </div>
            </div>
            <div className={Style.navbar__options}>
                {generationNames.map((name) => 
                <div className={Style.navbar__options__container}>
                    <span className={Style.navbar__options__container__name}>{name}</span>
                </div>)}
            </div>
        </div>
    )
}

export default Navbar