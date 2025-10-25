import { useEffect } from "react";
import { useForm,Link } from "@inertiajs/react";

type DataProps = {
  user?: { id: number; email: string };
  url?: string;
};


export default function Shortlink({ user, url }: DataProps) {


    useEffect(()=>{
        if(user){
            console.log("user.id => ",user);
            localStorage.setItem('user_id', JSON.stringify(user.id))
            localStorage.setItem('user_email', JSON.stringify(user.email))
        }
    },[])

    console.log("url => ",url);
    

    const {data,setData,post}= useForm<{   original_url: string; user_id: number; user_name: string}>({
        original_url: '',
        user_id: localStorage.getItem('user_id') ? JSON.parse(localStorage.getItem('user_id')!) : 0,
        user_name: localStorage.getItem('user_email') ? JSON.parse(localStorage.getItem('user_email')!) : 'guest',
    });     

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("data submit => ",data);
        post('/shortlink/create');
    }

    

    return (
        <div className="flex h-[100vh] items-center justify-center bg-gray-800">
            <form onSubmit={submit} className="w-full max-w-4xl rounded-lg bg-gray-800 p-10 shadow-2xl">
                <div className="text-center">
                    <h1 className="text-5xl font-black text-blue-500 italic">Short Link URL .</h1>
                    <hr className="my-5 border-gray-600" />
                </div>

                <section className="mt-5 w-full max-w-3xl">
                    <div className="mb-5">
                        <input
                            type="text"
                            id="text"
                            name="original_url"
                            value={data.original_url}
                            onChange={(e)=>setData('original_url',e.target.value)}
                            className="block w-[800px] rounded-lg border border-gray-300 bg-gray-50 p-5 text-3xl text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                            placeholder="Shorten your link here..."
                            required
                        />
                    </div>
                </section>
                <section>
                    <div className="text-center">
                        <button
                            type="submit"
                            // className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 focus:outline-none"
                            className="text-1xl text-white tracking-[3px] rounded-md bg-blue-500 px-5 py-2"
                        >
                            Submit to Shortlink
                        </button>
                    </div>
                </section>
                <div className="mt-4">
                    <a href={url ? url : '/shortlink'} target="_blank" className="text-1xl text-blue-500">{url}</a>
                </div>
                
            </form>
            
        </div>
    );
}
