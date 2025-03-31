import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { Stats, Title } from "../index";

const Card = ({ name, img, height, weight, base, ability }) => {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <div className="relative border border-indigo-800 rounded-lg shadow-lg hover:shadow-2xl transition delay-150 duration-300 hover:scale-110">
      {isLoggedIn && <Stats win={1} loss={1} />}
      <button className="flex flex-col justify-center items-center p-10 gap-y-2  ">
        <Title>{name}</Title>
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
      </button>
    </div>
  );
};

export default Card;
