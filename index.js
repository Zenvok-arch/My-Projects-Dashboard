








function createCard({ title, description, img, link, created }) {

    const createdate = new Date(created);

    const today = new Date();
    const diffTime = today - createdate;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    const isNew = Math.floor(diffDays) <= 6;
    const newbadgeHtml = isNew ? '<div class="new">New</div>' : ''


    const cardHtml = `<div class="card">
            <div class="project-img">
                <img src=${img}>
                <div class="stack">
                 <div>HTML</div>
                 <div>CSS</div>
                 <div>JS</div>
                </div>
                ${newbadgeHtml}
            </div>
            <div class="details">
                <h3>${title}</h3>
                <p>${description}</p>
                
                <div class="button">
                    <div class="line"></div><a href=${link}>View Project <i class="fas fa-arrow-right"></i></a></div>
            </div>
            
            </div>`







    const container = document.querySelector(".container");
    const wrapper = document.createElement("div");
    wrapper.innerHTML = cardHtml;
    container.appendChild(wrapper.firstElementChild);





}

const fetchDetails = function fetchDetails() {
    fetch('project.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        })
        .then(data => {
            data.forEach(element => {
                createCard(element)
            });

        })
        .catch(error => {
            console.log("Error in json file", error)
        })
}

fetchDetails()