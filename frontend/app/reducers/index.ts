import {LISTING_MENU, TILE_MENU, DEFAULT_MENU} from "../constants"
// Controls which meny to render
const reducer = (state:any, action:any):any =>{
  console.log("reducer")
    switch(action.type){
      case LISTING_MENU: {
        return {
          type: LISTING_MENU,
          payload :action.payload 
        }
        
      }
      case TILE_MENU: {
        return {
          type:TILE_MENU,
          payload :action.payload
        }
      }
    }

    return {
      type: DEFAULT_MENU,
      payload: null
    }
  }

export {reducer}