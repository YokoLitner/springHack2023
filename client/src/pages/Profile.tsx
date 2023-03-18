import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AccessLevels } from 'types/EXPORT'

import * as yup from 'yup'

// svg
import { ArrowIcon } from 'assets/icons/EXPORT'

// components
import { Input } from 'components/EXPORT'

// utils
import { MAX_LENGTH, MIN_LENGTH, REQUIRED_MSG } from 'utils/errorMsgs'
import fetchUserById from 'utils/fetchUserById'

const currentUser = {
  id: 5,
  fullname: 'Басенко Денис Сергеевич',
  department: 'Разработка',
  position: 'Администратор',
  access_level: 'admin'
}

const schema = yup
  .object({
    fullname: yup
      .string()
      .required(REQUIRED_MSG)
      .min(...MIN_LENGTH(6))
      .max(...MAX_LENGTH(60)),
    department: yup
      .string()
      .required(REQUIRED_MSG)
      .min(...MIN_LENGTH(4))
      .max(...MAX_LENGTH(60)),
    position: yup
      .string()
      .required(REQUIRED_MSG)
      .min(...MIN_LENGTH(4))
      .max(...MAX_LENGTH(60)),
    access_level: yup.string().required(REQUIRED_MSG).oneOf<AccessLevels>(['admin', 'moderator', 'user'])
  })
  .required()

const Profile = () => {
  const [isChanging, setIsChanging] = useState(false)
  const [userInfo, setUserInfo] = useState(currentUser)
  const params = useParams()

  useEffect(() => {
    if (Object.entries(params).length !== 0) {
      fetchUserById(params.id).then(data => {
        setUserInfo(data)
      })
    }
  }, [params])

  const navigate = useNavigate()
  const { handleSubmit, control } = useForm({
    defaultValues: userInfo,
    resolver: yupResolver(schema)
  })

  const name = userInfo.fullname.split(' ')[1]

  const goBack = () => navigate(-1)

  const onSubmit = (data: any) => console.log(data)

  const changeAvatar = () => console.log('avatar changed')

  return (
    <div className="flex flex-row h-screen max-[960px]:h-full">
      <div
        onClick={goBack}
        className="hidden items-center h-screen border-r sm:flex px-5 bg-gray-100 cursor-pointer hover:bg-gray-200"
      >
        <ArrowIcon width="35px" className="rotate-180 fill-blue-600" />
      </div>
      <div className="flex justify-center w-full items-center max-[960px]:flex-col">
        <div onClick={goBack} className="hidden mr-[80%] p-5 max-[639px]:block">
          <ArrowIcon width="35px" className="rotate-180 fill-blue-600 hidden max-[639px]:block" />
        </div>
        <div className="sm:w-[550px] w-64">
          <div
            onClick={changeAvatar}
            className="w-[100px] h-[100px] rounded-full bg-gray-300 mx-auto mb-4 cursor-pointer"
          />
          <div className="font-semibold text-3xl text-center mb-4">{name}</div>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row w-full pb-3 mt-3 border-b justify-between">
              <div className="font-semibold">ФИО</div>
              {isChanging ? (
                <Controller
                  name="fullname"
                  control={control}
                  defaultValue={userInfo.fullname}
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <Input
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      placeholder="ФИО"
                      className="border-none px-0"
                    />
                  )}
                />
              ) : (
                <div className="text-gray-400">{userInfo.fullname}</div>
              )}
            </div>
            <div className="flex flex-row w-full pb-3 mt-3 border-b justify-between">
              <div className="font-semibold">Отдел</div>
              {isChanging ? (
                <Controller
                  name="department"
                  control={control}
                  defaultValue={userInfo.department}
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <Input
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      placeholder="Продаж"
                      className="border-none px-0"
                    />
                  )}
                />
              ) : (
                <div className="text-gray-400">{userInfo.department ?? 'Не выбран'}</div>
              )}
            </div>
            <div className="flex flex-row w-full pb-3 mt-3 border-b justify-between">
              <div className="font-semibold">Должность</div>
              {isChanging ? (
                <Controller
                  name="position"
                  control={control}
                  defaultValue={userInfo.position}
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <Input
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      className="border-none px-0"
                      placeholder="Сотрудник"
                    />
                  )}
                />
              ) : (
                <div className="text-gray-400">{userInfo.position ?? 'Не выбрана'}</div>
              )}
            </div>
            <div className="flex flex-row w-full pb-3 mt-3 border-b justify-between">
              <div className="font-semibold">Роль</div>
              {isChanging ? (
                <Controller
                  name="access_level"
                  control={control}
                  defaultValue={userInfo.access_level}
                  render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <Input
                      value={value}
                      onChange={onChange}
                      error={!!error}
                      className="border-none px-0"
                      placeholder="пользователь"
                    />
                  )}
                />
              ) : (
                <div className="text-gray-400">{userInfo.access_level}</div>
              )}
            </div>
            <div className="w-full pb-2 border-b text-blue-600 font-medium mt-20 flex-row flex">
              <div onClick={() => setIsChanging(!isChanging)} className="cursor-pointer">
                {isChanging ? 'Сохранить' : 'Изменить данные'}
              </div>
              {isChanging && (
                <div onClick={() => setIsChanging(!isChanging)} className="text-red-500 ml-5 cursor-pointer">
                  Отменить
                </div>
              )}
            </div>
          </form>
          <div onClick={() => null} className="w-full py-2 text-blue-600 font-medium cursor-pointer">
            Изменить пароль
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
