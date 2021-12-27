const dev_team = document.querySelector('.devTeam');

devStudents.map(data => {

    dev_team.innerHTML += `

    <div class="teamIteam">
        <img src="${data.image}" alt="">
        <h4>Id: ${data.id} </h4>
        <h3> Name: ${data.name}</h3>
        <h4> Address : ${data.address} </h4>
        <h4> Skill : ${data.skill}</h4>
        <h4> Salary : $${data.salary} </h4>
    </div>   
 
    `;

});



// student Data 


const stu_data = document.querySelector('.stuData');

stuData.map(data => {

    stu_data.innerHTML += `
    <div class="card">
         <h2>Roll No: ${data.roll}</h2>
         <img src="${data.photo}" class="card-img-top" alt="...">
     <div class="card-body">
        <h5 class="card-title"> Name: ${data.name}</h5>
         <h6 class="card-subtitle mb-2 text-muted ">Father's Name: ${data.fName}</h6>
         <h6 class="card-subtitle mb-2 text-muted ">Mather's Name: ${data.mName}</h6>
         <p class="card-text">
             <div class="table">
                <table class="table table-striped">
                 <thead>
                      <tr>
                      <th scope="col">Bangla</th>
                       <th scope="col">English</th>
                      <th scope="col">Math</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>          
                    <td>${data.bn}</td>
                    <td>${data.en}</td>
                    <td>${data.mth}</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th scope="col">Religion</th>
                    <th scope="col">Science</th>
                    <th scope="col">ICT</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>${data.rel}</td>
                    <td>${data.sc}</td>
                    <td>${data.ict}</td>
                  </tr>
                </tbody>
             </table>
            </div>
          </p>
         </div>
    </div>

    
    `;


});


// Phone Book


const phoneBook = document.querySelector('.contactList table tbody');

phone_book.map(data => {

    phoneBook.innerHTML +=`

    <tr>     
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.phone}</td>
        <td>${data.gender}</td>
        <td>${data.location}</td>
        <td> <img src="${data.photo}" alt=""> </td>
    </tr>
    
    
    `;
});