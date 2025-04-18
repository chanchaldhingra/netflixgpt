
export const checkValidSignInInput = (email, password) => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    if(!emailValid) return 'Email is not valid';
    if(!passwordValid) return 'Password must be at least 8 characters long and contain at least one letter and one number';
    return null;
};

export const checkValidSignUpInput = (email, password, name) => {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    const nameValid = /^[a-zA-Z\s]+$/.test(name);
    if(!nameValid) return 'Name is not valid';
    if(!emailValid) return 'Email is not valid';
    if(!passwordValid) return 'Password must be at least 8 characters long and contain at least one letter and one number';
    return null;
};