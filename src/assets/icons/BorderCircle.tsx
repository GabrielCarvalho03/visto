const BorderCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ?? "476"}
    height={props.height ?? "87"}
    fill="none"
    viewBox="0 0 476 87"
    className={props.className}
  >
    <path
      stroke="url(#paint0_linear_0_214)"
      d="M1 0v26c0 33.137 26.863 60 60 60h415"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_0_214"
        x1="238.5"
        x2="238.5"
        y1="86"
        y2="0.233"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8D8D8D" stopOpacity="0.5"></stop>
        <stop offset="0.842" stopColor="#878889" stopOpacity="0"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default BorderCircle;
