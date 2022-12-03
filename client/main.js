const complimentBtn = document.getElementById("complimentButton")
const baseURL = `http://localhost:4000/api`

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

const compBtn = document.getElementById("complimentSubmit")

function registerComplimentSender(e) {
    e.preventDefault()
    let compli = document.querySelector('#complimentRegi')

    let bodyCompli ={
        compliment: compli.value
    }
    submitCompliment(bodyCompli)

    compli.value = ''
}

const submitCompliment = body => axios.post(`${baseURL}/submitCompliment`, body).then(res => {
    createCompliment(res.data)
}).catch(err => {
    console.log(err)
    alert('Uh oh. Your request did not work!')
})

compBtn.addEventListener('click', registerComplimentSender)

function createCompliment(data) {

}
const userBtn = document.querySelector("#userButton")
const submitUsers = body => axios.post(`${baseURL}/users`, body).then(res => {
    createUser(res.data)
}).catch(err =>{
    console.log(err)
    alert("There was an issue!")
})

function registerNewUser(e) {
    e.preventDefault()
    
    let firstName = document.querySelector('#firstName')
    let lastName = document.querySelector('#lastName')
    let motivation = document.querySelector('#motivation')

    

    
    let userObj = {
        firstName: firstName.value,
        lastName: lastName.value,
        motivation: motivation.value
    }
    submitUsers(userObj)

    firstName.value = ''
    lastName.value = ''
    motivation.value = ''
}

userBtn.addEventListener('click', registerNewUser)



let userContainer = document.querySelector("#div")

const deleteUser=(id) => {
    axios.delete(`${baseURL}/deleteUser/${id}`).then((res) => {
        createUser(res.data)
    })
}

function createUser(data) {
    userContainer.innerHTML = ''
    for (let i = 0; i < data.length; i++){
        
        const userCard = document.createElement('div')
        userCard.classList.add('user-card')
    
        userCard.innerHTML = `
        <p class="first-name">First Name: ${data[i].firstName}</p>
        <p class="last-name">Last Name: ${data[i].lastName}</p>
        <p class="motivation">motivation: ${data[i].motivation}</p>
        <button>Delete</button>
        `

        userCard.querySelector('button').addEventListener('click',() => deleteUser(data[i].id))
        userContainer.appendChild(userCard)
    }
}
