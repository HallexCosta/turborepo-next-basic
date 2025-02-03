import {toast} from 'react-toastify'

export const useToast = () => {
  return {
    toast: (message: string) => toast(message),
    toastError: (message: string) => toast.error(message),
    toastSuccess: (message: string) => toast.success(message)
  }
}