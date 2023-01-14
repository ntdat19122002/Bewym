import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import axios from 'axios'

export default function Question() {
    const { data: session } = useSession();

    const router = useRouter();
    const { redirect } = router.query;

    useEffect(() => {
        if (session?.user) {
            router.push(redirect || '/question');
        }
    }, [router, session, redirect]);

    //handle form
    const [question, setQuestion] = useState('');

    const handleMessageTodayChange = event => {
      setQuestion(event.target.value);
    };

    const handleSubmit = async(event) => {
        await axios.post('/api/question/submit', {
          question,
        });
        setQuestion('')
    };
    return (
        <form
            className="mx-auto max-w-screen-md"
            onSubmit={handleSubmit}
        >
            <h1 className="mb-4 text-xl">Question</h1>
            <div className="mb-4">
                <label htmlFor="question">Do you have any questions today?</label>
                <textarea id="question" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                          placeholder="Write your thoughts here..." value={question} onChange={handleMessageTodayChange}>

                </textarea>
            </div>
            <div className="mb-4 ">
                <button className="primary-button">Submit</button>
            </div>
        </form>
    );
}
