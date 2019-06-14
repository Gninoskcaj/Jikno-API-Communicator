// Params: username, table, method
const users = () => {
	return [
		{
			username: 'Jeff',
			password: '12',
			id: '1333'
		},
		{
			username: 'Bill',
			password: '1',
			id: '1234'
		}
	]
}

const start = (username, table, method, password) => {
	//let url = `https://api.jikno.com/${table.toLowerCase()}/${userId()}`
	let userId = '';
	return userId(username, password, users())
	

}

const userId = (username, password, users) => {
	for (let x in users) {
		for (let i in users[x]) {
			if (users[x].username === username && users[x].password === password) {
				return handleUserId(users[x].username, users[x].passwordusers[x].id)
			}
		}
	}
}

const handleUserId = (username, password, id) => {
	console.log(username)
	console.log(userId(username, password))
	console.log(password)
	if (!userId(username, password)) {
		return {
			status: 404,
			message: `Username or password does not match`
		}
	} else {	
		return {
			id: userId(username, password),
			username: username,
			password: password,
			status: 200,
		}
	}

}


console.log(start('Jeff', '12'))