import Style from './pokedexCard.module.scss'
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'

const PokedexCard = () => {
    return(
        <div className={Style.pokedexcard}>
            <div className={Style.pokedexcard__semicircleleft}>
                <AiFillCaretLeft/>
            </div>
            <div className={Style.pokedexcard__left}></div>
            <div className={Style.pokedexcard__right}>
                <div className={Style.pokedexcard__right__header}></div>
                <div className={Style.pokedexcard__right__body}></div>
            </div>
            <div className={Style.pokedexcard__semicircleright}>
                <AiFillCaretRight/>
            </div>
        </div>
    )
}

export default PokedexCard