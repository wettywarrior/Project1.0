
//select product 1 at a time
function selectProduct() {
  menSelectFancyDress.style.display = "block";
  menTopsSelectTshirts.style.display = "block";
  menTopsSelectHoodies.style.display = "block";
  menTopsSelectSweatshirts.style.display = "block";
  menTopsSelectJumpers.style.display = "block";
  menTopsSelectCardigans.style.display = "block";
  menTopsSelectShirts.style.display = "block";
  menTopsSelectPoloShirts.style.display = "block";
  menTopsSelectBlouses.style.display = "block";
  menTopsSelectVests.style.display = "block";
  menTopsSelectOther.style.display = "block";

  menSelectedFancyDress.style.display = "none";
  menTopsSelectedTshirts.style.display = "none";
  menTopsSelectedHoodies.style.display = "none";
  menTopsSelectedSweatshirts.style.display = "none";
  menTopsSelectedJumpers.style.display = "none";
  menTopsSelectedCardigans.style.display = "none";
  menTopsSelectedShirts.style.display = "none";
  menTopsSelectedPoloShirts.style.display = "none";
  menTopsSelectedBlouses.style.display = "none";
  menTopsSelectedVests.style.display = "none";
  menTopsSelectedOther.style.display = "none";
}



// catagory page
function renderCatagoryPage() {
  menFilter.style.display = "flex";
  womenFilter.style.display = "flex";
  filterCurrentTab.innerHTML = "Catagory";
  filterBackButton.style.display = "none";
}

function hideCatagoryPage() {
  menFilter.style.display = "none";
  womenFilter.style.display = "none";
}


// men page
function renderMenPage() {
  menClothing.style.display = "flex";
  menShoes.style.display = "flex";
  menAccessories.style.display = "flex";
  filterCurrentTab.innerHTML = "Men";
  filterActiveTabBack = "men"
  checkFilterActiveTab()
}

function hideMenPage() {
  menClothing.style.display = "none";
  menShoes.style.display = "none";
  menAccessories.style.display = "none";
}


// men clothing page
function renderMenClothingPage() {
  menTops.style.display = "flex";
  menBottoms.style.display = "flex";
  menCoats.style.display = "flex";
  menJackets.style.display = "flex";
  menTracksuits.style.display = "flex";
  menSuits.style.display = "flex";
  menSportswear.style.display = "flex";
  menNightwear.style.display = "flex";
  menUnderwear.style.display = "flex";
  menSwimwear.style.display = "flex";
  menFancyDress.style.display = "flex";
  filterCurrentTab.innerHTML = "Clothing";
  filterActiveTabBack = "menClothing"
  checkFilterActiveTab()
}

function hideMenClothingPage() {
  menTops.style.display = "none";
  menBottoms.style.display = "none";
  menCoats.style.display = "none";
  menJackets.style.display = "none";
  menTracksuits.style.display = "none";
  menSuits.style.display = "none";
  menSportswear.style.display = "none";
  menNightwear.style.display = "none";
  menUnderwear.style.display = "none";
  menSwimwear.style.display = "none";
  menFancyDress.style.display = "none";
}



// men tops page
function renderMenTopsPage() {
  menTopsTshirts.style.display = "flex";
  menTopsHoodies.style.display = "flex";
  menTopsSweatshirts.style.display = "flex";
  menTopsJumpers.style.display = "flex";
  menTopsCardigans.style.display = "flex";
  menTopsShirts.style.display = "flex";
  menTopsPoloShirts.style.display = "flex";
  menTopsBlouses.style.display = "flex";
  menTopsVests.style.display = "flex";
  menTopsOther.style.display = "flex";
  filterCurrentTab.innerHTML = "Tops";
  filterActiveTabBack = "menClothingTops"
  checkFilterActiveTab()
}

