const Pet = ({animal, breed, name}) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed)
    ])
}



const App = ()  => {
    return React.createElement( "div", {id: "something-important"},
        [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, { name: "Luna", animal:"Dog", breed:"havanese" } ),
            React.createElement(Pet, { name: "Pepper", animal:"Bird", breed:"cocaktiel" } ),
            React.createElement(Pet, { name: "Doink", animal:"Cat", breed:"mixed" } ), 
        ]
    )
}

ReactDOM.render(
    React.createElement(App), 
    document.getElementById("root")
);