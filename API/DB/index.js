// Params: username, table, method
const users = [
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





const start = (username, table, method, password) => {
	let url = `https://api.jikno.com/${table.toLowerCase()}/${userId()}`
	let userId = '';

}

const userId = (username, password) => {
	for (let x in users) {
		for (let i in users[x]) {
			if (users[x].username === username && users[x].password === password) {
				return users[x].id
			}
		}
	}
}

const handleUserId = (username, password) => {
	if (!userId(username, password)) {
		return {
			status: 404,
			message: `User with username: ${username}, does not exist`
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


console.log(handleUserId('Jeff', '12'))