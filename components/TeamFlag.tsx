/* eslint-disable @next/next/no-img-element */
const TeamFlag: React.FC<{ team: Team; width: string }> = ({ team, width }) => {
  return (
    <img
      style={{ width: width }}
      className="rounded-sm"
      alt={`${team.name} flag`}
      src={`https://flagicons.lipis.dev/flags/4x3/${team.flagCode}.svg`}
    />
  );
};

export default TeamFlag;
