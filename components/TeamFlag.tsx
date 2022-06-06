/* eslint-disable @next/next/no-img-element */
const TeamFlag: React.FC<{ team: Team; width: string }> = ({ team, width }) => {
  return (
    <img
      style={{ width: width }}
      alt={`${team.name} flag`}
      src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${team.flagCode}.svg`}
    />
  );
};

export default TeamFlag;
