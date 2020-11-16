let dataUser = []
class inputData {
    constructor(id, username, email, role) {
        this.id = id
        this.username = username
        this.email = email
        this.role = role
    }
}

function OnButtonAddUser(event) {
    event.preventDefault()

    let form = document.getElementById("form-user")
    let username = form["username"].value
    let email = form["email"].value
    let role = form["role"].value

    if(!username || !email || !role) {
        alert("Input masih kosong")
    } else {
        let newUser = new inputData(
            dataUser.length+1,
            username,
            email,
            role
        )
        dataUser.push(newUser)
    }

    form["username"].value = ""
    form["email"].value = ""
    form["role"].value = ""
    ShowDataUser()
}

function ShowDataUser(index) {
    let tbody = document.getElementById("data-user").getElementsByTagName("tbody")[0]
    let tr = ""
    for(let i = 0; i < dataUser.length; i++) {
        if(i == index) {
            tr += `
            <tr>
                <td>#</td>
                <td><input type="text" placeholder="username" id="username-baru" value="${dataUser[i].username}"</td>
                <td><input type="text" placeholder="email" id="email-baru" value="${dataUser[i].email}"</td>
                <td>
                    <select id="role-baru">
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                    </select>
                </td>
                <td>
                    <button onclick="OnButtonSave(${i})">SAVE</button>
                    <button onclick="OnButtonCancel()">CANCEL</button>
                </td>
            </tr>
            `
        } else {
            tr += `
            <tr>
                <td>${i + 1}</td>
                <td>${dataUser[i].username}</td>
                <td>${dataUser[i].email}</td>
                <td>${dataUser[i].role}</td>
                <td>
                    <button onclick="OnButtonEdit(${i})">EDIT</button>
                    <button onclick="OnButtonDelete(${i})">DELETE</button>
                </td>
            </tr>
            `
        }
    } tbody.innerHTML = tr
}

function OnButtonEdit(index) {
    ShowDataUser(index)
}
ShowDataUser()

function OnButtonSave(index) {
    let newUsername = document.getElementById("username-baru").value
    let newEmail = document.getElementById("email-baru").value
    let newRole = document.getElementById("role-baru").value

    for(let i = 0; i < dataUser.length; i++) {
        if(i == index) {
            dataUser[i].id
            dataUser[i].username = newUsername
            dataUser[i].email = newEmail
            dataUser[i].role = newRole
        }
    }

    ShowDataUser()
}

function OnButtonCancel(){
    ShowDataUser()
}

function OnButtonDelete(index){
    dataUser.splice(index,1)
    ShowDataUser()
}