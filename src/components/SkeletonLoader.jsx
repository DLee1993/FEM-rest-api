const SkeletonLoader = () => {
    return (
        <div className="w-60 h-80 border-2 rounded-md">
            <div className="flex animate-pulse justify-between items-center h-full flex-col">
                <div className="w-full bg-gray-300 h-1/2"></div>
                <div className="flex justify-evenly items-start flex-col h-1/2 w-full px-2">
                    <div className="w-36 bg-gray-300 h-6 rounded-md mb-4"></div>
                    <div className="w-32 bg-gray-300 h-6 rounded-md "></div>
                    <div className="w-32 bg-gray-300 h-6 rounded-md "></div>
                    <div className="w-32 bg-gray-300 h-6 rounded-md "></div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonLoader;
