
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
        // console.log(element)
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
                    <button onclick = "modalData('${id}')" data-modal-target="staticModal" data-modal-toggle="staticModal" class="btn bg-red-100 px-5 py-2 rounded-full "><i
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
    
};

const modalData = (id)=> {
    document.getElementById('staticModal').classList.toggle('hidden')
    const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(URL)
    .then(res=> res.json())
    .then(data=> displayModal(data.data))
}

const displayModal = (element) => {
    console.log(element)
    const {description,pricing,features,input_output_examples,integrations,image_link} = element
   document.getElementById('modal-container').innerHTML = `
   <div class="bg-red-50 border border-red-500 rounded-md w-full lg:w-1/2 px-5 py-5 lg:px-12 lg:py-12 ">
   <h1 class="text-2xl  font-bold">ChatGPT is an AI-powered chatbot platform that uses OpenAI's GPT technology to simulate human conversation.</h1>
   <div class="flex gap-4 my-5 items-center">
       <div class="py-12 px-3 rounded shadow-xl bg-white">sayem vai 1</div>
       <div class="py-12 px-3 rounded shadow-xl bg-white">sayem vai 2</div>
       <div class="py-12 px-3 rounded shadow-xl bg-white">sayem vai 3</div>
   </div>
   <div class="flex gap-4 justify-between  items-center">
       <div>
           <h1 class="text-2xl  font-bold" >Features</h1>
           <ul class=" py-3">
               <li>sayem</li>
               <li>sayem</li>
               <li>sayem</li>
           </ul>
       </div>
       <div class="ml-5">
           <h1 class="text-2xl  font-bold">Integration</h1>
           <ul class=" py-3">
               <li>sayem</li>
               <li>sayem</li>
               <li>sayem</li>
           </ul>
       </div>
   </div>
</div>
<div class="w-full lg:w-1/2 border flex flex-col justify-center text-center rounded-md px-5 py-5 lg:px-12 lg:py-12 ">
   <img class="h-80" src="https://picsum.photos/id/237/200/300" alt="">
   <h1 class="text-2xl  font-bold py-5" >Hi, how are you doing today?</h1>
   <p>I'm doing well, thank you for asking. How can I assist you today?</p>
</div>
   `
   
    
}