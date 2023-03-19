import { AxiosInstance } from 'utils/EXPORT'
import { IPasswordForm } from 'pages/Profile/components/ChangingPassword'

const changePassword = async (passwordData: IPasswordForm) => {
  // TODO add id for pass(localStorage?)
  await AxiosInstance.post('authentication/change-password', {
    id: 1,
    currentPassword: passwordData.currentPassword,
    newPassword: passwordData.newPassword
  })
}

export default changePassword
