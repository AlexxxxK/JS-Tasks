const URL = "http://localhost:3000/notes";

export const getNotes = () => {
  return fetch(URL).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`Error while fetching: ${response.statusText}`);
  });
};

export const saveNote = note => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note),
  };
  return fetch(URL, options).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error("Error while saving: " + response.statusText);
  });
};

export const deleteNote = id => {
  const options = {
    method: "DELETE",
  };
  return fetch(`${URL}/${id}`, options).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error("Error while deleting: " + response.statusText);
  });
};

export const updateNoteContent = (id, newContent) => {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newContent),
  };
  fetch(`${URL}/${id}`, options).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error("Error while updating: " + response.statusText);
  });
};

export const updateNotePriority = (id, newPriority) => {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPriority),
  };
  fetch(`${URL}/${id}`, options).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error("Error while updating: " + response.statusText);
  });
};
