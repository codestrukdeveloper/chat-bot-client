const SettingIcon = ({ className, ...props }) => {
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
        d="M13.75 21.3875V28.6C13.75 31.25 13.75 31.25 16.25 32.9375L23.125 36.9125C24.1625 37.5125 25.85 37.5125 26.875 36.9125L33.75 32.9375C36.25 31.25 36.25 31.25 36.25 28.6125V21.3875C36.25 18.75 36.25 18.75 33.75 17.0625L26.875 13.0875C25.85 12.4875 24.1625 12.4875 23.125 13.0875L16.25 17.0625C13.75 18.75 13.75 18.75 13.75 21.3875Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 28.75C27.0711 28.75 28.75 27.0711 28.75 25C28.75 22.9289 27.0711 21.25 25 21.25C22.9289 21.25 21.25 22.9289 21.25 25C21.25 27.0711 22.9289 28.75 25 28.75Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SettingIcon;
