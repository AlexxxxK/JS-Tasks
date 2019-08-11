import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

export const getNotes = async () => {
  try {
    const response = await axios.get("notes");

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const saveNote = async note => {
  try {
    const response = await axios.post("notes", note);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteNote = async id => {
  try {
    await axios.delete(`notes/${id}`);

    return id;
  } catch (error) {
    throw error;
  }
};

export const updateNoteContent = async (id, newContent) => {
  try {
    const response = await axios.patch(`notes/${id}`, newContent);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateNotePriority = async (id, newPriority) => {
  try {
    const response = await axios.patch(`notes/${id}`, newPriority);

    return response.data;
  } catch (error) {
    throw error;
  }
};
