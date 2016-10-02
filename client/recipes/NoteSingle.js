Template.NoteSingle.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('notes');
    });
});

Template.NoteSingle.helpers({
    note: ()=>{
        var id = FlowRouter.getParam('id');
        return Notes.findOne({_id: id});
    }
});