import { Backdrop, CircularProgress } from "@mui/material";

function Loading({ isLoading }) {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="secondary" />
      </Backdrop>
    </div>
  );
}

export default Loading;
