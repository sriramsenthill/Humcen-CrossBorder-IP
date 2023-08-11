const menu_data = [
  {
    id:1,
    mega_menu:false,
    has_dropdown:true,
    title:'About Us',
    link:'/',
    sub_menus:[
      {link:'/',title:'Creative Agency'},
      {link:'/home-2',title:'Personal Portfolio'},
      {link:'/home-3',title:'Startup Business'},
      {link:'/home-4',title:'Digital Agency'},
      {link:'/home-5',title:'Business Advisor'},
      {link:'/home-6',title:'IT Service Agency'},
    ]
  },
  {
    id:2,
    mega_menu:false,
    has_dropdown:true,
    title:'For Creators',
    link:'/portfolio',
    sub_menus:[
      {link:'/portfolio',title:'Portfolio Full Width'},
      {link:'/portfolio-2',title:'Portfolio Filter 01'},
      {link:'/portfolio-3',title:'Portfolio Filter 02'},
      {link:'/portfolio-masonry',title:'Portfolio Masonry'},
      {link:'/portfolio-details',title:'Portfolio Details'},
    ]
  },
  {
    id:3,
    mega_menu:true,
    has_dropdown:true,
    title:'For IP Professionals',
    link:'#',
    sub_menus:[
      {link:'/about',title:'About'},
      {link:'/about-me',title:'About Me'},
      {link:'/job',title:'Job'},
      {link:'/job-details',title:'Job Details'},
      {link:'/product',title:'Product'},
      {link:'/product-details',title:'Product Details'},
      {link:'/service-1',title:'Service 01'},
      {link:'/service-2',title:'Service 02'},
      {link:'/service-3',title:'Service 03'},
      {link:'/service-4',title:'Service 04'},
      {link:'/service-details',title:'Service Details'},
      {link:'/testimonial',title:'Testimonial'},
      {link:'/price',title:'Price'},
      {link:'/faq',title:'Faq'},
      {link:'/login',title:'Login'},
      {link:'/register',title:'Register'},
      {link:'/cart',title:'Cart'},
      {link:'/wishlist',title:'Wishlist'},
      {link:'/checkout',title:'Checkout'},
      {link:'/404',title:'404'},
    ]
  },
  {
  id:4,
  mega_menu:false,
  has_dropdown:false,
  link: '/business',
  title: 'For Business',
  sub_menus: [
  ],
  },
 
]
export default menu_data;

