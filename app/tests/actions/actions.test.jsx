var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
    it('should genarate search text action', () => {
        var action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Some search text'
        };
        var res = actions.setSearchText(action.searchText);
        expect(res).toEqual(action); 
    });
    
    it('Should genarate toggle show completed todo action', () => {
        var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        var res = actions.toggleShowCompleted();
        
        expect(res).toEqual(action);
    });
    
    it('Should genarate add todo action', () => {
        var action = {
            type: 'ADD_TODO',
            text: 'Thing to do'
        };
        var res = actions.addTodo(action.text);
        
        expect(res).toEqual(action);
    });
    
    it('Should genarate toggle todo action', () => {
        var action = {
            type: 'TOGGLE_TODO',
            id: 1
        };
        var res = actions.toggleTodo(action.id);
        
        expect(res).toEqual(action);
    })
});