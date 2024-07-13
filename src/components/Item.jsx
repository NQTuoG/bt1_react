import React from 'react'
const pokemons = [
  {
      name: "Pikachu",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
      type: "Electric",
      damage: 55,
      defense: 40,
      attack: 90
  },
  {
      name: "Charizard",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
      type: "Fire/Flying",
      damage: 84,
      defense: 78,
      attack: 100
  },
  {
      name: "Bulbasaur",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
      type: "Grass/Poison",
      damage: 49,
      defense: 49,
      attack: 65
  },
  {
      name: "Squirtle",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      type: "Water",
      damage: 48,
      defense: 65,
      attack: 50
  },
  {
      name: "Jigglypuff",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
      type: "Normal/Fairy",
      damage: 45,
      defense: 20,
      attack: 45
  },
  {
      name: "Meowth",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",
      type: "Normal",
      damage: 45,
      defense: 35,
      attack: 90
  },
  {
      name: "Gengar",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
      type: "Ghost/Poison",
      damage: 65,
      defense: 60,
      attack: 110
  },
  {
      name: "Eevee",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
      type: "Normal",
      damage: 55,
      defense: 50,
      attack: 55
  },

  ];
const Item = () => {
  return (
    <div>
        <div className='container'>
            <div className=' grid grid-cols-4 gap-8 px-40 '>
                {pokemons.map((item, index)=>{
                    const{image, name,type,damage,defense,attack} =item;
                    return(
                      <div>   
                      <div className='bg-slate-400 rounded-lg '>
                          <>
                              <img src={image} alt="" />
                              <div className='px-5'>
                                  <h3>Tên: {name}</h3>
                                  <h5>Hệ: {type}</h5>
                                  <p>Phòng Thủ: {defense}</p>
                                  <p>Tấn Công: {attack}</p>
                                  <button className=' flex items-center  py-2 px-5 rounded-lg border space-x-3 border-black '>xem chi tiết</button>
                              </div>
                          </>
                      </div>
                  </div>
                    );
                } )}
            </div>
        </div>
    </div>



    )
}

export default Item
