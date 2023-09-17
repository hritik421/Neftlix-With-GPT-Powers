export const ValidateData = (email, password) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    
        const isValidEmail = emailRegex.test(email);
        const isValidPassword = passwordRegex.test(password);
        if (!isValidEmail){
            return "Email is invalid";
        }
        else if(!isValidPassword){
            return "Password is invalid";
        }
        return null;
};