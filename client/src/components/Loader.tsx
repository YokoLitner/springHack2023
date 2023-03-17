// svg
import { LoadingIcon } from 'assets/icons/EXPORT'

const Loader = () => {
  return (
    <div className="bg-gray-300 h-screen w-full flex justify-center">
      <LoadingIcon width="50px" className="animate-spin fill-blue-600" />
    </div>
  )
}

export default Loader
