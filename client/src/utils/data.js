export const userData = () => {
    return [
        {
            name : "Jordy",
            followers : [
                {
                    author : 'Emmanuel',
                    content : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown'
                },
                {
                    author : 'Theoda',
                    content : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown'
                },
                {
                    author : 'Renelle',
                    content : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown'
                }
            ]
        },
        {
            name : "Emmanuel",
            followers : [
                {
                    author : 'Jordy',
                    content : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown'
                },
                {
                    author : 'Theoda',
                    content : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown'
                },
                {
                    author : 'Renelle',
                    content : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown'
                }
            ]
        },
        {
            name : "Theoda",
            followers : [
                {
                    author : 'Jordy',
                    content : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown'
                },
                {
                    author : 'huygens',
                    content : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown'
                },
                {
                    author : 'Renelle',
                    content : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown'
                }
            ]
        },
        {
            name : "huygens",
            followers : [
                {
                    author : 'Jordy',
                    content : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown'
                },
                {
                    author : 'Theoda',
                    content : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown'
                },
                {
                    author : 'Lucie',
                    content : 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown'
                }
            ]
        },
    ]
    
}

export const users = () => {
    return [
        {
            name : "Jordy",
            followers : ['Emmanuel','Theoda','Renelle']
        },
        {
            name : "Emmanuel",
            followers : [ 'Jordy', 'Theoda', 'Renelle']
        },
        {
            name : "Theoda",
            followers : [ 'Jordy', 'huygens', 'Renelle']
        },
        {
            name : "huygens",
            followers : [ 'Jordy', 'Theoda', 'Lucie']
        },
    ]
    
}

export const usersAndFeed = (users, tweets) => {
    try {

        if(!users || !tweets){
            console.log("THERE IS NO DATA!");
            return new Error();
        } 
        let followers 
        let usersFeed = []

        for(let i = 0; i < users.length; i++){

            let user = users[i];
            // let string = `\n\t${user.name} \n`;
        
            for(let j = 0; j < user.followers.length; j++){
        
                let userFollower = user.followers[j].trim().toLowerCase();
        
                 followers = tweets.filter(tweet => {
                    if(tweet.author.toLowerCase().trim() === userFollower){
                        // string += `\t\t @${userFollower} : ${tweet.content}\n`
                        return {
                            author : userFollower,
                            content : tweet.content
                        }
                    } 
                    return null
                })
            }
            // console.log({ name : user.name, followers : followers})            
            usersFeed.push({ name : user.name, followers : followers})            
        }

        return usersFeed
    } catch(err){
        console.log(err.message)
        return new Error();
    }
}
