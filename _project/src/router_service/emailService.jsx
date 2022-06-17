
import Inbox from '../MainPage/Main/Apps/Email/inbox';
import Compose from '../MainPage/Main/Apps/Email/compose';
import Mailview from '../MainPage/Main/Apps/Email/mailview';

export default [  
   {
      path: 'inbox',
      component: Inbox
   }, 
   {
      path: 'compose',
      component: Compose
   }, 
   {
      path: 'mail-view',
      component: Mailview
   }
]