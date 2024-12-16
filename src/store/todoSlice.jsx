import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: 1, title: "Men", complated: false },
    { id: 2, title: "Ikki karra ikki besh", complated: false },
    { id: 3, title: "Qalbinga quloq sol", complated: false },
    { id: 4, title: "Sog'inch", complated: false },
    { id: 5, title: "Atom odatlari", complated: false },
]

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                complated: false
            }
            state.push(newTodo)
        },
        toggleComplate: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id)
            console.log(state[index].complated = !action.payload.complated);
        },
        deleteTodo: (state, action) =>{
            return state.filter(todo => todo.id !== action.payload.id)
        }
    }
})
export const {addTodo, toggleComplate, deleteTodo  } = todoSlice.actions;
export default todoSlice.reducer;