import Link from 'next/link';
import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { getError } from '../utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export default function LoginScreen() {
    const { data: session } = useSession();

    const router = useRouter();
    const { redirect } = router.query;

    useEffect(() => {
        if (session?.user) {
            router.push(redirect || '/');
        }
    }, [router, session, redirect]);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    const submitHandler = async ({ username, password }) => {
        try {
            const result = await signIn('credentials', {
                redirect: false,
                username,
                password,
            });
            if (result.error) {
                toast.error(result.error);
            }
        } catch (err) {
            toast.error(getError(err));
        }
    };
    return (
        <form
            className="mx-auto max-w-screen-md"
            onSubmit={handleSubmit(submitHandler)}
        >
            <h1 className="mb-4 text-xl">Login</h1>
            <div className="mb-4">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    {...register('username', {
                        required: 'Please enter username',
                        pattern: {
                            value: /^[a-zA-Z0-9_.+-]+.[a-zA-Z0-9-.]+$/i,
                            message: 'Please enter valid username',
                        },
                    })}
                    className="w-full"
                    id="username"
                    autoFocus
                ></input>
                {errors.username && (
                    <div className="text-red-500">{errors.username.message}</div>
                )}
            </div>
            <div className="mb-4">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    {...register('password', {
                        required: 'Please enter password',
                        minLength: { value: 6, message: 'password is more than 5 chars' },
                    })}
                    className="w-full"
                    id="password"
                    autoFocus
                ></input>
                {errors.password && (
                    <div className="text-red-500 ">{errors.password.message}</div>
                )}
            </div>
            <div className="mb-4 ">
                <button className="primary-button">Login</button>
            </div>
            <div className="mb-4 ">
                Don&apos;t have an account? &nbsp;
                <Link href="register">Register here</Link>
            </div>
        </form>
    );
}
