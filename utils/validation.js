export const validateLogin = (email, password) => {
    if (!email || !password) return "Email and password are required.";
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) return "Please enter a valid email.";
    if (password.length < 6) return "Password must be at least 6 characters.";
    return null;
  };
  