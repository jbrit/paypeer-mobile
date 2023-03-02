import { Text } from "@/components/Global/Typography/Typography.styles";
import { StyledAvartar } from "./Avartar.styles";
import { IAvartarProps } from "./Avartar.types";

const Avartar: React.FC<IAvartarProps> = ({ initials }) => {
  return (
    <StyledAvartar>
      <Text variant="xs" weight="medium" letterSpacing="0.0015em">
        {initials.toUpperCase()}
      </Text>
    </StyledAvartar>
  );
};

export default Avartar;
