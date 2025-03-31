const Stats = ({ win, loss }) => {
  return (

    <div className="absolute top-0 left-0 bg-gray-900 p-3 rounded-tl-lg rounded-br-lg">
      <div className="text-sm text-white text-center">W: {win}</div>
      <div className="text-sm text-white text-center">L: {loss}</div>
    </div>
  );
};

export default Stats;
