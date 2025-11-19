import { Button as MuiButton, ButtonProps } from "@mui/material";

export interface CustomButtonProps extends ButtonProps {
  /**
   * The label text for the button
   */
  label: string;
}

/**
 * Custom Button component wrapping MUI Button
 */
export const Button = ({ label, ...props }: CustomButtonProps) => {
  return <MuiButton {...props}>{label}</MuiButton>;
};

