"use client"
import Style from './pokedexCard.module.scss'
import { useEffect, useState } from 'react'
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'
import {BsList} from 'react-icons/bs'
import {BiArrowBack, BiDownArrow, BiLeftArrow, BiUpArrow, BiRightArrow, } from 'react-icons/bi'
import {FaRegStar} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs'
import {VscCircleSmall} from 'react-icons/vsc'
import pokemonServices from '@/services/getPokemon'

import bug from "../../../assets/img/Type_Bug.webp"
import dark from "../../../assets/img/Type_Dark.webp"
import dragon from "../../../assets/img/Type_Dragon.webp"
import electric from "../../../assets/img/Type_Electric.webp"
import fairy from "../../../assets/img/Type_Fairy.webp"
import fighting from '../../../assets/img/Type_Fighting.webp'
import fire from "../../../assets/img/Type_Fire.webp"
import flying from '../../../assets/img/Type_Flying.webp'
import ghost from "../../../assets/img/Type_Ghost.webp"
import grass from "../../../assets/img/Type_Grass.webp"
import ground from '../../../assets/img/Type_Ground.webp'
import ice from "../../../assets/img/Type_Ice.webp"
import normal from '../../../assets/img/Type_Normal.webp'
import poison from '../../../assets/img/Type_Poison.webp'
import psychic from '../../../assets/img/Type_Psychic.webp'
import rock from '../../../assets/img/Type_Rock.webp'
import steel from "../../../assets/img/Type_Steel.webp"
import unknown from "../../../assets/img/UnknownIC_Colo.png"
import water from '../../../assets/img/Type_Water.webp'


