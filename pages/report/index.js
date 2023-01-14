import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import axios from 'axios'

export default function Report() {
    const { data: session } = useSession();

    const router = useRouter();
    const { redirect } = router.query;

    useEffect(() => {
        if (session?.user) {
            router.push(redirect || '/report');
        }
    }, [router, session, redirect]);

    //handle form
    const [todayJobMessage, setTodayJobMessage] = useState('');
    const [tommorrowJobMessage, setTommorrowJobMessage] = useState('');

    const handleMessageTodayChange = event => {
      setTodayJobMessage(event.target.value);
    };

    const handleMessageTommorrowChange = event => {
      setTommorrowJobMessage(event.target.value);
    };

    const handleSubmit = async(event) => {
        await axios.post('/api/report/submit', {
          todayJobMessage,
          tommorrowJobMessage
        });
        setTodayJobMessage('')
        setTommorrowJobMessage('')
    };
    return (
        <form
            className="mx-auto max-w-screen-md"
            onSubmit={handleSubmit}
        >
            <h1 className="mb-4 text-xl">Report</h1>
            <div className="mb-4">
                <label htmlFor="today_job">What we have done today?</label>
                <textarea id="today_job" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          placeholder="Write your thoughts here..." value={todayJobMessage} onChange={handleMessageTodayChange}>

                </textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="tommorrow_job">What do you plan to do tommorrow?</label>
                <textarea id="tommorrow_job" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          placeholder="Write your thoughts here..." value={tommorrowJobMessage} onChange={handleMessageTommorrowChange}>

                </textarea>
            </div>
            <div className="mb-4 ">
                <button className="primary-button">Submit</button>
            </div>
        </form>
    );
}
