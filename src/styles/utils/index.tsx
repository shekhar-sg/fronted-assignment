import { SxProps, Theme } from "@mui/material";

export const sxToArray = (sx: SxProps<Theme> | undefined) =>
  sx ? (Array.isArray(sx) ? sx : [sx]) : [];
