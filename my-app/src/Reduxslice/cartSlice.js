import { createSlice } from "@reduxjs/toolkit"
 

const initialState = { 
    name: [], 
    food: [], 
  }; 
    
  const customerSlice = createSlice({ 
    
    // An unique name of a slice 
    name: 'slicename1', 
    
    // Initial state value of the reducer 
    initialState, 
    
    // Reducer methods 
    reducers: { 
      addActionMethod1: (state, { payload }) => { 
        state.name.push(payload); 
      }, 
      addActionMethod2: (state, { payload }) => { 
        state.name.push(payload); 
      }, 
      
    }, 
  }); 
    
  // Action creators for each reducer method 
  export const { addActionMethod1, addActionMethod2 } 
              = customerSlice.actions; 
                
  export default customerSlice.reducer;