export interface SlippageFormValues {
  slippage: string;
}
export interface ISlippageModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onFinish: (values: SlippageFormValues) => void;
}