const PokedexCard = () => {
    const [nameKeybord, setNameKeyboard] = useState("") 
    const [actualPokemon, setActualPokemon] = useState([])
    const [pokemonSprite, setPokemonSprite] = useState("")
    const [pokemonDescription, setPokemonDescription] = useState("")
    const [pokemonOrder, setActualPokemonNumber] = useState(0)
    const [pokemonTypes, setPokemonTypes] = useState([])
    const [language, setLanguaje] = useState('en')
    const [isShiny, setIsShiny] = useState(false)

    const abecedary=["A", "B", "C", "D", "E", "F", "G", "H", "I",
                     "J", "K", "L", "M", "N", "O", "P", "Q", "R",
                     "S", "T", "U", "V", "W", "X", "Y", "Z"]

    const numbers=["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-"]

    const types = [{name: "bug", img: bug.src, color: "#a4b31c"}, {name: "dark", img: dark.src, color: "#503a2c"}, 
                   {name: "dragon", img: dragon.src, color: "#755de1"}, {name: "electric", img: electric.src, color: "#fbb914"},
                   {name: "fairy", img: fairy.src, color: "#f4aff4"}, {name: "fighting", img: fighting.src, color: "#81311a"}, 
                   {name: "fire", img: fire.src, color: "#ef3f0b"}, {name: "flying", img: flying.src, color: "#8b9dee"},
                   {name: "ghost", img: ghost.src, color: "#5e5eb1"}, {name: "grass", img: grass.src, color: "#71c233"},
                   {name: "ground", img: ground.src, color: "#d6b455"}, {name: "ice", img: ice.src, color: "#9ce4fc"}, 
                   {name: "normal", img: normal.src, color: "#ccc6bd"}, {name: "poison", img: poison.src, color: "#8d408f"},
                   {name: "psychic", img: psychic.src, color: "#ef4581"}, {name: "rock", img: rock.src, color: "#c5af6a"}, 
                   {name: "steel", img: steel.src, color: "#b4b4c3"}, {name: "water",img: water.src, color: "#3297fb"}, 
                   {name: "unknown", img: unknown, color: "#6bc694"}, {name: "shadow", img: dark.src, color: "#503a2c"}]

    const setNameInKeyboard = (letter:string) => {
        setNameKeyboard(nameKeybord + letter)
    }

    const deleteLetter = () => {
        setNameKeyboard(nameKeybord.slice(0, -1))
    }

    const setTypes = (pokemonObjectTypes:any) => {
        let pokemonTypes:any = [];

        for(let i = 0; i < pokemonObjectTypes.length; i++) {
            const pokemonTypeName = pokemonObjectTypes[i].type.name
            pokemonTypes.push(types.find(type => type.name === pokemonTypeName))  
        }

        return pokemonTypes
    }

    const setDescription = (pokemonAllEntries:any, pokemonDescriptions:any) => {
        
        for(let i = 0; i < pokemonAllEntries.length; i++) {
            if(pokemonAllEntries[i].language.name === language){
                setPokemonDescription(pokemonDescriptions.flavor_text_entries[i].flavor_text)
            }
        }
    }

    const setTypesColors = (pokemonTypes:any) => {
        let button1 = document.getElementById('button1')
        let button2 = document.getElementById('button2')

        button1.style.backgroundColor = pokemonTypes[0].color
        button2.style.backgroundColor = (pokemonTypes.length === 1 ? '#a3a3a3' : pokemonTypes[1].color)
    }

    const setAllInfo = (pokemonInfo:any, newPokemonOrder:any, pokemonAllEntries:any, pokemonDescriptions:any) => {
        const pokemonObjectTypes = pokemonInfo.types
        let pokemonTypes:any = [];

        pokemonTypes = setTypes(pokemonObjectTypes)
        console.log(pokemonTypes)

        pokemonAllEntries.length === 0 ? setPokemonDescription('Description not available') : setDescription(pokemonAllEntries, pokemonDescriptions)

        setPokemonTypes(pokemonTypes)
        setActualPokemon(pokemonInfo)
        setActualPokemonNumber(newPokemonOrder)
        setPokemonSprite(pokemonInfo.sprites.front_default)
        setIsShiny(false)  
        setTypesColors(pokemonTypes)
    }

    const setPokemon = async(pokemonInfo:any, newPokemonOrder: any, ) => {
        const pokemonDescriptions:any = await pokemonServices.getDescriptionPokemon(newPokemonOrder)
        const pokemonAllEntries = pokemonDescriptions.flavor_text_entries

        setAllInfo(pokemonInfo, newPokemonOrder, pokemonAllEntries, pokemonDescriptions)
    }

    const setPokemonMissing = () => {
        const pokemonTypes = ['unknown']
        const pokemonInfo = {name: 'MissingNo', id: '000'}

        setPokemonTypes(pokemonTypes)
        setActualPokemon(pokemonInfo)
    }

    const nextPokemon = async(number:any) => {
        const newPokemonOrder = pokemonOrder + number

        const pokemonInfo:any = await pokemonServices.getPokemon(newPokemonOrder)
        console.log(pokemonInfo)
        pokemonInfo === undefined ? setPokemonMissing() : setPokemon(pokemonInfo, newPokemonOrder)
          
    }

    const getPokemonByName = async() => {
        const lowerCaseName = nameKeybord.toLowerCase()

        const pokemonInfo:any = await pokemonServices.getPokemon(lowerCaseName)
        const newPokemonOrder:any = pokemonInfo.id
        pokemonInfo === undefined ? setPokemonMissing() : setPokemon(pokemonInfo, newPokemonOrder)

        setNameKeyboard('')
    }

    const changeDescriptionLanguaje = async() => {
        const pokemonDescription:any = await pokemonServices.getDescriptionPokemon((pokemonOrder === 0 ? 1 : pokemonOrder))
        const pokemonAllEntries = pokemonDescription?.flavor_text_entries

        for(let i = 0; i < pokemonAllEntries.length; i++) {
            if(pokemonAllEntries[i].language.name === language){
                setPokemonDescription(pokemonDescription.flavor_text_entries[i].flavor_text)
            }
        }
    }

    const changeSprite = async() => {
        const shinySprite = actualPokemon.sprites.front_shiny
        const defaultSprite = actualPokemon.sprites.front_default
        !isShiny ? setPokemonSprite(shinySprite === null ? defaultSprite : shinySprite) : setPokemonSprite(defaultSprite) 
        setIsShiny(!isShiny)
    }

    useEffect(() => {
        nextPokemon(1)
    }, [])

    useEffect(() => {
        changeDescriptionLanguaje()
    }, [language])

    return(
        <div className={Style.pokedexcard}>
            <div onClick={() => nextPokemon(-1)} id='leftButton' className={Style.pokedexcard__semicircleleft}>
                <AiFillCaretLeft/>
            </div>
            <div className={Style.pokedexcard__left}>
                <div className={Style.pokedexcard__left__circles}>
                    <div className={Style.pokedexcard__left__circles__big}></div>
                    <div id='leftButtonLight' className={Style.pokedexcard__left__circles__one}></div>
                    <div id='rightButtonLight' className={Style.pokedexcard__left__circles__two}></div>
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
                        <div onClick={() => changeSprite()}className={Style.pokedexcard__left__information__nameSection__button}><FaRegStar/></div>
                        <div className={Style.pokedexcard__left__information__nameSection__screen}>
                            <span>{actualPokemon.id} | {actualPokemon.name}</span>
                        </div>
                    </div>
                    <div className={Style.pokedexcard__left__information__footer}>
                        <div className={Style.pokedexcard__left__information__footer__left}>
                            <div className={Style.pokedexcard__left__information__footer__left__buttons}>
                                <div id='button1' className={Style.pokedexcard__left__information__footer__left__buttons__button1}></div>
                                <div id='button2' className={Style.pokedexcard__left__information__footer__left__buttons__button2}></div>
                            </div>
                            <div className={Style.pokedexcard__left__information__footer__left__screen}>
                                <div className={Style.pokedexcard__left__information__footer__left__screen__screen}>
                                    {pokemonTypes.map(type => <img src={type.img}></img>)}
                                </div>
                                <div className={Style.pokedexcard__left__information__footer__left__screen__footer}>
                                    <div className={Style.pokedexcard__left__information__footer__left__screen__footer__point}></div>
                                    <div className={Style.pokedexcard__left__information__footer__left__screen__footer__point}></div>
                                    <div className={Style.pokedexcard__left__information__footer__left__screen__footer__line}></div>
                                </div>
                            </div>
                        </div>
                        <div className={Style.pokedexcard__left__information__footer__right}>
                        <div className={Style.pokedexcard__left__information__footer__left__buttons}></div>
                            <div className={Style.pokedexcard__left__information__footer__right__top}><BiUpArrow/></div>
                            <div className={Style.pokedexcard__left__information__footer__right__center}>
                                <div className={Style.pokedexcard__left__information__footer__right__center__boxMiddleBorderLeft}><BiLeftArrow/></div>
                                <div className={Style.pokedexcard__left__information__footer__right__center__boxMiddle}>
                                    <div className={Style.pokedexcard__left__information__footer__right__center__circle}><VscCircleSmall/></div>
                                </div>
                                <div className={Style.pokedexcard__left__information__footer__right__center__boxMiddleBorderRight}><BiRightArrow/></div>
                            </div>
                            <div className={Style.pokedexcard__left__information__footer__right__bot}><BiDownArrow/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.pokedexcard__right}>
                <div className={Style.pokedexcard__right__header}></div>
                <div className={Style.pokedexcard__right__body}>
                    <div className={Style.pokedexcard__right__body__header}>
                        <div className={Style.pokedexcard__left__information__nameSection__screen}>{nameKeybord}</div>
                        <div className={Style.pokedexcard__left__information__nameSection__button} onClick = {() => getPokemonByName()}><BsSearch/></div> 
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
                        <div className={Style.pokedexcard__right__body__description__footer}>
                            <div onClick={() => setLanguaje('en')} className={Style.pokedexcard__right__body__description__footer__buttonLang}><span>en</span></div>
                            <div onClick={() => setLanguaje('es')} className={Style.pokedexcard__right__body__description__footer__buttonLang}><span>es</span></div>
                            <div onClick={() => setLanguaje('ja-Hrkt')} className={Style.pokedexcard__right__body__description__footer__buttonLang}><span>jp</span></div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div id='rightButton' onClick={() => nextPokemon(1)}className={Style.pokedexcard__semicircleright}>
                <AiFillCaretRight/>
            </div>
        </div>
    )
}

export default PokedexCard