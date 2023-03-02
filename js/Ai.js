
const loadData = () => {
    document.getElementById('spinner').classList.remove('hidden')
    fetch ('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => displayData(data.data.tools.slice(0,6)))
}
const displayData = (data) => {
    const cardContainer = document.getElementById('card-container')
    cardContainer.innerHTML = "";
    data.forEach(element => {
        console.log(element)
        const {id,image,name,features,published_in} = element
        const div = document.createElement('div')
        div.innerHTML = `
        <div class=" p-8 bg-white border border-gray-200  rounded-lg  shadow-xl ">
        <a href="#">
            <img class="rounded-t-lg lg:h-72 rounded" src="${image}" alt="" />
        </a>
        <div class="p-5">
         


            <div class="text-gray-700 ">
                <h3 class="text-2xl font-bold my-3">Features</h3>
                <ol class="text-gray-700 /">

                    <li>1. ${features[0]}</li>
                    <li>2. ${features[1]}</li>
                    <li>3. ${features[2]}</li>

                </ol>
            </div>


            <div class=" flex justify-between items-center border-t-2 mt-8  py-8">

                <div>
                    <a href="#">
                        <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-700 /">${name}</h5>
                    </a>
                    <div class="">
                        <p class="text-gray-700 /"><i
                                class="fa-solid fa-calendar-days mr-2"></i>${published_in}</p>
                    </div>

                </div>
                <div>
                    <button class="btn bg-red-100 px-5 py-2 rounded-full "><i
                            class="fa-solid fa-arrow-right"></i></button>
                </div>

            </div>
        </div>
    </div>
        `;
        cardContainer.appendChild(div)
        document.getElementById('spinner').classList.add('hidden')
        
    });
};

const showAll = ()=> {
    document.getElementById('showAll-btn').classList.add('hidden')
    fetch ('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => displayData(data.data.tools))
    
}
