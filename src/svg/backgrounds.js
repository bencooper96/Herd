import { chakra } from "@chakra-ui/react";

function HowItWorksBG(props) {
  return (
    <chakra.div w="100vw" position="absolute">
      <svg
        width="1153"
        height="1564"
        viewBox="0 0 1153 1564"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M276 9.29413C124 -19.4625 61.5 24.2942 0 61.8867V1479C0 1479 277.762 1512.52 577.5 1555.5C853 1595 1153 1479 1153 1479V6.29392C1025.5 -11.2057 869.5 72.7943 699 110.794C502.207 154.654 455.305 43.2166 276 9.29413Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="-24.4999"
            y1="243.5"
            x2="850.974"
            y2="866.761"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4FD3D1" />
            <stop offset="1" stop-color="#16A7A4" />
          </linearGradient>
        </defs>
      </svg>
    </chakra.div>
  );
}

export { HowItWorksBG };
