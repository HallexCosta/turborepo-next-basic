
const showFlagCurrentActivity = (currentActivity) => {
    return currentActivity ? '(atuando)' : ''
}

export const Header = ({role = '', enterprise = '', activityTime = '', currentActivity = false, category = '' }) => {
    currentActivity = currentActivity === undefined || currentActivity === false ? false : true
    enterprise = enterprise ? ` - ${enterprise}` : ''
    return (
        <div className="header flex items-center justify-between">
            {category ? (
                <h4 className="my-role text-sm font-bold">{category}</h4>
            ) : (
                <h4 className="my-role text-sm font-bold">{role}{enterprise}</h4>
            )}
            <h4 className="activity-time text-xs font-bold">{activityTime} {showFlagCurrentActivity(currentActivity)}</h4>
        </div>
    )
}