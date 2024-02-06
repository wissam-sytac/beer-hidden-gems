import { Alert, Snackbar } from "@mui/material";
import Menu from "../Menu";
import Offline from "../../../views/Offline";
import Footer from "../Footer";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../../redux/store";
import { hideToast } from "../../../redux/mainSlice";

export interface LayoutProps {
  children?: React.ReactNode;
}

const TOAST_AUTO_HIDE_DURATION = 3000;

export const Layout = ({ children }: LayoutProps) => {
  const dispatch = useAppDispatch();
  const toastState = useSelector((state: RootState) => state.main.toast);
  const handleClose = () => dispatch(hideToast());

  return (
    <Menu>
      <Offline />
      {children}
      <Footer />
      <Snackbar
        open={toastState.isVisible}
        onClose={handleClose}
        message={toastState.message}
        autoHideDuration={TOAST_AUTO_HIDE_DURATION}
      >
        <Alert variant="filled" severity="success">
          {toastState.message}
        </Alert>
      </Snackbar>
    </Menu>
  );
};
