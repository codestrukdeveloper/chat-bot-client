const ChatIcon = ({ className, ...props }) => {
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
        d="M32.475 23.4875V28.4875C32.475 28.8125 32.4625 29.125 32.425 29.425C32.1375 32.8 30.15 34.475 26.4875 34.475H25.9875C25.675 34.475 25.375 34.625 25.1875 34.875L23.6875 36.875C23.025 37.7625 21.95 37.7625 21.2875 36.875L19.7875 34.875C19.625 34.6625 19.2625 34.475 18.9875 34.475H18.4875C14.5 34.475 12.5 33.4875 12.5 28.4875V23.4875C12.5 19.825 14.1875 17.8375 17.55 17.55C17.85 17.5125 18.1625 17.5 18.4875 17.5H26.4875C30.475 17.5 32.475 19.5 32.475 23.4875Z"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.4751 18.4875V23.4875C37.4751 27.1625 35.7875 29.1375 32.425 29.425C32.4625 29.125 32.4751 28.8125 32.4751 28.4875V23.4875C32.4751 19.5 30.475 17.5 26.4875 17.5H18.4875C18.1625 17.5 17.85 17.5125 17.55 17.55C17.8375 14.1875 19.825 12.5 23.4875 12.5H31.4875C35.475 12.5 37.4751 14.5 37.4751 18.4875Z"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.8694 26.5625H26.8806"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.4944 26.5625H22.5056"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.1194 26.5625H18.1306"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChatIcon;
