import { combineReducers } from 'redux';
import logFilter from './logFilter';

const app = combineReducers({
   config: (state = {}) => state,
   filter: logFilter,
   logSources: (state = {}) => state
});

export default app;