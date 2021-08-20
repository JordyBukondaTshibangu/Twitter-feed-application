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
