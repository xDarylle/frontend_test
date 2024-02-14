export const getUserData = async () => {
    const res = await fetch("https://dummyjson.com/users")
    if (!res.ok) {
        throw new Error("Error in fetching data");
    }
    return res.json() 
}