import FavoritesList from "./component/FavoritesList";
import MainCard from "./component/MainCard";
import CreateBtn from "./component/CreateBtn";
import Title from "./component/Title"
import { useState } from "react";

function App() {
  const favoritesList: string[] = [
    "https://cataas.com/cat/60b73094e04e18001194a309/says/react",
    "https://cataas.com//cat/5e9970351b7a400011744233/says/inflearn",
    "https://cataas.com/cat/595f280b557291a9750ebf65/says/JavaScript"
  ];

  const [counter, setCounter] = useState<number>(1);
  const [mainCat, setMainCat] = useState<number>(0);
  const [favorites, setFavorites] = useState<string[]>([...favoritesList])

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    counter >= 3 ? setCounter(1) : setCounter(counter + 1);
    mainCat >= 2 ? setMainCat(0) : setMainCat(mainCat + 1);
  }

  const handleHeartClick = () => {
    console.log('하트')
    setFavorites([...favoritesList, favoritesList[counter-1]])
  }
  
  return (
    <>
    <Title>{counter}번째 고양이 가라사대</Title>
    <CreateBtn handleFormSubmit={handleFormSubmit} />
    <MainCard img={favoritesList[mainCat]} handleHeartClick={handleHeartClick} />
    <FavoritesList favorites={favorites} />
    </>
  )
}

export default App;
