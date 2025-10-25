import { Link, useForm } from '@inertiajs/react';
import React from 'react';

export default function Welcome() {

      const { data, setData, post,errors } = useForm<{ email: string; password: string }>({
        email: '',
        password: '',
      });


    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(data);
        post('/auth');
    };

    return (
        <>
            <section className="bg-gray-800">
                <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
                    <div className="w-full rounded-lg bg-white shadow-2xl sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-500 dark:bg-gray-800">
                        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
                            <div className="text-center">
                                <h1 className="text-5xl font-black text-blue-500 italic">Short Link.</h1>
                            </div>
                            <hr className="my-5 border-gray-600" />

                            <form className="space-y-4 md:space-y-6" onSubmit={submit}>
                                <div>
                                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                        email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                        placeholder="name@company.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        placeholder="••••••••"
                                        className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                                    />
                                </div>
                                <div className="text-center">
                                    {/* <Link href="/shortlink">

                                    </Link> */}
                                    <button
                                        type="submit"
                                        // className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 focus:outline-none"
                                        className="text-1xl text-white rounded-md bg-blue-500 px-5 py-2 font-black tracking-[2px]"
                                    >
                                        Sign in
                                    </button>
                                </div>
                                <hr className="my-5 border-gray-600" />
                                <div className="text-center">
                                    <p className="text-[14px] text-gray-300">
                                        Register for login here . .{' '}
                                        <Link href="/register" className="text-blue-500">
                                            resgister
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
