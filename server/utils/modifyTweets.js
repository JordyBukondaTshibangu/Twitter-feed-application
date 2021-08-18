export const addTweets = fileContent => {   
    
    const content = fileContent.split("\n");
    let data = [];

    content.map(element => {
        const items = element.split('>');
        let author = items[0].trim();
        items.shift();
        let tweets = items.map(user => user.trim())[0]
        data.push({ author, tweets});
    })

    const tweets = data.sort((a, b) => a.author.localeCompare(b.author));

    return tweets
    
}