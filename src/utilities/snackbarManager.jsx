/* eslint-disable prettier/prettier */
import { useSnackbar } from 'notistack';

let useSnackbarRef;
export function SnackbarUtilitiesConfigurator() {
  useSnackbarRef = useSnackbar();
  return null;
}

export const SnackbarUtilities = {
  toast(msg, variant = 'default') {
    useSnackbarRef.enqueueSnackbar(msg, { variant });
  },
  error(msg) {
    this.toast(msg, 'error');
  },
  warning(msg) {
    this.toast(msg, 'warning');
  },
  success(msg) {
    this.toast(msg, 'success');
  },
};
