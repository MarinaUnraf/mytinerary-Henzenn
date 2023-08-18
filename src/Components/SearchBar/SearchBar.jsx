export default function SearchComponent() {
    return (
        <div className="flex items-center">
            <div className="flex border border-fuchsia-200 rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-fuchsia-700 bg-white border rounded-md focus:border-fuchsia-400 focus:ring-fuchsia-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-4 text-white bg-fuchsia-600 border-l rounded ">
                    Search
                </button>
            </div>
        </div>
    );
}