import Vue from 'vue'
import Router from 'vue-router'
import Reg from '../components/pages/Reg'
import Login from '../components/pages/Login'
import Home from '../components/pages/Home'
import Movie from '../components/pages/Movie'
import Book from '../components/pages/Book'
import Radio from '../components/pages/Radio'
import Group from '../components/pages/Group'
import Search from '../components/pages/Search'
import ShopList from '../components/pages/ShopList'
import MovieDetails from '../components/pages/MovieDetails'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/shoplist',
      name: 'ShopList',
      component: ShopList
    },
    {
      path: '/movieDetails',
      name: 'MovieDetails',
      component: MovieDetails
    },
  ]
})
