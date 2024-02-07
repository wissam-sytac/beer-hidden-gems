import { useEffect } from "react";
import { Alert } from "@mui/material";
import { useSelector } from "react-redux";
import { selectOnlineStatus } from "../../shared/redux/mainSelectors";
import { useAppDispatch } from "../../redux/store";
import { updateOnlineStatus } from "../../shared/redux/mainSlice";

const Offline = () => {
  const dispatch = useAppDispatch();
  const isOnline = useSelector(selectOnlineStatus);

  useEffect(() => {
    return () => {
      window.addEventListener("online", () =>
        dispatch(updateOnlineStatus(true)),
      );
      window.addEventListener("offline", () =>
        dispatch(updateOnlineStatus(false)),
      );
    };
  }, [dispatch]);

  return isOnline ? null : (
    <Alert variant="filled" severity="warning">
      You are offline. Connect to the internet for optimal experience.
    </Alert>
  );
};

export default Offline;
