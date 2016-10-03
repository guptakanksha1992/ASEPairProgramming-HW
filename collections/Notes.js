Notes = new Meteor.Collection('notes');

Notes.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

bullet = new SimpleSchema({
   date: {
       type: String
   },
    point: {
       type: String
   }
});

NotesSchema=new SimpleSchema({

    name: {
        type: String,
        label: "Name"

    },
    desc: {
        type: String,
        label: "Description"

    },
    bullet: {
        type: [bullet]
    },
    inMenu: {
      type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
          type: "hidden"
        }
    },
    author:
    {
        type:String,
        label:"Author",
        autoValue: function()
        {
            if (this.isInsert) {
                return this.userId
            }
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {

        type:Date,
        label: "Created At",
        autoValue: function(){
                 return new Date()
             },
        autoform: {
            type: "hidden"
        }
    }
});

Meteor.methods({
   toggleMenuItem: function(id, currentState) {
       Notes.update(id, {
           $set: {
               inMenu: !currentState
           }
       });
   },
   deleteNote: function (id) {
       console.log(id);
       Notes.remove(id);
   }
});

Notes.attachSchema(NotesSchema);