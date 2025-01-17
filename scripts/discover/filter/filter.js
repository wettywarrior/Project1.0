function checkFilterActiveTab() {
  if (filterActiveTabBack === "") {
    filterBackButton.style.display = "none";
  } else {
    filterBackButton.style.display = "block";
  }
}

function filterBackButtonFunction() {
  if(filterActiveTabBack === "men"){
    hideMenPage()
    renderCatagoryPage()
  } else if(filterActiveTabBack === "menClothing"){
    hideMenClothingPage()
    renderMenPage()
  } else if(filterActiveTabBack === "menClothingTops"){
    hideMenTopsPage()
    renderMenClothingPage()
  } else if(filterActiveTabBack === "menClothingBottoms"){
    hideMenBottomsPage()
    renderMenClothingPage()
  } else if(filterActiveTabBack === "menClothingBottomsJeans"){
    hideMenBottomsJeansPage()
    renderMenPage()
  } else if(filterActiveTabBack === "menClothingCoats"){
    hideMenCoatsPage()
    renderMenClothingPage()
  }
}

// back button
filterBackButton.addEventListener("click", function () {
  filterBackButtonFunction()
});

// men

// go to men section
menFilter.addEventListener("click", function () {
  hideCatagoryPage()
  renderMenPage()
});

// men clothing

// go to men clothing section
menClothing.addEventListener("click", function () {
  hideMenPage()
  renderMenClothingPage()
});

// back button from men clothing section to men section




// go to men tops section
menTops.addEventListener("click", function () {
  hideMenClothingPage()
  renderMenTopsPage()
});





// go to men bottoms section
menBottoms.addEventListener("click", function () {
  hideMenClothingPage()
  renderMenBottomsPage()
});




// jeans types
menBottomsJeans.addEventListener("click", function () {
  hideMenBottomsPage()
  renderMenBottomsJeansPage()
});



// go to men coats section
menCoats.addEventListener("click", function () {
  hideMenClothingPage()
  renderMenCoatsPage()
});






// women section
const womenFilter = document.querySelector(".category-women");
const womenBack = document.querySelector(".category-women-back-button");

// women filters
const womenClothing = document.querySelector(".category-women-clothing");
const womenShoes = document.querySelector(".category-women-shoes");
const womenAccessories = document.querySelector(".category-women-accessories");

