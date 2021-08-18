export const addUsers = fileContent => {   
    
    const content = fileContent.split("\n");
    const data = [];

    content.forEach(element => {
        const items = element.split('follows');
        let name = items[0].trim();
        items.shift();
        let followers = items.map(user => user.trim().split(','))[0]
        data.push({ name, followers});
    })

    const users = data.sort((a, b) => a.name.localeCompare(b.name));

    for(let i = 0; i < users.length - 1; i++){
        const currentName = users[i].name;
        const nextName = users[i + 1].name
        if(currentName === nextName){
            users[i+1].followers.forEach(follower => {
                users[i].followers.push(follower)
            })
        }
    }

    return users;
}