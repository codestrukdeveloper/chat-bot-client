const VisitorsIcon = ({ className, ...props }) => {
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
        d="M25 37.5C31.9036 37.5 37.5 31.9036 37.5 25C37.5 18.0964 31.9036 12.5 25 12.5C18.0964 12.5 12.5 18.0964 12.5 25C12.5 31.9036 18.0964 37.5 25 37.5Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 13.75H21.25C18.8125 21.05 18.8125 28.95 21.25 36.25H20"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.75 13.75C31.1875 21.05 31.1875 28.95 28.75 36.25"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.75 30V28.75C21.05 31.1875 28.95 31.1875 36.25 28.75V30"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.75 21.25C21.05 18.8125 28.95 18.8125 36.25 21.25"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default VisitorsIcon;
