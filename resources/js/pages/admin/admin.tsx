type DataProps = {
    data?: { user_id: number; user_name: string; original_url: string; short_code_url: string; status_url: string }[];
};

export default function Admin({ data }: DataProps) {
    console.log('admin check data => ', data);

    return (
        <div className="flex h-[100vh] w-full max-w-full items-center justify-center bg-gray-800">
           

            <div className="relative overflow-x-auto">
                 <div className="text-5xl font-black text-white italic text-center mb-3">Welcome Admin Panel</div>
                <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
                    <thead className="bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                user
                            </th>
                            <th scope="col" className="px-6 py-3">
                                original_url
                            </th>
                            <th scope="col" className="px-6 py-3">
                                short_url
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data &&
                            data.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white"
                                    >
                                        {item.user_name}
                                    </th>
                                    <td className="px-6 py-4">{item.original_url}</td>
                                    <td className="px-6 py-4">{item.short_code_url}</td>
                                </tr>
                            ))} 
                        {/* <tr className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
