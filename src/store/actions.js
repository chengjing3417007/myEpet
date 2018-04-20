import {RECIEVE_MAINFO, RECIEVE_MAINCAROUSEL, RECIEVE_CATEGORY, RECIEVE_BRANDLIST, RECIEVE_ALLBRAND} from './mutation-types'
import {reqMain, reqCarousel, reqCategory, reqBrand, reqAllbrand} from '../api'

export default {
  // 异步获取mainInfo
  async getMainInfo ({commit}) {
    const result = await reqMain()
    if (result.code === 0) {
      const mainInfo = result.data
      commit(RECIEVE_MAINFO, {mainInfo})
    }
  },
  // 异步获取轮播图MainCarousel
  async getMainCarousel ({commit}) {
    const result = await reqCarousel()
    if (result.code === 0) {
      const mainCarousel = result.data
      commit(RECIEVE_MAINCAROUSEL, {mainCarousel})
    }
  },
  // 异步获取分类列表
  async getCategoryList ({commit}) {
    const result = await reqCategory()
    if (result.code === 0) {
      const categoryList = result.data.categorys
      commit(RECIEVE_CATEGORY, {categoryList})
    }
  },
  // 异步获取品牌列表
  async getBrandList ({commit}) {
    const result = await reqBrand()
    if (result.code === 0) {
      const brandList = result.data.brand
      commit(RECIEVE_BRANDLIST, {brandList})
    }
  },
  // 异步获取全部列表
  async getAllbrand ({commit}, callback) {
    const result = await reqAllbrand()
    if (result.code === 0) {
      const allbrand = result.data.brand
      commit(RECIEVE_ALLBRAND, {allbrand})
      callback && callback()
    }
  }
}
