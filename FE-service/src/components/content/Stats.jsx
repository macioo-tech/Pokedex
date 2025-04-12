import { Corner, Type } from "../index";

const Stats = ({ win, lost }) => {
  return (
    <Corner>
        <Type variant="small">W: {win}</Type>
        <Type variant="small">L: {lost}</Type>
    </Corner>
  );
};

export default Stats;
