const Pause = ({ size = 16, color = "#000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
  >
    <circle cx="20" cy="20" r="20" fill="white" />
    <path
      d="M23.5 13V26.5M16 13V26.5"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Pause;
