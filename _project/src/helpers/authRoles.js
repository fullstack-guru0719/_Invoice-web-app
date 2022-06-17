const authRoles = {
    admin: ['admin'],
    staff: ['admin', 'staff'],
    user: ['admin', 'staff', 'user'],
    onlyGuest: ['guest']
};

export default authRoles;
