const prodConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-app.firebaseapp.com",
    databaseURL: "https://your-app.firebaseio.com",
    projectId: "your-app",
    storageBucket: "your-app.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
};


// NEXT_PUBLIC_FIREBASE_APP_ID=1:1085494459734:web:08cd90f9a4c08e6d1f2af7

// const devConfig = {
//     apiKey: "AIzaSyBqu7Mq7GqYzIcidkBQmvHokMp9m7jEcl8",
//     authDomain: "final-file.firebaseapp.com",
//     // authDomain: "invoicetemplate.com",
//     databaseURL: "https://final-file.firebaseio.com",
//     projectId: "final-file",
//     storageBucket: "final-file.appspot.com",
//     messagingSenderId: "1085494459734",
//     appId: "1:88315574476:web:79959cab5fcbe6e3ffea69",
//     measurementId: "G-55T9D7Z8ZT",
// };

const devConfig = {
    apiKey: "AIzaSyDlCQ2KVnm8jc0qww-7rnILrouVE8bynm8",
    authDomain: "web-push-2fd31.firebaseapp.com",
    // authDomain: "invoicetemplate.com",
    databaseURL: "https://web-push-2fd31.firebaseio.com",
    projectId: "web-push-2fd31",
    storageBucket: "web-push-2fd31.appspot.com",
    messagingSenderId: "88315574476",
    appId: "1:88315574476:web:79959cab5fcbe6e3ffea69",
    measurementId: "G-55T9D7Z8ZT",
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
