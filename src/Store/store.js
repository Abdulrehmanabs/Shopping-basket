import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit";

let cartSection = createSlice({
    name: 'cartSection',
    initialState: [
        {
            id: "123",
            title: "Blue t-shirt",
            description: "No fancy sizing charts here, one t-shirt size to rule them all",
            imageUrl: "/blue-tshirt.png",
            price: 3.99,
        },
        {
            id: "456",
            title: "Yellow t-shirt",
            description: "This unique t-shirt is guaranteed to fit nobody, not even new born babies",
            imageUrl: "/yellow-tshirt.png",
            price: 4.99
        },
        {
            id: "789",
            title: "Red t-shirt",
            description: "The only product on our site that might actually be worth buying",
            imageUrl: "/red-tshirt.png",
            price: 7.99
        }
    ],

    reducers: {
        add: (state, action) => {
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item
                }
                return {
                    ...item,
                    added: true
                }
            })
        },
        remove: (state, action) => {
            return state.map(item => {
                if (item.id !== action.payload.id) {
                    return item
                }
                return {
                    ...item,
                    added: false
                }
            })
        }
    }
});


export let { add, remove } = cartSection.actions;

let allSection = combineReducers({ cartSection: cartSection.reducer })
export let meraStore = configureStore({ reducer: allSection });
