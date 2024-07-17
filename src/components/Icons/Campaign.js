const CampaignIcon = ({ className, ...props }) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="25" cy="25" r="25" fill="#7B40F2" />
      <path
        d="M32.9 25C36.15 25 37.5 23.75 36.3 19.65C35.4875 16.8875 33.1125 14.5125 30.35 13.7C26.25 12.5 25 13.85 25 17.1V20.7C25 23.75 26.25 25 28.75 25H32.9Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 28.375C33.8375 34.1625 28.2875 38.3625 21.975 37.3375C17.2375 36.575 13.425 32.7625 12.65 28.025C11.6375 21.7375 15.8125 16.1875 21.575 15.0125"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CampaignIcon;
