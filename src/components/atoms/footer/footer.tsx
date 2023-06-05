import Style from './footer.module.scss'
import { TbPokeball } from 'react-icons/tb'

const Footer = () => {
    return(
        <div className={Style.footer}>
            <div className={Style.footer__header}>
                <div className={Style.footer__header__logo}>
                    <TbPokeball className={Style.footer__header__logo__icon}/>
                    <span className={Style.footer__header__logo__text}>Made with ❤️ by Guadalupe Miranda </span>
                    <TbPokeball className={Style.footer__header__logo__icon}/>
                </div>
            </div>
        </div>
    )
}

export default Footer