export const todoReducer = ( initialState, action ) => {

    switch (action.type) {
        case '[TODO] Add new todo':
            // throw new Error('Action.type = ABC no esta implementada');
            // return initialState;
            return [ ...initialState, action.payload ];

        case '[TODO Remove todo]':
            return initialState.filter( todo => todo.id !== action.payload );

        case '[TODO Complete todo]':
            return initialState.map( todo => {

                if( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });

        default:
            return initialState;
    }

}