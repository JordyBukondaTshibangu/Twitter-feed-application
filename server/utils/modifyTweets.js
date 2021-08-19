export const addTweets = fileContent => { 
    try {

        if(!fileContent){
            console.log("THE FILE CONTENT WAS NOT RECEIVED");
            return new Error();
        }
        
        const content = fileContent.split("\n");
        let data = [];
    
        content.map(element => {
            const items = element.split('>');
            let author = items[0].trim();
            items.shift();
            let tweets = items.map(user => user.trim())[0]
            data.push({ author, content : tweets});
        })
    
        const tweets = data.sort((a, b) => a.author.localeCompare(b.author));
        tweets.shift()
    
        return tweets;
        
    } catch(error){
        throw new Error(error.message);
    }
}