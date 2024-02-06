const SubGoalTitleContainer = ({title, color, taskAmount}) => {
    return (
        <div className="flex items-center gap-4 w-full h-12 bg-white rounded-lg p-2">
            <div className={`rounded-full h-8 w-8 ${color} opacity-100`}></div>
            <p className="text-black">{title}</p>
            <p className={`text-black`}>{taskAmount}</p>
        </div>
    )
};

export default SubGoalTitleContainer;