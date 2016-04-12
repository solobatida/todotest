/**
 * Created by andreabaldo on 12/04/16.
 */

var itemController= {
    addNewNote: function(noteStr) {
        itemModel.add({
            content: noteStr,
            date: Date.now()
        });
        view.render();
    },
    
    removeNote: function() {
        
;       itemModel.remove(this);
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
