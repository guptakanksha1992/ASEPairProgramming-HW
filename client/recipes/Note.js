Template.Note.events({
    'click .toggle-menu': function () {
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },
    'click .fa-trash': function () {
        Meteor.call('deleteNote', this._id);
    }
});
