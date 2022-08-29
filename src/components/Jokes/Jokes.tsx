import React, {Dispatch, SetStateAction} from 'react';
import "../../css/style.css"
import JokesItem from "./JokesItem";

export interface IJokeContent {
    created_at: string
    updated_at:string
    id:string
    value:string
    categories: Array<string>
    url:string
    icon_url:string
}

interface IJokes  {
    jokes:Array<IJokeContent>
    isClicked:boolean
    isFavourite:boolean
    setIsFavourite: Dispatch<SetStateAction<boolean>>
}

const Jokes = ({jokes, isClicked, setIsFavourite, isFavourite}: IJokes) => {
    console.log(jokes)
    return (
        <ul className="jokes__list" id="btnGroup">
            {isClicked &&
                jokes.map((item:object, id:number) => {
                    debugger;
                    console.log(item)
                    // @ts-ignore
                    return (<JokesItem isFavourite={isFavourite} setIsFavourite={setIsFavourite} key={id} joke={item}/>)
                }  )
            }
        </ul>
    );
};

export default Jokes;