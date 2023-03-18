import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="text-4xl text-blue-600">404. Страница не найдена</div>
      <div className="mt-4 text-gray-500">
        Возможно, она была перемещена, или вы <br />
        просто неверно указали адресс страницы
      </div>
      <Link to="/" className="mt-4 text-xl">
        Перейти на главную
      </Link>
    </div>
  )
}

export default Error
