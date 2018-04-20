import {RECIEVE_MAINFO, RECIEVE_MAINCAROUSEL, RECIEVE_CATEGORY, RECIEVE_BRANDLIST, RECIEVE_ALLBRAND} from './mutation-types'
export default {
  [RECIEVE_MAINFO] (state, {mainInfo}) {
    state.mainInfo = mainInfo
  },
  [RECIEVE_MAINCAROUSEL] (state, {mainCarousel}) {
    state.mainCarousel = mainCarousel
  },
  [RECIEVE_CATEGORY] (state, {categoryList}) {
    state.categoryList = categoryList
  },
  [RECIEVE_BRANDLIST] (state, {brandList}) {
    state.brandList = brandList
  },
  [RECIEVE_ALLBRAND] (state, {allbrand}) {
    state.allbrand = allbrand
  }
}
