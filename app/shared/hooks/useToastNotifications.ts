import { useAppBridge } from "@shopify/app-bridge-react";
import { toastDuration } from "~/shared/config";

const useToastNotifications = () => {
  const shopify = useAppBridge();

  const newToast = (message: string, isError: boolean, duration?: number) => {
    shopify.toast.show(message, {
      isError,
      duration: duration || toastDuration,
    });
  };

  return { newToast };
};

export default useToastNotifications;
