import Alert from "@mui/material/Alert";
// import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function AlertMsg({ children, type, boxStyle }) {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert variant={boxStyle} severity={type}>
        {children}
      </Alert>
    </Stack>
  );
}

export default AlertMsg;
