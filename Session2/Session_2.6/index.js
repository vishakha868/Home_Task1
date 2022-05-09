var video = '';
var count = 0;
var pages = '';
var record_per_page = 5;
var totalRecords = 15;
var number_of_pages = 0;
var initial_start = 0;
var curr_page = 1;
const api_key = "AIzaSyCS1R6AfshNt282nCExnxCVNVSEe0gm0Us";
///////////////////////////////////////////////////////header//////////////////////////////////////////////////////
var header = document.createElement("div");
header.setAttribute("class", "head");
var logo = document.createElement("img");
logo.src = "log.png"
logo.setAttribute("id", "logo");
var sub_in = document.createElement("div")
var input = document.createElement("input");
input.placeholder = "Search ..."
var search_btn = document.createElement("button");
var icon_div = document.createElement("div");
var video_log = document.createElement("i");
var notify = document.createElement("i");
var user = document.createElement("i")
icon_div.append(video_log, notify, user);
icon_div.setAttribute("class", "icons")
user.setAttribute("class", "fa fa-user")
notify.setAttribute("class", "fa fa-bell")
video_log.setAttribute("class", "fa fa-video-camera");
input.type = "text";
input.id = "searched_text";
sub_in.append(input, search_btn)
search_btn.innerHTML = "<i class='fa fa-search'style='color:white;'></i>";
// console.log(window)
// window.onresize=()=>{
// const curr_width=window.innerWidth;
// if(curr_width<=768){
//     const cont = document.querySelector('#videos');
//         while (cont.firstChild) {
//             cont.removeChild(cont.firstChild);
//         }
//         while (pagination.firstChild) {
//             pagination.removeChild(pagination.firstChild);
//         }
//     record_per_page=3;

    
// }
// else{
//     record_per_page=5;
//     const cont = document.querySelector('#videos');
//         while (cont.firstChild) {
//             cont.removeChild(cont.firstChild);
//         }
//         while (pagination.firstChild) {
//             pagination.removeChild(pagination.firstChild);
//         }
// }
// show_data(result);
// numberOfPages();

// }

header.append(logo, sub_in, icon_div);
sub_in.style.display = "flex";
document.body.appendChild(header);
search_btn.addEventListener("click", fetching)
///////////////////main-block////////////////
var main = document.createElement("div");
//////////////////////////////////////////////////video_block//////////////////////////////////////////////////////////
var vid_block = document.createElement("div");
vid_block.setAttribute("id", "videos");

///////////////////////////////////////////////////////pagination_block////////////////////////////////////////////
var pagination = document.createElement("div");
pagination.setAttribute("id", "pages");
///////////////////////combining components////////////////
main.append(vid_block, pagination);
main.setAttribute("class", "main-block");
document.body.appendChild(main);

/////////////////////////////////////////////////////////////api_call////////////////////////////////////////////////
async function fetching() {
    while (pagination.firstChild) {
        pagination.removeChild(pagination.firstChild);
    }
    var data = input.value;

    let maxResults = 15;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${api_key}&type=video&maxResults=${maxResults}&q=${data}`;
    const response = await fetch(url, {
        method: 'GET'

    });
    result = await response.json();
    console.log(result)
    await show_data(result);
    numberOfPages();
}
async function show_data(result) {
    data_obj = [];
    if (count > 0) {
        const cont = document.querySelector('#videos');
        while (cont.firstChild) {
            cont.removeChild(cont.firstChild);
        }
    }
    for (var i = (curr_page - 1) * record_per_page; i < record_per_page * curr_page; i++) {
        thumbnail = document.createElement("div");
        thumbnail.setAttribute("class", "thumbnail_set")
        // thumbnail.class = `thumbnail_set`;
        img = document.createElement("img");
        content = document.createElement("div");
        content.setAttribute("class", "content");
        content_title = document.createElement("h5");
        content_link = document.createElement("a");
        content_desc = document.createElement("p");
        content_auth = document.createElement("span");
        content_pubDate = document.createElement("span");
        content_view = document.createElement("span");

        content.append(content_title, content_link, content_desc, content_auth, content_pubDate, content_view);
        img.src = result.items[i].snippet.thumbnails.medium.url;
        var title = result.items[i].snippet.title;
        var link = `https://www.youtube.com/watch?v=${result.items[i].id.videoId}`;
        var description = result.items[i].snippet.description;
        var author = result.items[i].snippet.channelTitle;
        var publishedDate = result.items[i].snippet.publishedAt.split('T')[0];
        const viewCount = await CountOfViews(result.items[i].id.videoId);
        let views = numFormatter(viewCount);
        content_title.innerHTML = title;
        content_link.setAttribute("href",link);
        content_link.innerHTML=link;
        content_desc.innerHTML = description;
        content_auth.innerHTML = author;
        content_pubDate.innerHTML = `|| ${publishedDate}`;
        content_view.innerHTML = `|| ${views}`;
        thumbnail.append(img, content);
        document.getElementById('videos').appendChild(thumbnail);
    }
    count += 1;
}

async function CountOfViews(id) {
    const response = await (fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=${id}&key=${api_key}`))
    const data = await response.json();
    return data.items[0].statistics.viewCount;
}
function numFormatter(num) {
    if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    } else if (num > 1000000) {
        return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    } else if (num < 900) {
        return num; // if value < 1000, nothing to do
    }
}
function numberOfPages() {
    var arrow_left = document.createElement("button");
    arrow_left.setAttribute("class", "page_btn");
    arrow_left.innerHTML = `<i class="fa fa-angle-left"></i>`;
    arrow_left.addEventListener("click", () => {
        if (curr_page > 1) {
            document.getElementById(`num_id_${curr_page - 1}`).style.backgroundColor = "white";
            document.getElementById(`num_id_${curr_page - 2}`).style.backgroundColor = "red";
            curr_page--;
            show_data(result);
        }
    });
    document.getElementById('pages').append(arrow_left);
    number_of_pages = Math.floor(totalRecords / record_per_page);
    console.log(number_of_pages)
    pages = document.createElement("div");
    pages.setAttribute("class", "page_num");
    document.getElementById('pages').append(pages);
    
    for (var i = initial_start; i < number_of_pages; i++) {
        list_of_page = document.createElement("div");
        list_of_page.setAttribute("class", "per_num");
        list_of_page.setAttribute("id", `num_id_${i}`);
        let x=i;
        content = document.createTextNode(x+ 1);
        list_of_page.appendChild(content);
        pages.appendChild(list_of_page);
        if (i == 0) {
            list_of_page.style.backgroundColor = "red";
        }
        
    }
    var arrow_right = document.createElement("button");
    arrow_right.setAttribute("class", "page_btn");
    arrow_right.innerHTML = `<i class="fa fa-angle-right"></i>`;
    arrow_right.addEventListener("click", () => {
        if (curr_page < number_of_pages) {

            document.getElementById(`num_id_${curr_page - 1}`).style.backgroundColor = "white";
            document.getElementById(`num_id_${curr_page}`).style.backgroundColor = "red";
            curr_page++;
            show_data(result);
        }
    });
    document.getElementById('pages').appendChild(arrow_right);
}


