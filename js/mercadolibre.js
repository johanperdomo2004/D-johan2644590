let inputBusqueda = document.getElementById('inputBusqueda');

class Automovil {
    constructor(marca, modelo, precio,año,kms,direccion,imagen){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.año = año;
        this.kms= kms;
        this.direccion = direccion;
        this.imagen = imagen;

    }
};

let auto1 = new Automovil("VOLKSWAGEN", "CRAFTER",450000, 2015 ,988000,"Pitalito-Huila", "img/2595.jpg" );

// alert ( auto1.marca + " " + auto1.modelo); 

inputBusqueda.addEventListener("keydown", function(event){
    if (event.key == "Enter"){ 
    let mainContent = document.getElementById("mainContent");
    //caja producto
    let boxProducto = document.createElement("div");
    mainContent.appendChild(boxProducto);
    boxProducto.setAttribute("class", "box-producto");
    //caja imagen
    let boxImg = document.createElement("div");
    boxProducto.appendChild(boxImg);
    boxImg.setAttribute("class", "box-img");

    let imgAuto = document.createElement("img");
    boxImg.appendChild(imgAuto);
    imgAuto.setAttribute("src", auto1.imagen);
    imgAuto.setAttribute("class","img-auto");

    let icon = document.createElement ("i");
    boxImg.appendChild(icon);
    icon.setAttribute("class", "icon-heart fa-regular fa-heart");

    //caja información
    let boxInfo = document.createElement("div");
    boxProducto.appendChild(boxInfo);
    boxInfo.setAttribute("class", "box-info");

    let marca = document.createElement("label");
    boxInfo.appendChild(marca);
    let txtNodeMarca = document.createTextNode(auto1.marca + " " + auto1.modelo);
    marca.appendChild(txtNodeMarca);
    marca.setAttribute("class","marca");

    let precio = document.createElement("Label");
    boxInfo.appendChild(precio);
    let precioStr = Intl.NumberFormat("de-DE").format(auto1.precio);
    let txtNodePrecio = document.createTextNode("$ " + precioStr , " ");
    precio.appendChild(txtNodePrecio);
    precio.setAttribute("class","precio");

    let año = document.createElement("label");
    boxInfo.appendChild(año);
    let txtNodeAño = document.createTextNode(auto1.año + " ");
    año.appendChild(txtNodeAño);
    año.setAttribute("class", "año");


    let kms = document.createElement("label");
    boxInfo.appendChild(kms);
    let kmStr = Intl.NumberFormat("de-DE").format(auto1.kms);
    let txtNodekm = document.createTextNode(kmStr + " km ");
    kms.appendChild(txtNodekm);
    kms.setAttribute("class","kms");

    let direccion = document.createElement("label");
    boxInfo.appendChild(direccion);
    let txtNodeDir = document.createTextNode(auto1.direccion);
    direccion.appendChild(txtNodeDir);
    direccion.setAttribute("class", "direccion");


    

    }
});

