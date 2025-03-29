const PokemonCard = ({ name, img, height, weight, base, ability }) => {
  return (
    <div className="flex flex-col justify-center items-center p-10 gap-y-2 border border-indigo-800 rounded-lg shadow-lg ">
      <div className="text-[1.5rem] font-mono font-bold">{name}</div>
      <img src={img} alt={name} className="object-cover" />
      <div className="text-center flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col justify-between items-center px-10">
          <div>{height}</div>
          <div className="font-mono font-bold">Height</div>
          <div>{weight}</div>
          <div className="font-mono font-bold">Weight</div>
        </div>
        <div className="flex flex-col justify-between items-center px-10">
          <div>{base}</div>
          <div className="font-mono font-bold">Base experience</div>
          <div>{ability}</div>
          <div className="font-mono font-bold">Ability</div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
