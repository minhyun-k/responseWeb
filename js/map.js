fetch("./data/map.json")
.then(res => res.json())
.then(res => {
    const content_map = document.querySelector('.content_map');

    res.오시는길.forEach(Map => {
        let num=0,liTag='';
        for(let key in Map){
            num++;
            if(num>4){
                liTag += `<li>
                            <div>
                                <b>${key}</b>
                                <img src="./img/map/down.svg" alt="">
                            </div>
                            <p>${Map[key]}</p>
                          </li>`
            }
        };
        
        content_map.innerHTML +=   `<div>
                                        <b>아쿠아플라넷 ${Map.area}</b>
                                        <div class="map">
                                            <figure><img src="${Map.img}"></figure>
                                            <div>
                                                <b>대표주소</b>
                                                <p>${Map.address}</p>
                                                <a href="${Map.home}">자세한 위치 안내 보기</a>
                                                <br><br>
                                                <div class="move">
                                                    <div class="way">
                                                        <b>교통편</b>
                                                        <img src="./img/map/down.svg" alt="">
                                                    </div>
                                                    <ul>
                                                    ${liTag}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`
    });


    const li = document.querySelectorAll('li');
    li.forEach((P)=>{
        P.onclick = function(){
            P.classList.toggle('active')
        }
    });
    
    const move = document.querySelectorAll('.move');
    move.forEach((U) => {
        U.onclick = function(){
            U.classList.toggle('active')
        };
    });

    // const img = document.querySelectorAll('.move img');
    // img.forEach((I)=>{
    //     I.
    // })

})