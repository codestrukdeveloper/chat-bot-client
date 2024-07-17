const LogoutIcon = ({ className, ...props }) => {
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
        d="M21.125 19.45C21.5125 14.95 23.825 13.1125 28.8875 13.1125H29.05C34.6375 13.1125 36.875 15.35 36.875 20.9375V29.0875C36.875 34.675 34.6375 36.9125 29.05 36.9125H28.8875C23.8625 36.9125 21.55 35.1 21.1375 30.675"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 25H28.6"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.8125 20.8125L30 25L25.8125 29.1875"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LogoutIcon;
