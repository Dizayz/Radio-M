// facebook : https://www.facebook.com/sharer.php?u=[post-url]
// twitter : https://twitter.com/share?url=[post-url]&text=[post-title]
//linkedin : https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]



const facebookBtn = $('.fb-btn');
const twitterBtn = $('.twitter-btn');
const linkedinBtn = $('.linkedin-btn');
function init() {
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI($('.titre-article').html());
    facebookBtn.attr("href", `https://www.facebook.com/sharer.php?u=${postUrl}`);
    twitterBtn.attr("href", `https://twitter.com/share?url=${postUrl}&text=${postTitle}`);
    linkedinBtn.attr("href", `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`);
}
init();