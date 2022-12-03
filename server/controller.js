const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
let users = []
let userId = 1

module.exports = {

    getCompliment: (req, res) => {
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    
    getFortune: (req, res) => {
        const fortunes = ["A lifetime of happiness lies ahead of you!", "All your hard work will soon pay off!", "Any day above ground is a good day.", "Believe it can be done.", "Bide your time, for success is near."]
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        
        res.status(200).send(randomFortune);
    },

    submitCompliment: (req, res) => {
        console.log('Registering Compliment')
        let {compliment} = req.body
        
            compliments.push(compliment)
            res.status(200).send(compliments)
    },

    registerUser: (req, res) => {
        console.log(req.body)
        let {firstName, lastName, motivation} = req.body
       
            users.push({...req.body, id:userId++})
            res.status(200).send(users)
            
    },

    deleteUser: (req, res) => {
       users = users.filter((user) => user.id !== +req.params.id)

       res.status(200).send(users)
    }
}


