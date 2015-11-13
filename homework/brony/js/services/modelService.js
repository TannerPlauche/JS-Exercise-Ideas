var app = angular.module("BronyApp");

app.service("modelService", function () {

    this.ponyList = [
        {
            name: "Applejack",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Pinkie Pie",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Fluttershy",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Rainbow Dash",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Rarity",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Twilight Sparkle",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Apple Bloom ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Scootaloo ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Sweetie Belle ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Aloe ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Charity Kindheart ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Cheerilee ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Cherry Jubilee ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Coco Pommel ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Goldie Delicious ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Granny Smith ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "The Headless Horse ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Junebug ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Lotus Blossom ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Mane Goodall ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Mane-iac ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Mayor Mare ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Mrs. Cup Cake ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Ms. Harshwhinny ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Ms. Peachbottom ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Nurse Redheart ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "The Olden Pony ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Photo Finish ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Prim Hemline ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Roma ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Spoiled Rich ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Suri Polomare ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Daring Do Collector Teddie Safari",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Torch Song ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Tree Hugger ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Conductor All Aboard ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Big McIntosh ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Braeburn ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Cheese Sandwich ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Doc Top ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Double Diamond ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Dr. Caballeron ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Filthy Rich ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Gizmo ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Hoity Toity ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Mr. Carrot Cake ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Randolph ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Earth pony royal guards ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Sheriff Silverstar ",
            img: "/images/Cherry_Spices.png"
	},
        {
            name: "Silver Shill ",
            img: "/images/Cherry_Spices.png"
	},
	];



    this.favoritePoniesList = [{
            name: "Dr.Caballeron",
            img: "http://pre07.deviantart.net/1f5c/th/pre/i/2013/341/9/d/dr__caballeron_by_scribbsie-d6x251p.png"
	},
                              ];


});






//Store a pre-populated list of 50 pony objects
//Store a running list of favorite pony objects
//Be in its own .js file
//Must not be accessed by any controllers