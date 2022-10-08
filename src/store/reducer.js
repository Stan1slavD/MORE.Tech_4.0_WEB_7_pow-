const defaultState = {
    log:false
  };
  
  const LOG ="LOG"
  export const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case LOG:
        return { ...state, log:action.payload };
  
      default:
        return state;
    }
  };
  

  export const logAction=(payload)=>({type:LOG, payload})