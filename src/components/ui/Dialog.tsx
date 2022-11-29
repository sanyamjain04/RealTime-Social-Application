import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface DialogSlideProps {
  open: boolean;
  handleClose: () => void;
  action: () => void;
  title: string;
  desc: string;
  closeButtonTitle: string;
  actionTitle: string;
}

export default function DialogSlide({
  open,
  handleClose,
  title,
  desc,
  closeButtonTitle,
  actionTitle,
  action,
}: DialogSlideProps) {
  return (
    <div>
      {open && <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {desc}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleClose}>{closeButtonTitle}</Button>
          <Button onClick={action}>{actionTitle}</Button>
        </DialogActions>
      </Dialog>}
    </div>
  );
}
