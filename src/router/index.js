import Vue from 'vue'
import Router from 'vue-router'
import Find from '@/components/find/Find'
import Mine from '@/components/mine/Mine'
import Index from '@/components/index/Index'
import Shop from '@/components/shop/Shop'
import Add from '@/components/add/Add'
import Nearby from '@/components/nearby/Nearby'
import Destination from '@/components/destination/Destination'
import Mate from '@/components/mate/Mate'
import Tool from '@/components/tool/Tool'
import Men from '@/components/mate/Men'
import Women from '@/components/mate/Women'
import Every from '@/components/mate/Every'
import Youji from '@/components/youji/Youji'
import Gonglue from '@/components/gonglue/Gonglue'
import GonglueDetail from '@/components/gonglue/GonglueDetail'
import Gongju from '@/components/gongju/Gongju'
import WriteYouji from '@/components/writeYouji/WriteYouji'
import Draft from '@/components/caogao/Draft'
import Gowith from '@/components/faqi/Gowith'
import City from '@/components/city/City'
import Restaurant from '@/components/restaurant/Restaurant'
import Hotel from '@/components/hotel/Hotel'
import TripAddress from '@/components/tripAddress/TripAddress'
// import TripNotes from '@/components/tripnotes/TripNotes'
import HotelDetail from '@/components/hotel/HotelDetail'
import RestaurantDetail from '@/components/restaurant/RestaurantDetail'
import TripAddressDetail from '@/components/tripAddress/TripAddressDetail'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/find',
      name:'Find',
      component:Find
    },{
      path:'/mine',
      name:'Mine',
      component:Mine
    },{
      path:'/',
      name:'Index',
      component:Index
    },{
      path:'/shop',
      name:'Shop',
      component:Shop
    },{
      path:'/add',
      name:'Add',
      component:Add
    },{
      path:'/nearby',
      name:'Nearby',
      component:Nearby
    },{
      path:'/destination',
      name:'Destination',
      component:Destination
    },{
      path:'/mate',
      name:'Mate',
      component:Mate
    },{
      path:'/tool',
      name:'Tool',
      component:Tool
    },
    {
      path:'/men',
      name:'Men',
      component:Men
    },{
      path:'/women',
      name:'Women',
      component:Women
    },
    {
      path:'/every',
      name:'Every',
      component:Every
    },
    {
      path:'/youji',
      name:'Youji',
      component:Youji
    }, {
      path:'/gonglue',
      name:'Gonglue',
      component:Gonglue
    },{
      path:'/gonglueDetail',
      name:'GonglueDetail',
      component:GonglueDetail
    },{
      path:'/writeYouji',
      name:'Writeyouji',
      component:WriteYouji
    },{
      path:'/draft',
      name:'Draft',
      component:Draft
    },{
      path:'/Gongju',
      name:'Gongju',
      component:Gongju
    },{
      path:'/Gowith',
      name:'Gowith',
      component:Gowith
    },{
      path:'/city',
      name:'City',
      component:City
    },{
      path:'/tripaddress',
      name:'TripAddress',
      component:TripAddress
    },{
      path: '/restaurant',
      name: 'Restaurant',
      component: Restaurant
    }
    ,{
      path: '/hotel',
      name: 'Hotel',
      component: Hotel
    },{
      path: '/hoteldetail',
      name: 'HotelDetail',
      component: HotelDetail
    },{
      path: '/restaurantdetail',
      name: 'RestaurantDetail',
      component: RestaurantDetail
    },{
      path: '/tripaddressdetail',
      name: 'TripAddressDetail',
      component: TripAddressDetail
    }
  ]
})
