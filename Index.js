
// +++++++++++++++++++++++|
// =======================|
// -----------------------|
//                        |
//      STARTER CODE      |
//                        |
// -----------------------|
// =======================|
// +++++++++++++++++++++++|

// export default { something, somethingElse }
// ===
// export something;
// ===
// module.exports.something = something;

// export default something;
// ===
// module.exports = something;

import db from '../DB';

const getUser = (table, method, username, password) => {
	const res = {};

	// Fetch User
	const user = db.start(username, table, method);

	// Get User Id
	const userId = user.id;

	// Confirm User
	const userPassword = user.data.password === password;
	const userId = user.data.username === username;

	// Validate Fetch
	const status = user.res.status;

	if (status > 300) {
		res.status = 500;
		res.message = user.res.message;
	}

	// Send Response

	return {
		status: res.status,
		user: user.data,
		message: res.message,
	}
}
