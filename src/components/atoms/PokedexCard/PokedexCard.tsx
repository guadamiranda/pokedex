import Style from './pokedexCard.module.scss'
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'
import {BsList} from 'react-icons/bs'

const PokedexCard = () => {

    const abecedary=["A", "B", "C", "D", "E", "F", "G", "H", "I",
                     "J", "K", "M", "N", "O", "P", "Q", "R",
                     "S", "T", "U", "V", "W", "X", "Y", "Z"]

    const numbers=["1", "2", "3", "4", "5", "6", "7", "8", "9"]

    return(
        <div className={Style.pokedexcard}>
            <div className={Style.pokedexcard__semicircleleft}>
                <AiFillCaretLeft/>
            </div>
            <div className={Style.pokedexcard__left}>
                <div className={Style.pokedexcard__left__circles}>
                    <div className={Style.pokedexcard__left__circles__big}></div>
                    <div className={Style.pokedexcard__left__circles__one}></div>
                    <div className={Style.pokedexcard__left__circles__two}></div>
                    <div className={Style.pokedexcard__left__circles__three}></div>
                </div>
                <div className={Style.pokedexcard__left__details}>
                    <div className={Style.pokedexcard__left__details__form1}></div>
                    <div className={Style.pokedexcard__left__details__form}></div>
                </div>
                <div className={Style.pokedexcard__left__information}>
                    <div className={Style.pokedexcard__left__information__screen}>
                        <div className={Style.pokedexcard__left__information__screen__header}>
                            <div className={Style.pokedexcard__left__information__screen__header__circle}></div>
                            <div className={Style.pokedexcard__left__information__screen__header__circle}></div>
                        </div>
                        <div className={Style.pokedexcard__left__information__screen__screen}>
                            <div className={Style.pokedexcard__left__information__screen__screen__black}></div>
                        </div>
                        <div className={Style.pokedexcard__left__information__screen__footer}>
                            <div className={Style.pokedexcard__left__information__screen__footer__circle}></div>
                            <div className={Style.pokedexcard__left__information__screen__footer__lines}><BsList/></div>
                        </div>
                    </div>
                    <div className={Style.pokedexcard__left__information__nameSection}>
                        <div className={Style.pokedexcard__left__information__nameSection__button}></div>
                        <div className={Style.pokedexcard__left__information__nameSection__screen}></div>
                    </div>
                    <div className={Style.pokedexcard__left__information__footer}>
                        <div className={Style.pokedexcard__left__information__footer__left}>
                            <div className={Style.pokedexcard__left__information__footer__left__buttons}>
                                <div className={Style.pokedexcard__left__information__footer__left__buttons__button1}></div>
                                <div className={Style.pokedexcard__left__information__footer__left__buttons__button2}></div>
                            </div>
                            <div className={Style.pokedexcard__left__information__footer__left__screen}>
                                <div className={Style.pokedexcard__left__information__footer__left__screen__screen}></div>
                                <div className={Style.pokedexcard__left__information__footer__left__screen__footer}>
                                    <div className={Style.pokedexcard__left__information__footer__left__screen__footer__point}></div>
                                    <div className={Style.pokedexcard__left__information__footer__left__screen__footer__point}></div>
                                    <div className={Style.pokedexcard__left__information__footer__left__screen__footer__line}></div>
                                </div>
                            </div>
                        </div>
                        <div className={Style.pokedexcard__left__information__footer__right}>
                        <div className={Style.pokedexcard__left__information__footer__left__buttons}></div>
                            <div className={Style.pokedexcard__left__information__footer__right__top}></div>
                            <div className={Style.pokedexcard__left__information__footer__right__mid}>
                                <div className={Style.pokedexcard__left__information__footer__right__mid__circle}></div>
                            </div>
                            <div className={Style.pokedexcard__left__information__footer__right__bot}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.pokedexcard__right}>
                <div className={Style.pokedexcard__right__header}></div>
                <div className={Style.pokedexcard__right__body}>
                    <div className={Style.pokedexcard__right__body__header}></div>
                    <div className={Style.pokedexcard__right__body__keyboard}>
                        <div className={Style.pokedexcard__right__body__keyboard__abecedary}>
                            {abecedary.map((letter) => <div className={Style.pokedexcard__right__body__keyboard__abecedary__letter}>{letter}</div>)}
                        </div>
                        <div className={Style.pokedexcard__right__body__keyboard__numbers}>
                            {numbers.map((number) => <div className={Style.pokedexcard__right__body__keyboard__numbers__number}>{number}</div>)}
                        </div>
                        <div className={Style.pokedexcard__right__body__keyboard__space}></div>
                    </div>
                    <div className={Style.pokedexcard__right__body__description}>
                        <div className={Style.pokedexcard__right__body__description__screen}></div>
                        <div className={Style.pokedexcard__right__body__description__footer}></div>
                    </div>
                    
                </div>
            </div>
            <div className={Style.pokedexcard__semicircleright}>
                <AiFillCaretRight/>
            </div>
        </div>
    )
}

export default PokedexCard