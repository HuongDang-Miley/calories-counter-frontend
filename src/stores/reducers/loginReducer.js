import { v4 as uuidv4 } from "uuid";
const initialState = {
    user: {
        id: uuidv4(),
        email: 'Tom@email.com',
        password: '123',
    }
}


const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}

export default loginReducer