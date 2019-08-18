import Notepad from "../notepad/notepad";

const initialNotes = [
  {
    id: "id-1",
    title: "JavaScript essentials",
    body:
      "Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc",
    priority: Notepad.Priority.HIGH,
  },
  {
    id: "id-2",
    title: "Refresh HTML and CSS",
    body:
      "Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.",
    priority: Notepad.Priority.NORMAL,
  },
  {
    id: "id-3",
    title: "Get comfy with Frontend frameworks",
    body:
      "First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos. Then I should probably repeat HTML and CSS",
    priority: Notepad.Priority.LOW,
  },
];

const newNote = {
  id: "id-4",
  title: "Winter clothes",
  body:
    "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Notepad.Priority.NORMAL,
};

describe("notepad class", () => {
  let notepad;

  beforeEach(() => {
    notepad = new Notepad(initialNotes);
  });

  afterEach(() => {
    notepad = undefined;
  });

  it("should be an instance of Notepad", () => {
    expect(notepad).toBeInstanceOf(Notepad);
  });

  it("should have initial notes", () => {
    expect(notepad.notes).toEqual(initialNotes);
  });

  it("should set initial notes using setter", () => {
    notepad.notes = newNote;

    expect(notepad.notes).toEqual(newNote);
  });

  it("should save new note", () => {
    notepad.saveNote(newNote);

    expect(notepad.notes).toContainEqual(newNote);
  });

  it("should find note by id", () => {
    expect(notepad.findNoteById("id-3")).toEqual(initialNotes[2]);
  });

  it("should change priority of a note", () => {
    notepad.updateNotePriority("id-2", Notepad.Priority.LOW);

    expect(notepad.notes[1].priority).toEqual(Notepad.Priority.LOW);
  });

  it("should filter notes by query included in title, body or both", () => {
    // title
    expect(notepad.filterNotesByQuery("essentials")).toEqual([initialNotes[0]]);
    // body
    expect(notepad.filterNotesByQuery("React")).toEqual([initialNotes[2]]);
    // title and body
    expect(notepad.filterNotesByQuery("css")).toEqual([
      initialNotes[1],
      initialNotes[2],
    ]);

    expect(notepad.filterNotesByQuery("javascript")).toEqual([
      initialNotes[0],
      initialNotes[1],
    ]);
  });

  it("should filter notes regardless of query case: lower or upper", () => {
    // lowercase
    expect(notepad.filterNotesByQuery("javascript")).toEqual([
      initialNotes[0],
      initialNotes[1],
    ]);
    // uppercase
    expect(notepad.filterNotesByQuery("JAVASCRIPT")).toEqual([
      initialNotes[0],
      initialNotes[1],
    ]);
    // mixed
    expect(notepad.filterNotesByQuery("javaSCRIPT")).toEqual([
      initialNotes[0],
      initialNotes[1],
    ]);
  });

  it("should filter notes by priority", () => {
    expect(notepad.filterNotesByPriority(Notepad.Priority.HIGH)).toEqual([
      initialNotes[0],
    ]);
    expect(notepad.filterNotesByPriority(Notepad.Priority.LOW)).toEqual([
      initialNotes[1],
      initialNotes[2],
    ]);
  });

  it("should update note content", () => {
    // update whole note
    notepad.updateNoteContent("id-1", newNote);
    expect(notepad.notes[0]).toEqual(newNote);

    // update title
    notepad.updateNoteContent("id-3", {
      title: "Get comfy with React.js or Vue.js",
    });
    expect(notepad.notes[2]).toEqual({
      id: "id-3",
      title: "Get comfy with React.js or Vue.js",
      body:
        "First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos. Then I should probably repeat HTML and CSS",
      priority: Notepad.Priority.LOW,
    });

    // update body
    notepad.updateNoteContent("id-3", {
      body:
        "By now you should have a good idea of how Jest can make it easy to test your applications. If you're interested in learning more, here's some related stuff you might want to check out.",
    });
    expect(notepad.notes[2]).toEqual({
      id: "id-3",
      title: "Get comfy with React.js or Vue.js",
      body:
        "By now you should have a good idea of how Jest can make it easy to test your applications. If you're interested in learning more, here's some related stuff you might want to check out.",
      priority: Notepad.Priority.LOW,
    });
  });

  it("should remove note", () => {
    notepad.deleteNote("id-2");

    expect(notepad.notes).not.toContainEqual(initialNotes[1]);
  });
});
