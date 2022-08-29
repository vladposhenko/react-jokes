import React, {useState} from 'react';
import './App.css';
import Form from "./components/Form";
import Favourite from "./components/Favourite";
import Jokes from "./components/Jokes/Jokes";
import axios from "axios";


function App() {
    const [jokes, setJoke] = useState([])
    const [value, setValue] = useState<string>('categories')
    const [isClicked, setIsClicked] = useState<boolean>(false)
    const [category , setCheckedCategory] = useState('')
    const [isFavourite, setIsFavourite] = useState<boolean>(false)

    async function handleJokeClick (e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        setIsClicked(true)
        if(value === 'random') {
            let response = await axios.get<never>('https://api.chucknorris.io/jokes/random')
            setJoke([response.data])
            console.log(jokes)
        } else if (value === 'categories') {
            let response = await axios.get<never>('https://api.chucknorris.io/jokes/random?category=' + category)
            setJoke([response.data])
            console.log(response.data)
        } else if (value === 'search') {
            let response = await axios.get('https://api.chucknorris.io/jokes/search?query=' + 'hello')
            // @ts-ignore
            setJoke(response.data.result)
        }
    }

    function changeChecked (e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value)
    }


  return (
        <div className='dark'>
            <div className="wrapper">
                <section className="jokes">
                    <div className="container">
                        <p className='logo'>MSI 2022</p>
                        <h1 className='title'>Hey! </h1>
                        <h5 className='description'>Let's try to find a joke for you</h5>
                        <Form setCheckedCategory={setCheckedCategory}
                              value={value}
                              handleJokeClick={handleJokeClick}
                              changeChecked={changeChecked}
                        />
                        <Jokes isFavourite={isFavourite} setIsFavourite={setIsFavourite}  jokes={jokes} isClicked={isClicked}/>
                    </div>
                </section>
                <aside className='favourite'>
                    <h2>Favourite</h2>
                    <Favourite setIsFavourite={setIsFavourite}  jokes={jokes} isClicked={isClicked} isFavourite={isFavourite}/>
                </aside>
            </div>
        </div>
  );
}

export default App;
