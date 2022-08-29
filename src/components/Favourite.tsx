import React, {Dispatch, SetStateAction} from 'react';
import Jokes, {IJokeContent} from "./Jokes/Jokes";
interface IFavourite {
    isFavourite:boolean
    jokes:Array<IJokeContent>
    isClicked:boolean
    setIsFavourite: Dispatch<SetStateAction<boolean>>
}

const Favourite = ({isFavourite, setIsFavourite, jokes, isClicked}: IFavourite) => {
    return (
        <div>
            {isFavourite &&
                <Jokes isFavourite={isFavourite} setIsFavourite={setIsFavourite}  jokes={jokes} isClicked={isClicked} />
            }
        </div>
    );
};

export default Favourite;