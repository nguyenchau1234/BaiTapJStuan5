var man=[
    {
    id:1,
    name:"Quần kaki",
    code:"TC143NA",
    price:"250.000",
    image:"https://zizoou.com/cdn/shop/files/Ao-khoac-soc-ke-form-rong-oversize-Ao-jacket-caro-trang-den-10-2-2-ZiZoou-Store.jpg?v=1698750440"

    },
    {
    id:2,
    name:"Áo sơ mi nam",
    code:"TC1342NA",
    price:"380.000",
    image:"https://zizoou.com/cdn/shop/files/Ao-khoac-soc-ke-form-rong-oversize-Ao-jacket-caro-trang-den-10-2-2-ZiZoou-Store.jpg?v=1698750440"
    },
    {
    id:3,
    name:"Quần tây",
    code:"TC323",
    price:"270.000",
    image:"https://zizoou.com/cdn/shop/files/Ao-khoac-soc-ke-form-rong-oversize-Ao-jacket-caro-trang-den-10-2-2-ZiZoou-Store.jpg?v=1698750440"

    },
    {
    id:4,
    name:"Bộ đồ thể thao",
    code:"TC223",
    price:"300.000",
    image:"https://zizoou.com/cdn/shop/files/Ao-khoac-soc-ke-form-rong-oversize-Ao-jacket-caro-trang-den-10-2-2-ZiZoou-Store.jpg?v=1698750440"

    }

]
var women=[
    {
    id:1,
    name:"váy ",
    code:"TC143",
    price:"250.000",
    image:"https://down-vn.img.susercontent.com/file/sg-11134201-22100-mcxr2dfjngiv6b"

    },
    {
    id:2,
    name:"Áo sơ mi nữ",
    code:"TC123",
    price:"200.000",
    image:"https://down-vn.img.susercontent.com/file/sg-11134201-22100-mcxr2dfjngiv6b"
    },
    {
    id:3,
    name:"Áo Khoác",
    code:"TC323",
    price:"270.000",
    image:"https://down-vn.img.susercontent.com/file/sg-11134201-22100-mcxr2dfjngiv6b"

    },
    {
    id:4,
    name:"Áo thun",
    code:"TC223",
    price:"300.000",
    image:"https://down-vn.img.susercontent.com/file/sg-11134201-22100-mcxr2dfjngiv6b"

    }
]
function listProducts(){
    for(let i=0; i<= man.length-1;i++){
        var demo = '<div class="col-3">';
        demo+= '<div class="card" style="width: 18rem; ">';
        demo+= '<img src="'+man[i].image+'" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+man[i].name+'</h5>';
        demo += '<p class="card-text">'+man[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML+= demo;


    }
    for(let i=0; i<= women.length-1;i++){
        var demo = '<div class="col-3">';
        demo+= '<div class="card" style="width: 18rem; ">';
        demo+= '<img src="'+women[i].image+'" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<div class="card-title">'+women[i].name + '</h5>';
        demo += '<p class="card-text">'+women[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("women").innerHTML+= demo;


    }
    
    
    } 