function hideMenTopsPage() {
  menTopsTshirts.style.display = "none";
  menTopsHoodies.style.display = "none";
  menTopsSweatshirts.style.display = "none";
  menTopsJumpers.style.display = "none";
  menTopsCardigans.style.display = "none";
  menTopsShirts.style.display = "none";
  menTopsPoloShirts.style.display = "none";
  menTopsBlouses.style.display = "none";
  menTopsVests.style.display = "none";
  menTopsOther.style.display = "none";
}



// men bottoms page
function renderMenBottomsPage() {
  menBottomsJeans.style.display = "flex";
  menBottomsSweatpant.style.display = "flex";
  menBottomsTrousers.style.display = "flex";
  menBottomsShorts.style.display = "flex";
  menBottomsOther.style.display = "flex";
  filterCurrentTab.innerHTML = "Bottoms";
  filterActiveTabBack = "menClothingBottoms"
  checkFilterActiveTab()
}

function hideMenBottomsPage() {
  menBottomsJeans.style.display = "none";
  menBottomsSweatpant.style.display = "none";
  menBottomsTrousers.style.display = "none";
  menBottomsShorts.style.display = "none";
  menBottomsOther.style.display = "none";
}

function renderMenBottomsJeansPage() {
  MenBottomsJeansAcidWashed.style.display = "flex";
  MenBottomsJeansBleached.style.display = "flex";
  MenBottomsJeansCapri.style.display = "flex";
  MenBottomsJeansCargo.style.display = "flex";
  MenBottomsJeansChino.style.display = "flex";
  MenBottomsJeansDistressed.style.display = "flex";
  MenBottomsJeansEmbellished.style.display = "flex";
  MenBottomsJeansEmbroidered.style.display = "flex";
  MenBottomsJeansFaded.style.display = "flex";
  MenBottomsJeansPainted.style.display = "flex";
  MenBottomsJeansPatched.style.display = "flex";
  MenBottomsJeansPrinted.style.display = "flex";
  MenBottomsJeansRipped.style.display = "flex";
  MenBottomsJeansStoneWashed.style.display = "flex";
  filterCurrentTab.innerHTML = "Type";
  filterActiveTabBack = "menClothingBottomsJeans"
  checkFilterActiveTab()
}

function hideMenBottomsJeansPage() {
  MenBottomsJeansAcidWashed.style.display = "none";
  MenBottomsJeansBleached.style.display = "none";
  MenBottomsJeansCapri.style.display = "none";
  MenBottomsJeansCargo.style.display = "none";
  MenBottomsJeansChino.style.display = "none";
  MenBottomsJeansDistressed.style.display = "none";
  MenBottomsJeansEmbellished.style.display = "none";
  MenBottomsJeansEmbroidered.style.display = "none";
  MenBottomsJeansFaded.style.display = "none";
  MenBottomsJeansPainted.style.display = "none";
  MenBottomsJeansPatched.style.display = "none";
  MenBottomsJeansPrinted.style.display = "none";
  MenBottomsJeansRipped.style.display = "none";
  MenBottomsJeansStoneWashed.style.display = "none";
}


// men coats page
function renderMenCoatsPage() {
  menCoatsDuffle.style.display = "flex";
  menCoatsOvercoat.style.display = "flex";
  menCoatsParka.style.display = "flex";
  menCoatsPuffer.style.display = "flex";
  menCoatsRaincoat.style.display = "flex";
  menCoatsTrench.style.display = "flex";
  menCoatsWindbreaker.style.display = "flex";
  menCoatsOther.style.display = "flex";
  filterCurrentTab.innerHTML = "Coats";
  filterActiveTabBack = "menClothingCoats"
  checkFilterActiveTab()
}

function hideMenCoatsPage() {
  menCoatsDuffle.style.display = "none";
  menCoatsOvercoat.style.display = "none";
  menCoatsParka.style.display = "none";
  menCoatsPuffer.style.display = "none";
  menCoatsRaincoat.style.display = "none";
  menCoatsTrench.style.display = "none";
  menCoatsWindbreaker.style.display = "none";
  menCoatsOther.style.display = "none";  
}