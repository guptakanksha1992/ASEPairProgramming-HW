/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

// import { Notes } from '../../collections/Notes.js'

export const TestNotes = new Mongo.Collection('testNotes');

Meteor.methods({
    toggleMenuItem2: function(id, currentState) {
        TestNotes.update(id, {
            $set: {
                inMenu: !currentState
            }
        });
    },
    deleteNote2: function (id) {
        TestNotes.remove(id);
    }
});

if (Meteor.isServer) {
    describe('TestNotes', () => {
        describe('methods', () => {
            const userId = this.userId;
            let noteId;

            beforeEach(() => {
                TestNotes.remove({});
        });

            it('can delete owned task', () => {
                const deleteNote2 = Meteor.server.method_handlers['deleteNote2'];
                const invocation = { userId };
                deleteNote2.apply(invocation, [noteId]);
                assert.equal(TestNotes.find().count(), 0);
            });

            it('can toggle note true/false', () => {
               const toggleNote2 = Meteor.server.method_handlers['toggleMenuItem2'];
               const invocation = { userId };
               toggleNote2.apply(invocation, [noteId]);
               assert(TestNotes.find(noteId, {inMenu: true}),true);
            });
        });
    });
}