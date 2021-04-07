let app = new vue({
    el: "#app",
    data: {
        message:"Hello Vue !"
    }
}); 
let app2 = new vue ({
    el:"app2",
    data: {
        message: "Loaded on "+ new Date().toLocaleDateString();
       linkUrl: "https://bbc.in/2LanJs8"
       linkText: "Google is down!"
    }

})