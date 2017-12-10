var expect = require('expect');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it ('should set searchText', () =>{
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'DOG'
            };
            var res = reducers.searchTextReducer('', action);
            
            expect(res).toEqual(action.searchText);
        };
    });
        
        
    //Test website
    descibe('showComletedReducer', () => {
        it ('Should toggle showCompleted') => {
            var action = {
                type: 'TOGGLE_REDUCER',
                showCompleted: false
            };
            var res = reducers.showCompletedReducer(false, action)
            
            expect(res).toEqual(true); 
        };
    });
        
        
    decribe('todoReducers', () => {
        it('Show add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                title: 'Wlk the dog'
            };
            var res = actions.todoReducers(df([]), df(action));
            
            expect(res.length).toEqual();
            expect(res[0].title).toEqual(action.title);
        });
        
        it('Should toogle todo', () => {
            var todos = [{
                id: '123',
                title: 'Some thing',
                completed: true,
                createAt 123,
                completeAt: 125
            }];
            var action = {
                type: 'TOGGLE_TODO',
                id: '123'
            };
            var res = reducers.todoReducer(df(todos), df(action));
            
            expect(resp[0].completed).toEqual(false);
            expect(resp[0].completedAt).toEqual(undefined);
        });
    });
});