//blod section----------->
const Blogpage = () => {
    window.location.href = "http://127.0.0.1:5500/blog.html";
}
const HunderCategory = async() => {
    const categroyname = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const categorys = await categroyname.json();
    const category = categorys.data
    HunderCategoryData(categorys.data);
    // console.log("main catagory", category)
}

//Categody section--------------->
const HunderCategoryData = (category) => {
        // console.log("this catagory", data)
        const ProductArea = document.getElementById('CategoryArea');
        category.forEach(element => {
            const div = document.createElement('div');
            div.innerHTML = `
        <a class="tab ml-3 rounded px-4 text-black bg-slate-200 text-sm" onclick="HunderAllProduct('${element.category_id}')">${element.category}
        </a>`;
            ProductArea.appendChild(div)

        });

    }
    // Product secton----------------->
const HunderAllProduct = async(id) => {

        const Producid = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
        const Products = await Producid.json();
        const product = Products.data;
        // console.log("this is array", product);
        const CardArea = document.getElementById('CardArea');
        CardArea.innerHTML = "";
        // SortButton(product)

        //Not data secction------------------>
        if (product.length === 0) {
            const NotFondData = document.getElementById('NotFondData');
            NotFondData.classList.remove('hidden')
        } else {
            const NotFondData = document.getElementById('NotFondData');
            NotFondData.classList.add('hidden')
        }
        //Show data function---------------->
        product.forEach(element => {
                    // console.log("thisk data", element)
                    //date section------------>
                    const PostDatestr = (element.others.posted_date);
                    const PostDate = parseInt(element.others.posted_date);
                    // console.log(PostDatestr)
                    const minit = parseInt(PostDate / 60);
                    minits = minit % 60;
                    // console.log(minits)
                    const hour = parseInt(minit / 60);
                    // console.log(hour)
                    //html section-------------->
                    const div = document.createElement('div');
                    div.innerHTML = `
<div class="card card-compact mt-5 ">
<div>
      <figure>
      < div class="h-[200px] w-[312px]">
      <img src="${element.thumbnail}" class="h-[200px] rounded w-[312px]" alt="Shoes"/>
      </figure>
      <div class="flex justify-end mr-20 md:mr-20 lg:mr-3 -mt-8">
       <p class="text-center rounded bg-black w-40 text-white">${PostDatestr?`${hour}hrs ${minits}min ago`:" "}</p>
      </div>
</div>


<div class="flex  md:ml-10 lg:ml-1 ">
    <img src="${element.authors[0].profile_picture}" class="w-8 h-8 mr-2 rounded-lg" alt="">
    <h2 class="">${element.title}</h2>
    </div>
    </div>
    <div class="ml-12 text-sm font-normal  ">
    <div class="flex">
    <p class="">${element.authors[0].profile_name}</p>
    <a href="" class="ml-1 mb-4 ">${element?.authors[0]?.verified?`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="fi_10629607" clip-path="url(#clip0_11_34)">
    <g id="Group">
    <path id="Vector" d="M19.375 10.0001C19.375 10.8001 18.3922 11.4595 18.1953 12.197C17.9922 12.9595 18.5063 14.022 18.1203 14.6892C17.7281 15.3673 16.5484 15.4486 15.9984 15.9986C15.4484 16.5486 15.3672 17.7282 14.6891 18.1204C14.0219 18.5064 12.9594 17.9923 12.1969 18.1954C11.4594 18.3923 10.8 19.3751 10 19.3751C9.2 19.3751 8.54062 18.3923 7.80312 18.1954C7.04062 17.9923 5.97813 18.5064 5.31094 18.1204C4.63281 17.7282 4.55156 16.5486 4.00156 15.9986C3.45156 15.4486 2.27187 15.3673 1.87969 14.6892C1.49375 14.022 2.00781 12.9595 1.80469 12.197C1.60781 11.4595 0.625 10.8001 0.625 10.0001C0.625 9.20012 1.60781 8.54075 1.80469 7.80325C2.00781 7.04075 1.49375 5.97825 1.87969 5.31106C2.27187 4.63293 3.45156 4.55168 4.00156 4.00168C4.55156 3.45168 4.63281 2.272 5.31094 1.87981C5.97813 1.49387 7.04062 2.00793 7.80312 1.80481C8.54062 1.60793 9.2 0.625122 10 0.625122C10.8 0.625122 11.4594 1.60793 12.1969 1.80481C12.9594 2.00793 14.0219 1.49387 14.6891 1.87981C15.3672 2.272 15.4484 3.45168 15.9984 4.00168C16.5484 4.55168 17.7281 4.63293 18.1203 5.31106C18.5063 5.97825 17.9922 7.04075 18.1953 7.80325C18.3922 8.54075 19.375 9.20012 19.375 10.0001Z" fill="#2568EF"/>
    <path id="Vector_2" d="M12.7094 7.20637L9.14062 10.7751L7.29062 8.92668C6.88906 8.52512 6.2375 8.52512 5.83594 8.92668C5.43437 9.32824 5.43437 9.97981 5.83594 10.3814L8.43125 12.9767C8.82187 13.3673 9.45625 13.3673 9.84687 12.9767L14.1625 8.66106C14.5641 8.25949 14.5641 7.60793 14.1625 7.20637C13.7609 6.80481 13.1109 6.80481 12.7094 7.20637Z" fill="#FFFCEE"/>
    </g>
    </g>
    <defs>
    <clipPath id="clip0_11_34">
    <rect width="20" height="20" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `:" "}</a>
    </div>
    <p class=" mb-5">${element.others.views} <span>views</span></p>
    </div>
    </div>

</div>`
        CardArea.appendChild(div);
    })
}


//call section------>
HunderAllProduct('1000');
HunderCategory();