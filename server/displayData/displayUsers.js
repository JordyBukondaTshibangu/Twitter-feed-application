require('../users/users');

exports.displayUsers = fileContent => {   

    const content = fileContent.split("\n");
    const data = [];

    content.forEach(element => {
        const items = element.split('follows');
        let name = items[0].trim();
        items.shift();
        let followers = items.map(user => user.trim().split(','))[0]
        data.push({ name, followers});
    })

    const sortedList = data.sort((a, b) => a.name.localeCompare(b.name));

    for(let i = 0; i < sortedList.length - 1; i++){
        const currentName = sortedList[i].name;
        const nextName = sortedList[i + 1].name
        if(currentName === nextName){
            sortedList[i+1].followers.forEach(follower => {
                sortedList[i].followers.push(follower)
            })
        }
    }

}