import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import like from '../../images/Vector.svg'
import message from '../../images/message.png'
import heart from '../../images/heart.svg'


interface IJokeContent {
    created_at: string
    updated_at:string
    id:string
    value:string
    categories: Array<string>
    url:string
    icon_url:string
}

interface IJokesItem {
    joke:IJokeContent
    setIsFavourite: Dispatch<SetStateAction<boolean>>
    isFavourite:boolean
}

const JokesItem = ({joke, setIsFavourite, isFavourite}:IJokesItem) => {
    const [isFav, setIsFav] = useState(false)


    function saveToLocalStorage  () {
        if(isFav) {
            debugger;
            localStorage.setItem('favourite', joke.value)
        }
    }

    function favClick () {
        setIsFav(!isFav)
    }

    useEffect(() => {
        saveToLocalStorage()
    }, [isFav])

    return (
        <div className='jokes__card'>
            <img onClick={favClick} className='like'
                 src={isFav ? heart : like} alt=""/>
            <img className='message__img' src={message} alt=""/>
            <div className="jokes__body">
                <a href="#"> {joke.id}</a>
                <p className='joke__text'>{joke.value}</p>
                <div className="jokes__info-container">
                    <p className='jokes__update'>{joke.updated_at}</p>
                    {joke.categories?.length > 0 &&
                        <p className='jokes__category'>{joke.categories[0]}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default JokesItem;