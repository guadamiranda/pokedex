"use client"
import Style from './pokedexCard.module.scss'
import { useEffect, useState } from 'react'
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'
import {BsList} from 'react-icons/bs'
import {BiArrowBack} from 'react-icons/bi'
import pokemonServices from '@/services/getPokemon'

const PokedexCard = () => {
    const [nameKeybord, setNameKeyboard] = useState("") 
    const [actualPokemon, setActualPokemon] = useState([])
    const [pokemonSprite, setPokemonSprite] = useState("")
    const [pokemonDescription, setPokemonDescription] = useState("")
    const [pokemonOrder, setActualPokemonNumber] = useState(0)

    const abecedary=["A", "B", "C", "D", "E", "F", "G", "H", "I",
                     "J", "K", , "L", "M", "N", "O", "P", "Q", "R",
                     "S", "T", "U", "V", "W", "X", "Y", "Z"]

    const numbers=["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-"]


    const setNameInKeyboard = (letter:string) => {
        setNameKeyboard(nameKeybord + letter)
    }

    const deleteLetter = () => {
        setNameKeyboard(nameKeybord.slice(0, -1))
    }

    const setAllInfo = (previousPokemon:any, newPokemonOrder:any, pokemonAllEntries:any, pokemonDescription:any) => {
        setActualPokemon(previousPokemon)
        setActualPokemonNumber(newPokemonOrder)
        for(let i = 0; i < pokemonAllEntries.length; i++) {
            if(pokemonAllEntries[i].language.name == 'en'){
                setPokemonDescription(pokemonDescription.flavor_text_entries[i].flavor_text)
            }
        }
        setPokemonSprite(previousPokemon.sprites.front_default)   
    }

    const nextPokemon = async(number:any) => {
        const newPokemonOrder = pokemonOrder + number
        const previousPokemon:any = await pokemonServices.getPokemon(newPokemonOrder)
        const pokemonDescription:any = await pokemonServices.getDescriptionPokemon(newPokemonOrder)
        const pokemonAllEntries = pokemonDescription.flavor_text_entries

        setAllInfo(previousPokemon, newPokemonOrder, pokemonAllEntries, pokemonDescription)  
    }

    const getPokemonByName = async() => {
        const lowerCaseName = nameKeybord.toLowerCase()

        const pokemon:any = await pokemonServices.getPokemon(lowerCaseName)
        const newPokemonOrder:any = pokemon.order
        const pokemonDescription:any = await pokemonServices.getDescriptionPokemon(newPokemonOrder)
        const pokemonAllEntries = pokemonDescription.flavor_text_entries

        setAllInfo(pokemon, newPokemonOrder, pokemonAllEntries, pokemonDescription)
        setNameKeyboard('')
    }

    useEffect(() => {
        nextPokemon(1)
    }, [])

    return(
        <div className={Style.pokedexcard}>
            <div onClick={() => nextPokemon(-1)} className={Style.pokedexcard__semicircleleft}>
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
                            <div className={Style.pokedexcard__left__information__screen__screen__black}>
                                <img src={pokemonSprite}></img>
                            </div>
                        </div>
                        <div className={Style.pokedexcard__left__information__screen__footer}>
                            <div className={Style.pokedexcard__left__information__screen__footer__circle}></div>
                            <div className={Style.pokedexcard__left__information__screen__footer__lines}><BsList/></div>
                        </div>
                    </div>
                    <div className={Style.pokedexcard__left__information__nameSection}>
                        <div className={Style.pokedexcard__left__information__nameSection__button}></div>
                        <div className={Style.pokedexcard__left__information__nameSection__screen}>
                            <span>{actualPokemon.name}</span>
                        </div>
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
                    <div className={Style.pokedexcard__right__body__header}>
                        <div className={Style.pokedexcard__left__information__nameSection__screen}>{nameKeybord}</div>
                        <div className={Style.pokedexcard__left__information__nameSection__button} onClick = {() => getPokemonByName()}></div> 
                    </div>
                    <div className={Style.pokedexcard__right__body__keyboard}>
                        <div className={Style.pokedexcard__right__body__keyboard__abecedary}>
                            {abecedary.map((letter) => <div key={letter} onClick={() => setNameInKeyboard(letter)}className={Style.pokedexcard__right__body__keyboard__abecedary__letter}>{letter}</div>)}
                        </div>
                        <div className={Style.pokedexcard__right__body__keyboard__numbers}>
                            {numbers.map((number) => <div key={number} onClick={() => setNameInKeyboard(number)}className={Style.pokedexcard__right__body__keyboard__numbers__number}>{number}</div>)}
                            <div onClick={() => deleteLetter()} className={Style.pokedexcard__right__body__keyboard__numbers__number}><BiArrowBack/></div>
                        </div>
                        <div className={Style.pokedexcard__right__body__keyboard__space}></div>
                    </div>
                    <div className={Style.pokedexcard__right__body__description}>
                        <div className={Style.pokedexcard__right__body__description__screen}>
                            {pokemonDescription}
                        </div>
                        <div className={Style.pokedexcard__right__body__description__footer}></div>
                    </div>
                    
                </div>
            </div>
            <div onClick={() => nextPokemon(1)}className={Style.pokedexcard__semicircleright}>
                <AiFillCaretRight/>
            </div>
        </div>
    )
}

export default PokedexCard