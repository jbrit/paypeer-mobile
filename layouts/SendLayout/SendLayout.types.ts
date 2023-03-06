export interface ISendLayoutProps {
  children: { component: React.ReactNode; heading: string }[];
  current: number;
  onBackClick: () => void;
}

export interface IStyledSendLayoutProps {
  length: number;
  current: number;
}
