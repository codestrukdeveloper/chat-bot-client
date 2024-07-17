const PluginIcon = ({ className, ...props }) => {
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
        d="M13.9625 19.3L25 25.6875L35.9625 19.3375"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 37.0125V25.675"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.4125 13.1L15.7375 16.8C14.225 17.6375 12.9875 19.7375 12.9875 21.4625V28.525C12.9875 30.25 14.225 32.35 15.7375 33.1875L22.4125 36.9C23.8375 37.6875 26.175 37.6875 27.6 36.9L34.275 33.1875C35.7875 32.35 37.025 30.25 37.025 28.525V21.4625C37.025 19.7375 35.7875 17.6375 34.275 16.8L27.6 13.0875C26.1625 12.3 23.8375 12.3 22.4125 13.1Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PluginIcon;
