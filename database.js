let users = [
    {
        id: '1',
        name: 'Kevin',
        bio: 'A great guy who loves to swim'
    },
    {
        id: '2',
        name: 'J',
        bio: ' A man that loves marketing'
    },
    {
        id: '3',
        name: 'Joe',
        bio: 'A dude with great hair'
    },
];

function getUsers() {
    return users
}

function getUserById(id) {
    return users.find(u => u.id === id)
}

function createUser(data) {
    const payload = {
        id: String(users.length + 1),
        ...data,
    }

    users.push(payload)
    return payload
}

function updateUser(id, data) {
    const index = users.findIndex(u => u.id === id)
    users[index] = {
        ...users[index],
        ...data,
    }

    return users[index]
}

function deleteUser(id) {
    users = users.filter(u => u.id != id)
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}