var arr = [
  {
    dp: "https://images.inc.com/uploaded_files/image/1920x1080/mark-zuckerberg-headshot-web_77358.jpg",
    story:
      "https://www.searchenginejournal.com/wp-content/uploads/2022/10/facebook-groups-6356ff77492fd-sej.png",
  },
  {
    dp: "https://www.rollingstone.com/wp-content/uploads/2023/02/elon-twitter-new-ceo.jpg?w=1581&h=1054&crop=1",
    story:
      "https://electrek.co/wp-content/uploads/sites/3/2021/05/Tesla-Logo-Hero.jpg?quality=82&strip=all&w=1024",
  },
  {
    dp: "dipak.jpg",
    story:
      "https://www.searchenginejournal.com/wp-content/uploads/2022/10/facebook-groups-6356ff77492fd-sej.png",
  },
  {
    dp: "https://image.cnbcfm.com/api/v1/image/100496736-steve-jobs-march-2011-getty.jpg?v=1617291443",
    story:
      "https://www.searchenginejournal.com/wp-content/uploads/2022/10/facebook-groups-6356ff77492fd-sej.png",
  },
  {
    dp: "https://people.com/thmb/o2uRKtWwmHpMVUzanSK7OKWICcI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(704x9:706x11)/satya-nadella-bd654c90995746879fb441cdbc284009.jpg",
    story:
      "https://www.searchenginejournal.com/wp-content/uploads/2022/10/facebook-groups-6356ff77492fd-sej.png",
  },
  {
    dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAiPDNRIxgsE6XDOJnhgYpCG6rtRbtcBj7noQhxUGoPZjKbsxR7Uzk-Jn57ENCJyMvfs&usqp=CAU",
    story:
      "https://www.searchenginejournal.com/wp-content/uploads/2022/10/facebook-groups-6356ff77492fd-sej.png",
  },
  {
    dp: "https://images.inc.com/uploaded_files/image/1920x1080/mark-zuckerberg-headshot-web_77358.jpg",
    story:
      "https://www.searchenginejournal.com/wp-content/uploads/2022/10/facebook-groups-6356ff77492fd-sej.png",
  },
  {
    dp: "https://www.rollingstone.com/wp-content/uploads/2023/02/elon-twitter-new-ceo.jpg?w=1581&h=1054&crop=1",
    story:
      "https://electrek.co/wp-content/uploads/sites/3/2021/05/Tesla-Logo-Hero.jpg?quality=82&strip=all&w=1024",
  },
  {
    dp: "dipak.jpg",
    story:
      "https://www.searchenginejournal.com/wp-content/uploads/2022/10/facebook-groups-6356ff77492fd-sej.png",
  },
  {
    dp: "https://image.cnbcfm.com/api/v1/image/100496736-steve-jobs-march-2011-getty.jpg?v=1617291443",
    story:
      "https://www.searchenginejournal.com/wp-content/uploads/2022/10/facebook-groups-6356ff77492fd-sej.png",
  },
  {
    dp: "https://people.com/thmb/o2uRKtWwmHpMVUzanSK7OKWICcI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(704x9:706x11)/satya-nadella-bd654c90995746879fb441cdbc284009.jpg",
    story:
      "https://www.searchenginejournal.com/wp-content/uploads/2022/10/facebook-groups-6356ff77492fd-sej.png",
  },
  {
    dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHAiPDNRIxgsE6XDOJnhgYpCG6rtRbtcBj7noQhxUGoPZjKbsxR7Uzk-Jn57ENCJyMvfs&usqp=CAU",
    story:
      "https://www.searchenginejournal.com/wp-content/uploads/2022/10/facebook-groups-6356ff77492fd-sej.png",
  },
];

var storiyan = document.querySelector("#storiyan");
var fullscreen = document.querySelector("#fullscreen");
var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += `<div class="story">
    <img id="${idx}"   src="${elem.dp}" alt="" />
  </div>`;
});

storiyan.innerHTML = clutter;
storiyan.addEventListener("click", function (dets) {
  fullscreen.style.display = "block";
  fullscreen.style.backgroundImage = `url(${arr[dets.target.id].story})`;

  setTimeout(function () {
    fullscreen.style.display = "none";
  }, 3000);
});
