import { TEC_ICON_SIZE } from '../constants'

export function NextJS() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 180 180"
      width={TEC_ICON_SIZE}
      height={TEC_ICON_SIZE}
    >
      <circle cx="90" cy="90" r="90" fill="black" />

      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="url(#nextjs-gradient-1)"
      />

      <rect
        x="115"
        y="54"
        width="12"
        height="72"
        fill="url(#nextjs-gradient-2)"
      />

      <defs>
        <linearGradient
          id="nextjs-gradient-1"
          x1="109"
          y1="116.5"
          x2="144.5"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>

        <linearGradient
          id="nextjs-gradient-2"
          x1="121"
          y1="54"
          x2="120.799"
          y2="106.875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
