export const login = async (email: string, password: string) => {
  const response = await fetch("http://localhost:8080/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      email,
      password,
    }),
  });
  if (response.ok) {
    return await response.json();
  } else {
    const error = await response.json();
    if (error.statusCode < 500) {
      throw new Error(error.message);
    } else {
      throw new Error("Something went wrong");
    }
  }
};
