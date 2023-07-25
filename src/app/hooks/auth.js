// import useSWR from 'swr'
import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'
// import { useEffect } from 'react'
// import { useRouter } from 'next/router'

 /*middleware, redirectIfAuthenticated*/
export const useAuth = () => {
    const router = useRouter()

    // const { data: user, error, mutate } = useSWR('/api/user', () =>
    //     axios
    //         .get('/api/user')
    //         .then(res => res.data)
    //         .catch(error => {
    //             if (error.response.status !== 409) throw error

    //             router.push('/verify-email')
    //         }),
    // )

    const csrf = () => axios.get('/sanctum/csrf-cookie')


    const login = async ({ /*setErrors, setStatus,*/ ...props }) => {
        
        await csrf();
        // .then(
            axios
                .post('/login', props)
                .then(() => {

                    console.log('authorised')
                    router.push("/")

                })
                .catch(error => {
                    // if (error.response.status !== 422) throw error
                    console.log('not authorised')
                    // console.log(error)
                    // setErrors(error.response.data.errors)
                })
        // )
    }
        // setErrors([])
        // setStatus(null)

        // axios
        //     .post('/login', props)
        //     .then(() => mutate())
        //     .catch(error => {
        //         if (error.response.status !== 422) throw error

        //         setErrors(error.response.data.errors)
        //     })

        // console.log(csrftoken);

        // const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL+'/login', {
        //     method: 'POST',
        //     headers: {
        //         'X-Requested-With': 'XMLHttpRequest',
        //         // 'X-XSRF-TOKEN': csrftoken,
        //     },
        //     credentials: 'include',
        //     body: JSON.stringify({ props }),
        // })
        // ;
        // if (!res.ok) {
        //     // This will activate the closest `error.js` Error Boundary
        //     throw new Error('Failed to fetch data')
        //   }
         
        //   return res.json();
          
        // .then((response) => response.json())
        //     .then((data) => console.log(data));

            // baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
            // headers: {
            //     'X-Requested-With': 'XMLHttpRequest',
            // },
            // withCredentials: true,



            // setErrors([])
            // setStatus(null)



    // const forgotPassword = async ({ setErrors, setStatus, email }) => {
    //     await csrf()

    //     setErrors([])
    //     setStatus(null)

    //     axios
    //         .post('/forgot-password', { email })
    //         .then(response => setStatus(response.data.status))
    //         .catch(error => {
    //             if (error.response.status !== 422) throw error

    //             setErrors(error.response.data.errors)
    //         })
    // }

    // const resetPassword = async ({ setErrors, setStatus, ...props }) => {
    //     await csrf()

    //     setErrors([])
    //     setStatus(null)

    //     axios
    //         .post('/reset-password', { token: router.query.token, ...props })
    //         .then(response =>
    //             router.push('/login?reset=' + btoa(response.data.status)),
    //         )
    //         .catch(error => {
    //             if (error.response.status !== 422) throw error

    //             setErrors(error.response.data.errors)
    //         })
    // }

    // const resendEmailVerification = ({ setStatus }) => {
    //     axios
    //         .post('/email/verification-notification')
    //         .then(response => setStatus(response.data.status))
    // }

    // const logout = async () => {
    //     if (!error) {
    //         await axios.post('/logout').then(() => mutate())
    //     }

    //     window.location.pathname = '/login'
    // }

    // useEffect(() => {
    //     if (middleware === 'guest' && redirectIfAuthenticated && user)
    //         router.push(redirectIfAuthenticated)
    //     if (
    //         window.location.pathname === '/verify-email' &&
    //         user?.email_verified_at
    //     )
    //         router.push(redirectIfAuthenticated)
    //     if (middleware === 'auth' && error) logout()
    // }, [user, error])

    return {
        // user,
        // register,
        login,
        // forgotPassword,
        // resetPassword,
        // resendEmailVerification,
        // logout,
    }
}
