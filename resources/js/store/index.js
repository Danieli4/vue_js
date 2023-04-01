import { createStore } from 'vuex';
import Person from './modules/person'
const store = createStore({
    state: {},
    modules: {Person},

})

export default store
