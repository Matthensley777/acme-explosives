"use strict";

const dom = require('./dom');

    $("#Explosives").click((e) => {
        dom.categoriesJSON();
        dom.writeDOM(e.target.id);
    });
    $("#Fireworks").click((e) =>{
        dom.categoriesJSON();
        dom.writeDOM(e.target.id);
    });