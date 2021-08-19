export const addUsers = fileContent => {   
    try {

        if(!fileContent){
            console.log("THE FILE CONTENT WAS NOT RECEIVED");
            return new Error()
        }

        const content = fileContent.split("\n");
        const data = [];
    
        content.forEach(element => {
            const items = element.split('follows');
            let name = items[0].trim();
            items.shift();
            let followers = items.map(user => user.split(',').sort())[0]
            data.push({ name, followers});
        })
    
        const users = data.sort((a, b) => a.name.localeCompare(b.name));
    
        for(let i = 0; i < users.length - 1; i++){
    
            const currentName = users[i].name;
            const nextName = users[i + 1].name
    
            if(currentName === nextName && nextName ){
                users[i].followers.forEach(follower => { 
                    users[i + 1].followers.reverse().push(follower.trim()) 
                })
            }
        }
        users.shift();
        return users;
        
    } catch(error){
        throw new Error(error.message);
    }
}