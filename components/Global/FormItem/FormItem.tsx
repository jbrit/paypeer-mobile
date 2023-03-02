import { StyledFormItem } from "./FormItem.styles";
import { FormItemProps } from "./FormItem.types";

const FormItem: React.FC<FormItemProps> = (props) => {
  return <StyledFormItem {...props} />;
};

export default FormItem;
