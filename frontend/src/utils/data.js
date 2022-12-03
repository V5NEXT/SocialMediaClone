export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;

    return query

}

export const searchQuery = (searchTerm)=>{
   const query = ``
}