function FavoritesList({favorites}: any) {
  return (
    <ul className="favorites">
      {favorites.map((item: string, index: number) => {
        return (
          <li key={index}>
            <img 
              src={item}
              alt="고양이"
            />
          </li>
        )
      })}
    </ul>
  )
}

export default FavoritesList;