const isoTimeFormate = (dateTime) => {
    const date = new Date(dateTime)
    const localtime = date.toLocaleDateString('en-US', {
        hour : '2-digit',
        minute : '2-digit',
        hour12 : true,
    });
    return localtime
}

export default isoTimeFormate;