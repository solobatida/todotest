/**
 * Created by andreabaldo on 12/04/16.
 */

var itemController= {
    addNewNote: function(noteStr) {

        var thisID = ++itemModel.lastID;

        itemModel.add({
            content: noteStr,
            date: Date.now(),
            id: thisID
        });
        view.render();
    },
    
    removeNote: function(obj) {
        var clickedNote = itemModel.localStorage.notes[ obj.id - 1 ];
        clickedNote.visible = false;
       // itemModel.remove(this);
        view.render();
    },

    getNotes: function() {
        return itemModel.getAllNotes();
    },

    init: function() {
        itemModel.init();
        view.init();
    }
};
