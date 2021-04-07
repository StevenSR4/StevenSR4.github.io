let app = new vue({
    el: "#app",
    data: {
        message:"Hello Vue !"
    }
}); 
let app2 = new vue ({
    el:"#app2",
    data: {
        message: "Loaded on "+ new Date().toLocaleDateString();
       linkUrl: "https://bbc.in/2LanJs8"
       linkText: "Google is down!"
    }

});

let app3 =new vue({
    el: "#app3",
    data: {

        showIt:false
    }
});

let app4=new vue({
    el: "#app4",
    data: {
        theList: [
            {
                text:"Learn HTML"
            },
            {
                text: "Learn CSS"

            },
            {
                text: "Learn JavaScript"

            }
        ]
    }
});