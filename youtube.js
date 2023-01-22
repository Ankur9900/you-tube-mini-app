//'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=kgf&key=[YOUR_API_KEY]' \

const API_KEY="AIzaSyDsEQb1F-6nbs440eP7iNM_ELehceffC9Q"; 

let url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=kgf&key=[YOUR_API_KEY]"

let data;
let search = async() =>{
 let query = document.getElementById("search").value;
   data = await getData(query);
    append(data)

}

let getData = async(query)=>{
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${API_KEY}`;

    let res = await fetch(url);
    let myd = await res.json();
    return myd.items;
}

let showData = async()=>{
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=mostpopular&key=${API_KEY}`

    let res = await fetch(url)
   let data1 = await res.json();
    data = data1.items
console.log(data);
    append(data)
}

showData();

let append = (data1) => {
    document.getElementById("container").innerHTML = "";
    data1.forEach((el)=>{
        let div = document.createElement("div")
        div.setAttribute("class","box");
        div.addEventListener("click",function(){
            storedata(el)
        })
        let img = document.createElement("img");
        img.src =el.snippet.thumbnails.medium.url;
        let p = document.createElement("p");
        p.innerText= el.snippet.title;

        div.append(img,p);

        document.getElementById("container").append(div)
    })
    
}

let storedata = (el) =>{
    localStorage.setItem("video",JSON.stringify(el));
    window.location.href="video.html"
}


