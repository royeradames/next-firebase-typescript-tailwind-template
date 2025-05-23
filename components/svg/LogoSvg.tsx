import React from "react";

interface LogoSvgProps {
  width?: string;
  height?: string;
  className?: string;
}

export default function LogoSvg({ width = "2.5rem", height = "2.5rem", className = "" }: LogoSvgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ fill: "#93c5fd" }}
    >
      <g>
        <circle
          style={{ fillRule: "evenodd", strokeWidth: "0.199293" }}
          cx="76.168777"
          cy="77.820572"
          r="20.173101"
        />
        <rect
          style={{ strokeWidth: "0.220491" }}
          width="38.641434"
          height="38.641434"
          x="3.990803"
          y="57.647469"
          ry="10"
          rx="10"
        />
        <rect
          style={{ strokeWidth: "0.220491" }}
          width="38.641434"
          height="38.641434"
          x="3.990803"
          y="4.7903376"
          ry="10"
          rx="10"
        />
        <rect
          style={{ strokeWidth: "0.220491" }}
          width="38.641434"
          height="38.641434"
          x="56.847935"
          y="4.7903376"
          ry="10"
          rx="10"
        />
        <rect
          style={{ fill: "none", strokeWidth: "0.264583" }}
          width="174.28264"
          height="143.10364"
          x="17.188425"
          y="70.352623"
          rx="10.000007"
          ry="10.000007"
        />
        <rect
          style={{ fill: "none", strokeWidth: "0.264583" }}
          width="160.69179"
          height="155.89502"
          x="17.188425"
          y="70.352623"
          rx="10.000007"
          ry="9.1873646"
        />
        <rect
          style={{ fill: "none", strokeWidth: "0.264583" }}
          width="129.5193"
          height="133.91626"
          x="36.368999"
          y="79.540001"
          rx="10.000007"
          ry="9.1873646"
        />
        <rect
          style={{ fill: "none", strokeWidth: "0.264583" }}
          width="5.5895066"
          height="27.181698"
          x="150.29878"
          y="186.27457"
          rx="10.000007"
          ry="9.1873646"
        />
        <rect
          style={{ fill: "none", strokeWidth: "0.188065" }}
          width="91.77343"
          height="93.187759"
          x="3.990803"
          y="4.7903376"
          rx="10.000007"
          ry="9.1873646"
        />
      </g>
    </svg>
  );
} 