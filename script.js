document.addEventListener("DOMContentLoaded", async () => {
    try{
        const response = await fetch("articles.json")
        const articles = await response.json()
        const container = document.querySelector(".content-recent")

        container.innerHTML = articles.map((article, index) => {
            const formattedDate = new Date(article.publish_date)
                .toLocaleDateString("pt-PT", {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                })

            return `
                <article>
                    <h2>${article.title}</h2>
                    <div class="meta">
                        <time datetime="${article.date}">${formattedDate}</time>
                    </div>
                    <div class="content-preview">
                        ${article.content}
                    </div>
                </article>
                ${index < articles.length-1 ? "<hr>":""}
            `
        }).join("")
    }catch (error) {
        console.error("Error loading articles:", error)
    }
})