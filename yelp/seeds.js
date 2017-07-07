var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {name: "clouds rest", 
    image: "http://visitmckenzieriver.com/oregon/wp-content/uploads/2015/06/paradise_campground.jpg", 
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores enim ratione voluptas quam adipisci. Nihil architecto pariatur corporis accusamus itaque obcaecati quibusdam, consequatur perspiciatis sint minus, dolores necessitatibus delectus, ea."},
    {name: "camp2", 
    image: "https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5259404.jpg", 
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores enim ratione voluptas quam adipisci. Nihil architecto pariatur corporis accusamus itaque obcaecati quibusdam, consequatur perspiciatis sint minus, dolores necessitatibus delectus, ea."},
    {name: "camp3", 
    image: "http://www.nationalparks.nsw.gov.au/~/media/DF58734103EF43669F1005AF8B668209.ashx", 
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores enim ratione voluptas quam adipisci. Nihil architecto pariatur corporis accusamus itaque obcaecati quibusdam, consequatur perspiciatis sint minus, dolores necessitatibus delectus, ea."}
]
function seedDB(){
    Campground.remove({}, function(err){
        // if (err){
        //     console.log(err);
        // }
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err);
        //         } else {
        //             Comment.create(
        //             {
        //                 text:"This place is great, but I waish there was internet",
        //                 author: "homer"
        //             }, function(err, comment){
        //                 if(err){
        //                     console.log(err);
        //                 } else {
        //                     campground.comments.push(comment);
        //                     campground.save();
        //                 }
                    
        //             });
        //         }
        //     });
        // });
    });
}

module.exports = seedDB;

