
import Chat from '../MainPage/Main/Apps/chat';
import VoiceCall from '../MainPage/Main/Apps/voicecall';
import VideoCall from '../MainPage/Main/Apps/videocall';
import Incomingcall from '../MainPage/Main/Apps/incomingcall';
import Outgoingcall from '../MainPage/Main/Apps/outgoingcall';

export default [  
   {
      path: 'chat',
      component: Chat
   }, 
   {
      path: 'voice-call',
      component: VoiceCall
   },  
   {
      path: 'video-call',
      component: VideoCall
   },  
   {
      path: 'incoming-call',
      component: Incomingcall
   },  
   {
      path: 'outgoing-call',
      component: Outgoingcall
   },  
]