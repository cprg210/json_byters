fetch('http://localhost:3000/api/contact')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // const imgList = data;
    // let imgtemplate = '';
    // let image = document.querySelector('.vacationPackages');

    // let currentdate = new Date();

    // imgList.forEach(function (item) {
    //   console.log(item);

    //   let db_enddate = new Date(item.PkgEndDate);
    //   let formatted_pack_enddate = db_enddate.getDate() + "-" + (db_enddate.getMonth() + 1) + "-" + db_enddate.getFullYear();
    //   console.log(formatted_pack_enddate);


    //   if (db_enddate >= currentdate) {
    //     imgtemplate +=
    //       `<figure>
    //     <a href="travelpackages/${item.PackageId}"> <img src="${item.path}"></a>
    //     <figcaption>${item.PkgDesc}</figcaption>
    //     </figure>`;
    //   };
    // });
    // image.innerHTML = imgtemplate;
  });
