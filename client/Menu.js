Template.Menu.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('notes');
    });
});

Template.Menu.helpers({

    notes: ()=>{
        return Notes.find({inMenu: true});
    }

});