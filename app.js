
// const heading = React.createElement("h1", {id: "heading"}, "React chal gaya");

// console.log(heading);  //returns an Object

// React Element (Object) => HTML elements

// const root = ReactDOM.createRoot(document.getElementById("insert"));

// console.log(root);  //returns an Object

// root.render(heading);



const parent = React.createElement(
    "div", 
    {id: "parent"}, [
        React.createElement(
            "div", 
            {id: "child1"}, [
                React.createElement("h1", {}, "h1 using JS"),
                React.createElement("h2", {}, "h2 using JS")
            ]),
            React.createElement(
                "div", 
                {id: "child2"}, [
                    React.createElement("h1", {}, "h1 using JS"),
                    React.createElement("h2", {}, "h2 using JS")
                ])
    ]
    
);



        //If you have to give the multiple children as parameter, use an array to pass as the third parameter.
        //It will ensure the two siblings are created at the same time.

const root = ReactDOM.createRoot(document.getElementById("insert"));

root.render(parent);



