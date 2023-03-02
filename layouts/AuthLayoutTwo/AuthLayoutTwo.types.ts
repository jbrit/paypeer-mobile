export interface IAuthLayoutTwoProps {
  children: { component: React.ReactNode; heading: string; tagline: string }[];
  current: number;
  onBackClick: () => void;
}

export interface IStyledAuthLayoutTwoProps {
  length: number;
  current: number;
}
