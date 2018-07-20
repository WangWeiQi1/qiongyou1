import Vue from 'vue'
import Router from 'vue-router'
import Find from '@/components/find/Find'
import FindDetail from '@/components/find/FindDetail'
import Mine from '@/components/mine/Mine'
import Index from '@/components/index/Index'
import Shop from '@/components/shop/Shop'
import Add from '@/components/add/Add'
import Nearby from '@/components/nearby/Nearby'
import Destination from '@/components/destination/Destination'
import Tool from '@/components/tool/Tool'
import Men from '@/components/mate/Men'
import Women from '@/components/mate/Women'
import Every from '@/components/mate/Every'
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
import MyMessage from '@/components/mymessage/MyMessage'
import PrivateLetter from '@/components/privateletter/PrivateLetter'
import PartnerMessage from '@/components/partnermessage/PartnerMessage'
import PeopleIntroduction  from '@/components/partnermessage/PeopleIntroduction'
import SetUp from '@/components/setup/SetUp'
import CreateTravel from '@/components/createtravel/CreateTravel'
import Unlog from '@/components/login/Unlog'
import Foodcollect from '@/components/foodcollect/Foodcollect'
import Hotelcol from '@/components/hotelcollect/Hotelcol'
import Viewcollect from '@/components/viewcollect/viewcollect'
import Order from '@/components/order/Order'
import Note from '@/components/youji/Note'
import Notedetail from '@/components/youji/Notedetail'
import Collect from '@/components/collect/Collect'
import EveryDetail from '@/components/mate/EveryDetail'
import MenDetail from '@/components/mate/MenDetail'
import WomenDetail from '@/components/mate/WomenDetail'
import LoginRequest from '@/components/login/LoginRequest'
import Regist from '@/components/login/Regist'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/find',
      name:'Find',
      component:Find
    },
    {
      path:'/finddetail',
      name:'FindDetail',
      component:FindDetail
    },
    {
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
      path:'/everydetail',
      name:'EveryDetail',
      component: EveryDetail
    },
    {
      path:'/mendetail',
      name:'MenDetail',
      component:MenDetail
    },{
      path: '/womendetail',
      name: 'WomenDetail',
      component: WomenDetail
    },
    {
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

    },

    /*************hhy**************/
    {
          path:'/MyMessage',
          name:'MyMessage',
          component:MyMessage
    },
    {
      path:'/PrivateLetter',
      name:'PrivateLetter',
      component:PrivateLetter
  },
  {
      path:'/PartnerMessage',
      name:'PartnerMessage',
      component: PartnerMessage
  },
  {
      path:'/PeopleIntroduction',
      name:'PeopleIntroduction',
      component: PeopleIntroduction
  },
  {
      path:'/SetUp',
      name:'SetUp',
      component: SetUp
  },
  {
      path:'/CreateTravel',
      name:'CreateTravel',
      component: CreateTravel
  },
    /*************hhy**************/
    {
      path: '/unlog',
      name: 'Unlog',
      component: Unlog
    },
    {
      path: '/foodcollect',
      name: 'Foodcollect',
      component: Foodcollect
    },
    {
      path: '/hotelcol',
      name: 'Hotelcol',
      component: Hotelcol
    },
    {
      path: '/viewcollect',
      name: 'Viewcollect',
      component: Viewcollect
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/note',
      name: 'Note',
      component: Note
    },
    {
      path: '/notedetail',
      name: 'Notedetail',
      component: Notedetail
    },
    {
      path: '/collect',
      name: 'Collect',
      component: Collect
    },
    {
      path: '/loginrequest',
      name: 'LoginRequest',
      component :LoginRequest   
    },
    {
      path: '/regist',
      name: 'Regist',
      component:Regist
    }
  ]
})
