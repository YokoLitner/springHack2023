// components
import RegistrationForm from './components/RegistrationForm'

const Registration = () => {
  return (
    <div className="flex h-screen items-center">
      <div className="mx-auto sm:w-[450px] border rounded-xl p-12 h-fit shadow-md">
        <div className="text-center font-medium text-3xl my-5">Регистрация</div>
        <RegistrationForm />
      </div>
    </div>
  )
}

export default Registration
