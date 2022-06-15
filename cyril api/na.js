const displayContent = document.getElementById('display')
const url = 'https://futurelabs-blog.herokuapp.com/';

const apiFetch = () => {
    fetch('https://futurelabs-blog.herokuapp.com/', (data) => {
        console.log(data);
    })
        // .then(api => {
        //     console.log(api);
            return api.json()
                .then(datas => {
                    console.log(datas)
                    const blog = datas

                    if (datas.articles.datas) {
                        datas.articles.datas.forEach(element => {
                            let col = document.createElement("div")
                            let card = document.createElement("div")
                            let top = document.createElement("img")
                            let body = document.createElement("div")
                            let title = document.createElement("h5")
                            let text = document.createElement("p")

                            col.setAttribute("class", "col-md-6")
                            card.setAttribute("class", "card")
                            body.setAttribute("class", "body")
                            title.setAttribute("class", "title")
                            text.setAttribute("class", "text")


                            title.innerText = element.title
                            text.innerText = element.content
                            top.setAttribute("src", element.image)

                            body.append(title)
                            body.append(text)
                            card.append(body)
                            card.append(top)
                            col.append(card)



                        })
                    }


                })
        })


}

apiFetch()


function page() {
    console.log(page);
    location.href = "ya.html"
}

