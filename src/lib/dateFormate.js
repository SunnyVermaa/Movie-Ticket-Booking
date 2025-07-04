export const dateFormate = (date) => {
    return new Date(date).toLocaleString('en-US', {
        weekend : "short",
        month : "long",
        day : "numeric",
        hour : "numeric",
        minute : "numeric"
    })
}