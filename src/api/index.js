import ajax from './ajax'
// 请求主页信息 http://localhost:3000/index
export const reqMain = () => ajax('/api/index')
// 请求轮播图 http://localhost:3000/carousel
export const reqCarousel = () => ajax('/api/carousel')
// 获取E宠分类列表 http://localhost:3000/classify
export const reqCategory = () => ajax('/api/classify')
// 获取E宠品牌列表 http://localhost:3000/brand
export const reqBrand = () => ajax('/api/brand')
// 获取E宠全部 http://localhost:3000/allbrand
export const reqAllbrand = () => ajax('/api/allbrand')
