Recipes=new Meteor.Collection('recipes');

Recipes.allow({
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
    note: {
       type: String
   }
});

RecipeSchema=new SimpleSchema({

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
       Recipes.update(id, {
           $set: {
               inMenu: !currentState
           }
       });
   },
   deleteRecipe: function (id) {
       Recipes.remove(id);
   }
});

Recipes.attachSchema(RecipeSchema);