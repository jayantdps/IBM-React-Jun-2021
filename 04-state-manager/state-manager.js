let StateManager = (function(){
    let _currentState = undefined,
        _callbacks = [],
        _reducer = null

    function getState(){
        return _currentState;
    }

    function subscribe(callbackFn){
        _callbacks.push(callbackFn);
    }

    //private 
    function notifiySubscribers(){
        _callbacks.forEach(callbackFn => callbackFn())
    }

    function dispatch(action){
        var newState = _reducer(_currentState, action)
        if (newState === _currentState) return;
        _currentState = newState;
        notifiySubscribers()
    }

    function createStore(reducer){
        if (typeof reducer !== 'function')
            throw new Error('a reducer is mandatory to create the store')
        _reducer = reducer;
        const store = { getState, subscribe, dispatch }
        return store;
    }

    return { createStore };
})()