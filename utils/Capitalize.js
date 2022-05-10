
const capitalize = (string) => {
    let lower = string.toLowerCase();
    return (string.charAt(0).toUpperCase() + lower.slice(1)
    )
}

export default capitalize