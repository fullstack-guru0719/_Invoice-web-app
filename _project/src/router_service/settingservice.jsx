
import Companysettings from '../MainPage/Administration/Settings/companysettings';
import Localization from '../MainPage/Administration/settings/localization';
import Themesettings from '../MainPage/Administration/Settings/themesetting';
import Rolepermission from '../MainPage/Administration/Settings/rolespermission';
import Emailsettings from '../MainPage/Administration/Settings/emailsetting';
import Invoicesettings from '../MainPage/Administration/Settings/invoicesetting';
import Salarysettings from '../MainPage/Administration/Settings/salarysetting';
import Notification from '../MainPage/Administration/Settings/notification';
import ChangePassword from '../MainPage/Administration/Settings/changepassword';
import Leavetype from '../MainPage/Administration/Settings/leavetype';


export default [  
   {
      path: 'companysetting',
      component: Companysettings
   },
   {
      path: 'localization',
      component: Localization
   },
   {
      path: 'theme-settings',
      component: Themesettings
   },
   {
      path: 'roles-permissions',
      component: Rolepermission
   },
   {
      path: 'email-settings',
      component: Emailsettings
   },
   {
      path: 'invoice-settings',
      component: Invoicesettings
   },
   {
      path: 'salary-settings',
      component: Salarysettings
   },
   {
      path: 'notifications',
      component: Notification
   },
   {
      path: 'change-password',
      component: ChangePassword
   },
   {
      path: 'leave-type',
      component: Leavetype
   }
]