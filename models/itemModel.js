/**
 * Created by andreabaldo on 12/04/16.
 */
var itemModel = {
    init: function () {
        if (!localStorage.notes) {
            localStorage.notes = JSON.stringify([]);
        }
    },

    add: function (obj) {
        var data = JSON.parse(localStorage.notes);
        data.push(obj);
        localStorage.notes = JSON.stringify(data);
    },
    
    remove: function (obj) {
        var data = JSON.parse(localStorage.notes);
        data.pop(obj);
        localStorage.notes = JSON.stringify(data);
        console.log('obj' + JSON.stringify(obj));
    },

    getAllNotes: function () {
        return JSON.parse(localStorage.notes);
    }
}