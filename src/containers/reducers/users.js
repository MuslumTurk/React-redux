const users = function () {
    return [
        {
            id: 1,
            first: "Bucky",
            last: "Roberts",
            age: 71,
            description: "Bucky is a React developer and YouTuber",
            thumbnail: "http://i.imgur.com/7yUvePI.jpg",
            friends: [
                {
                    id: 1,
                    first: "f1 first",
                    last: "f1 last",
                    age: 71,
                    description: "Bucky is a React developer and YouTuber",
                    thumbnail: "http://i.imgur.com/7yUvePI.jpg"
                },
                {
                    id: 2,
                    first: "f2 first",
                    last: "f2 last",
                    age: 27,
                    description: "Joby loves the Packers, cheese, and turtles.",
                    thumbnail: "http://i.imgur.com/52xRlm8.png"
                },
                {
                    id: 3,
                    first: "f3 first",
                    last: "f3 last",
                    age: 24,
                    description: "Madi likes her dog but it is really annoying.",
                    thumbnail: "http://i.imgur.com/4EMtxHB.png"
                }
            ]
        },
        {
            id: 2,
            first: "Joby",
            last: "Wasilenko",
            age: 27,
            description: "Joby loves the Packers, cheese, and turtles.",
            thumbnail: "http://i.imgur.com/52xRlm8.png"
        },
        {
            id: 3,
            first: "Madison",
            last: "Williams",
            age: 24,
            description: "Madi likes her dog but it is really annoying.",
            thumbnail: "http://i.imgur.com/4EMtxHB.png"
        }
    ]
}

module.exports = {
    users: users
};

