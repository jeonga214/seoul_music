const elS2 = document.querySelectorAll('.line div');
const elS2Content = document.querySelector('.flex');
const elallbutn = document.querySelector('.number');

let imgle = 4;
let list = [];
let now = 1;
let num = 0;
let fullpg = 0;

elS2[num].classList.add('on');
elS2Content.classList.add('on');

fetch('./json/notice.json')
    .then(res => res.json())
    .then(data => {
        elS2.forEach(function (ele, key) {
            ele.onclick = function () {
                elS2[num].classList.remove('on');
                this.classList.add('on');

                switch (key) {
                    case 0:
                        list = data.items.filter(arry => arry.state === "SMUF 2023");
                        break;
                    case 1:
                        list = data.items.filter(arry => arry.state === "SMUF 2022");
                        break;
                    case 2:
                        list = data.items.filter(arry => arry.state === "SMUF 2019");
                        break;
                }

                let max_full = list.length;

                pgen(max_full, list);
                imgFn(list, 1);
                sspace();

                num = key;
            }
        });

        let max_full = data.items.filter(item => item.state === "SMUF 2023").length;


        const imgFn = function (list, now) {
            elS2Content.innerHTML = '';

            list.forEach((v, k) => {
                if ((now - 1) * imgle <= k && now * imgle > k) {
                    elS2Content.innerHTML += `
                        <li class="sspace" data-id="${v.id}">
                            <a href="#">
                                <p class="hover-text">${v.text}</p>
                                <div style="${v.image}"></div>
                            </a>
                        </li>
                    `;
                }
            });
        };

        const sspace = function () {
            const elsspace = document.querySelectorAll('.sspace');

            elsspace.forEach((v4, k4) => {
                v4.onclick = function (e) {
                    e.preventDefault();
                    sessionStorage.setItem("click", v4.dataset.id);
                    location.href = '#';
                };
            });
        };

        const pgen = function (max_full, list) {
            let max = Math.ceil(max_full / imgle);
            elallbutn.innerHTML = "";
            for (let i = 1; i <= max; i++) {
                elallbutn.innerHTML += `<span>${i}</span>`;
            }

            const elbutn = document.querySelectorAll('.number >span');
            now = 1;
            elbutn[now - 1].classList.add("on");

            elbutn.forEach((v2, k2) => {
                v2.onclick = function () {
                    elbutn[now - 1].classList.remove("on");
                    v2.classList.add("on");
                    now = v2.innerText;

                    imgFn(list, now);
                    sspace();
                };
            });

            fullpg = Math.ceil(elbutn.length / 5 - 1);
        };

        list = data.items.filter(item => item.state === "SMUF 2023");
        pgen(max_full, list);
        imgFn(list, 1);
        sspace();
    });

