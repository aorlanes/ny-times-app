import { Fade, Alert, IconButton } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

type ErrorAlertProps = {
  open: boolean;
  message?: string;
};

const ErrorAlert = ({ open, message }: ErrorAlertProps) => {
  const [isForceClose, setIsForceClose] = useState(false);
  return (
    <Fade
      in={open && !isForceClose}
      className="absolute z-20 m-2 flex justify-center"
    >
      <Alert
        severity="error"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setIsForceClose(true);
            }}
            data-testid="error-alert-button"
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        data-testid="error-alert"
      >
        {message
          ? message
          : "There was an issue loading part(s) of this page. Please refresh after a few minutes."}
      </Alert>
    </Fade>
  );
};

export default ErrorAlert;
