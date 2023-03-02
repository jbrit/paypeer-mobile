import useRefArray from "@/hooks/useRefArray";
import React from "react";
import Flexbox from "../Flexbox/Flexbox.styles";
import { StyledOtpInput } from "./OtpInput.styles";
import { IOtpInputProps } from "./OtpInput.types";

const OtpInput: React.FC<IOtpInputProps> = ({
  length = 4,
  setState,
  state,
}) => {
  const inputRefs = useRefArray<HTMLInputElement>(length);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    // if (event.target.value.trim()) {
    const newOtp = [...state];
    newOtp[index] = event.target.value;
    setState(newOtp);
    // }

    if (index < length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace" && !state[index] && index > 0) {
      event.preventDefault();
      const newOtp = [...state];
      newOtp[index - 1] = "";
      setState(newOtp);
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <Flexbox width="100%" flexGap="18px" justifyContent="center">
      {state.map((value, index) => (
        <StyledOtpInput
          key={index}
          type="text"
          maxLength={1}
          value={value}
          onChange={(event) => handleChange(event, index)}
          onKeyDown={(event) => handleKeyDown(event, index)}
          ref={inputRefs[index]}
        />
      ))}
    </Flexbox>
  );
};

export default OtpInput;
