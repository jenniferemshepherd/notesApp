var Note = require ('../src/note-model.js')

describe ('note', function(){
  it('returns the text content', function() {
    var firstNote = new Note();
    expect(firstNote.noteText()).toEqual("Tom is a geek")
  });
});
