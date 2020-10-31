
import firebase from 'firebase/app'
// import 'firebase/app'
// import 'firebase/auth'

const routes = [
	//Not Logged
 	{
		path: '/', component: () => import('layouts/NotLogged.vue'),
		children: [
			{
                path: '',
                name: 'index',
				component: () => import('pages/Index.vue')
			},
			{
				path: '/login',
				name: "login",
				component: () => import('pages/Login.vue')
	 		},
			{
				path: '/sing_up',
				name: "sing_up",
				component: () => import('pages/SingUp.vue')
			},
			{
				path: '/forgot_password',
				name: "forgot_password",
				component: () => import('pages/ForgotPassword.vue')
			},

        ],
        beforeEnter: (to, from, next) => {
            verifyLoginUser(to, from, next)

        }
	},
	{
		path: '/', component: () => import('layouts/Logged.vue'),
		children: [
			{
                path: 'home',
                name:'home',
				component: () => import('pages/Home')
			},
			{
				path: 'like',
				component: () => import('pages/Like')
			},
			{
                path: 'Messages',
                name:'messages',
				component: () => import('pages/Messages')
            },
            {
                path: 'Message',
                name:'message',
				component: () => import('pages/Message')
			},
			{
				path: '/get_photo',
				name: "get_photo",
				component: () => import('pages/GetPhoto.vue')
			}
        ],
        beforeEnter: (to, from, next) => {
            verifyLoginUser(to, from, next)
        }
	}
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}
export default routes


function verifyLoginUser(to, from, next) {
    const urlNotLogged = ['index', 'login', 'sing_up', 'forgot_password']
    firebase.auth().onAuthStateChanged((user) =>{
        if (user) {
			if(urlNotLogged.includes(to.name)) next({name: 'home'})
            next()
        } else {
            if(from.name != 'login') {
                if(urlNotLogged.includes(to.name)) next()
                else next({name: 'index'})
            }
            else next({name: 'login'})
        }
    })
}

// User is signed in.
// var displayName = user.displayName;
//var email = user.email;
// var emailVerified = user.emailVerified;
// var photoURL = user.photoURL;
// var isAnonymous = user.isAnonymous;
// var uid = user.uid;
// var providerData = user.providerData;
