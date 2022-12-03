export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;

    return query

}

export const searchQuery = (searchTerm) => {
   const query = `*[_type == "pin" && match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
    image {
        asset -> {
            url
        }
    }
   }`
}