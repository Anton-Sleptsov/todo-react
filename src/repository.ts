export async function createToDoInServer(text: string) {
  const data = { text };
  const headers = new Headers();
  if (data) {
    headers.set("Content-Type", "application/json");
  }
  const requestOptions = {
    method: "POST",
    headers,
    body: JSON.stringify(data),
  };

  const resultFeatch = await fetch(
    "http://localhost:5062/ToDo/Create",
    requestOptions
  );

  const result = await resultFeatch.json();

  return result;
}

export async function deleteToDoInServer(id: number) {
  const requestOptions = {
    method: "DELETE",
  };

  await fetch(`http://localhost:5062/ToDo/Delete/${id}`, requestOptions);
}

export async function updateStatusToDoInServer(id: number) {
  const requestOptions = {
    method: "PATCH",
  };

  const resultFeatch = await fetch(
    `http://localhost:5062/ToDo/UpdateStatus/${id}`,
    requestOptions
  );

  const result = await resultFeatch.json();

  return result;
}

export async function getAllToDosFromServer() {
  const requestOptions = {
    method: "GET",
  };

  const resultFeatch = await fetch(
    `http://localhost:5062/ToDo/GetAll/`,
    requestOptions
  );

  const result = await resultFeatch.json();

  return result;
}
