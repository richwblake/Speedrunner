class Split {
    constructor(title) {
        this.title = title;
    }

    createTitleForSplit() {
        const splitTitle = document.createElement("h3");
        splitTitle.id = `title-${this.title}`;
        splitTitle.className = "split-title"
        splitTitle.innerHTML = this.title;
        return splitTitle;
    }

    appendSplit() {
        const splitTitle = this.createTitleForSplit();
        document.getElementById("splits-div").appendChild(splitTitle);
        return this;
    }

} 