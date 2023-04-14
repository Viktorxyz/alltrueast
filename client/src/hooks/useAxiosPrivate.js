import { axiosPrivate } from '../api/axios.js'
import { useEffect } from 'react'
import useRefreshToken from './useRefreshToken.js'
import useAuth from './useAuth.js'

const useAxiosPrivate = () => {
	const refresh = useRefreshToken()
	const { auth } = useAuth()

	useEffect(() => {
		const reqIntercept = axiosPrivate.interceptors.request.use(
			config => {
				if (!config.headers['authorization']) {
					config.headers['authorization'] = `Bearer ${auth?.accessToken}`
				}
				return config
			}, (error) => Promise.reject(error)
		)

		const resIntercept = axiosPrivate.interceptors.response.use(
			response => response,
			async (error) => {
				const prevReq = error?.config;
				if (error?.response?.status === 403 && !prevReq?.sent) {
					prevReq.sent = true
					const accessToken = await refresh()
					prevReq.headers['Authorization'] = `Bearer ${accessToken}`
					return axiosPrivate(prevReq)
				}
				return Promise.reject(error)
			}
		)
		return () => {
			axiosPrivate.interceptors.request.eject(reqIntercept)
			axiosPrivate.interceptors.response.eject(resIntercept)
		}
	}, [refresh])

	return axiosPrivate
}

export default useAxiosPrivate
