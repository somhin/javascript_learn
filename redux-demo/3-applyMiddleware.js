const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

// state
const initialCakeState = {
	numOfCakes: 10,
};

const initialIceCreamState = {
	numOfIceCreams: 20,
};

// actions
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
	return {
		type: BUY_CAKE,
	};
}

function buyIceCream() {
	return {
		type: BUY_ICECREAM,
	};
}

// reducers
const cakeReducer = (state = initialCakeState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes - 1,
			};

		default:
			return state;
	}
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
	switch (action.type) {
		case BUY_ICECREAM:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams - 1,
			};

		default:
			return state;
	}
};

// combine reducer
const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer,
});
// create store
const store = createStore(rootReducer, applyMiddleware(logger));

// log initial state
console.log("initial state ", store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
unsubscribe();
