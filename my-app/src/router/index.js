import Vue from 'vue'
import Router from 'vue-router'
import Reg from '../pages/Reg'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Movie from '../pages/Movie'
import Book from '../pages/Book'
import Radio from '../pages/Radio'
import Group from '../pages/Group'
import Search from '../pages/Search'
import ShopList from '../pages/ShopList'
import MovieDetails from '../pages/MovieDetails'

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
