import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { assets } from '@/assets/assets'
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { useNavigate, useNavigation } from 'react-router-dom';
import axios from 'axios'

function Header() {
    const user = JSON.parse(localStorage.getItem("user"));
    const [openDialog, setOpenDialog] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        console.log(user)
    }, [])

    const login = useGoogleLogin({
        onSuccess: (codeResp) => getUser(codeResp),
        onError: (error) => console.log(error)
    })

    const logout = () => {
        googleLogout();
        localStorage.clear();
        navigate('/')
    }

    const getUser = (tokenInfo) => {
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
            headers: {
                Authorization: `Bearer ${tokenInfo?.access_token}`,
                Accept: 'Application/json'
            }
        }).then((res) => {
            console.log(res)
            localStorage.setItem("user", JSON.stringify(res.data))
            setOpenDialog(false)
            window.location.reload()
        })
    }


    return (
        <div className='p-3 shadow-sm flex justify-between items-center px-5'>
            <img src="/logo.svg" alt="" />
            <div>
                {user ?
                    <div className='flex items-center gap-5'>
                        <a href="/my-trips">
                            <Button variant='outline' className='rounded-full cursor-pointer'>My Trips</Button>
                        </a>
                        <Popover>
                            <PopoverTrigger>
                                <img src={user?.picture} className='h-[30px] w-[30px] rounded-full cursor-pointer' alt="" />
                            </PopoverTrigger>
                            <PopoverContent>
                                <h2 className='cursor-pointer' onClick={() => {
                                    // googleLogout()
                                    // localStorage.clear()
                                    // window.location.reload()
                                    logout()
                                }}>Logout</h2>
                            </PopoverContent>
                        </Popover>
                    </div>
                    :
                    <Button onClick={() =>
                        setOpenDialog(true)
                    }>Sign In</Button>
                }
                <Dialog open={openDialog}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogDescription>
                                <img src='/logo.svg' alt="logo" />
                                <h2 className='font-bold text-lg mt-6 mb-3'>Sign in with Google</h2>
                                <p>Sign in to app with google authentication securely.</p>
                                <Button className='w-full mt-5 flex gap-4 items-center' onClick={login}> <img src={assets.google} className='h-6 w-6' alt="" />  Sign in with Google</Button>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default Header