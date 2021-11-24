const BASE_URL =
  "https://yalantis-react-school-api.yalantis.com/api/task0/users";

async function FetchWithErrorUsers(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function FetchUsers() {
  return FetchWithErrorUsers(`${BASE_URL}`);
}
