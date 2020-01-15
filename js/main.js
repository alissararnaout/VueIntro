// todo => use a key to track the current video, or just pass the video in as a ref to the function and grab its source

var vm = new Vue({
  el: "#app",

  data: {

    // mock up the user - this well eventually come from the database UMS (user management system)
    user: {
      isAdmin: false,
      avatar: "thor.png", // or whatever you have
      isLoggedIn: true
    },

    // this data would come from the database
    videodata: [ // wer are using these to populate our content sec
      { name: "Star Wars The Force Awakens", thumb: "forceawakens.jpg", vidsource: "forceawakens.mp4", description: "yet another star wars movie" },
      { name: "Stranger Things", thumb: "strangerthings.jpg", vidsource: "strangerthings.mp4", description: "don't get lost in the upside down" },
      { name: "Marvel's The Avengers", thumb: "avengers.jpg", vidsource: "avengers.mp4", description: "will they make black widow action figures this time?" }
    ],
    
    videotitle: "video title goes here", // just take the things you need from the object and populate your vue
    vidsource: "",
    viddescription: "video description here",

    showDetails: false
  },

  methods: { // functionality that you can store in vue and run
    setUserPrefs() {
      // this is the preferences control, hit the API when ready (or as a component)
      console.log('set user prefs here');
    },

    userLogin() {
      // call the login route and/or load the login component
      console.log('do login / logout on click');

      // this is the ternary statement --> fortand for if/else
      // the expression evaluates to true or false - if true, set the value equal to left of colon
      // if false, set value equal to the right
      this.user.isLoggedIn = (this.user.isLoggedIn) ? false : true;
    },

    showMovieDetails({name, vidsource, description}) {
      //console.log('show these details', movie);

      this.videotitle = name;
      this.vidsource = vidsource;
      this.viddescription = description;

      // make the movie show up
      this.showDetails = true;
    }
  }
});
