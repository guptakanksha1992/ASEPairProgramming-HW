Template.Notes.onCreated(function () {
    var self = this;
    self.autorun(function () {
       self.subscribe('notes');
    });
});

Template.Notes.helpers({

    notes: ()=>{
        return Notes.find({}
        );
    }

});