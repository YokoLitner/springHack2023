import axios from 'axios'
import { IPasswordForm } from 'pages/Profile/components/ChangingPassword'

const changePassword = async (passwordData: IPasswordForm) => {
  // TODO add id for pass(localStorage?)
  await axios.post(
    'http://localhost:3000/authentication/change-password',
    { id: 1, currentPassword: passwordData.currentPassword, newPassword: passwordData.newPassword },
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    }
  )
}

export default changePassword
