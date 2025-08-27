// Simulated API call (mock)
export const loginUser = async (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === "test@test.com" && password === "123456") {
          resolve({ success: true });
        } else {
          resolve({ success: false, message: "Invalid email or password" });
        }
      }, 1000);
    });
  };
  