"use strict";

    let categories = [];
    let types = [];
    let products = [];

    
const writeDOM = (userSelectedCategory) => {
        console.log("writeDOM", writeDOM);
        var domString = "";
        var selectedCategory = userSelectedCategory;
            categories.forEach(function(currentCategory){
                if (currentCategory.name === selectedCategory){
                    console.log("currentCategory", currentCategory.name);
                    types.forEach(function(currentType){
                        if (currentType.category === currentCategory.id) {
                            console.log("currentType", currentType);
                            domString += `<h1>${currentType.name}</h1>`;
                            domString += `<h3>${currentType.description}</h3>`;
                            products.forEach(function(currentProduct){
                                if (currentProduct.type === currentType.id) {
                                    console.log(currentProduct);
                                    domString += `<h4>${currentProduct.name}</h4>`;
                                    domString += `<p>${currentProduct.description}</p>`;
                                }
                            });
                        }
                    });
                }
            });

        $("#output").html(domString);
    };

   
    const categoriesJSON = () =>{
        return new Promise((resolve, reject) => {
            $.ajax("./json/catagories.json").done((data1) =>{
                resolve(data1.categories);
            }).fail((error1) => {
                reject(error1);
            });
        });
    };

    const typesJSON = () => {
        return new Promise((resolve, reject) => {
            $.ajax("./json/types.json").done((data2) =>{
                resolve(data2.types);
            }).fail((error2) =>{
                reject(error2);
            });
        });
    };

    const productsJSON = () => {
        return new Promise((resolve, reject) =>{
            $.ajax("./json/products.json").done((data3) =>{
                resolve(data3.products);
            }).fail((error3) => {
                reject(error3);
            });
        });
    };

    categoriesJSON().then(function(data1) {
        categories = data1;
        console.log("categories", categories);
        return typesJSON();
    }).then(function(data2) {
        types = data2; 
        console.log("types", types);
        return productsJSON();
    }).then(function(data3) {
        products = data3;
        console.log("products", products);
        
    }).catch(function(error){
        console.log(error);
    });







module.exports = {categoriesJSON, typesJSON, productsJSON, writeDOM};



















