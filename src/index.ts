import express from "express";
const app = express()
const port = 8080;

app.get( "/", ( request, response ) => {
    response.send(
        {pinaColada: {
                pineappleJuice: "4.5 oz",
                cocoLopez: "1.5 oz",
                lightRum: "1.5 oz (optional)",
            }}
    );
});

app.get( "/toDoListItems", ( request, response ) => {
    response.send(
        {toDoItems: [
            'Vibe',
            'Listen to Beach Boys or something?',
            "SUNSCREEN DON'T FORGET AGAIN",
            'Get a closer look at that weird smelly thing that just washed up',
            'Aloe vera (I forgot sunscreen again)',
        ]}
    );
});

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
