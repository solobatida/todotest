/**
 * Created by andreabaldo on 12/04/16.
 */
var view = {
    init: function() {
        this.noteList = $('#notes');
        var newNoteForm = $('#new-note-form');
        var newNoteContent = $('#new-note-content');
        newNoteForm.submit(function(e){
            itemController.addNewNote(newNoteContent.val());
            newNoteContent.val('');
            e.preventDefault();
        });
        view.render();
    },
    render: function(){
        var htmlStr = '';
        itemController.getNotes().forEach(function(note){
            htmlStr += '<li class="note">'+
                note.content + ' ' +
                note.date +
                '</li>';
        });
        this.noteList.html( htmlStr );
    }
};

