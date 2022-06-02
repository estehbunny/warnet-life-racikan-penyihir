function createCraftingRecipeTable(craftingRecipe) {
  const table = document.createElement('table')
  const topRow = table.insertRow()
  const bottomRow = table.insertRow()

  topRow.classList.add('crafting-top-row')
  bottomRow.classList.add('crafting-bottom-row')

  let recipe = craftingRecipe
  addCraftingRecipeImage(topRow, recipe.recipe1.path, recipe.recipe1.type)
  addCraftingRecipeImage(topRow, recipe.recipe2.path, recipe.recipe2.type)
  addCraftingRecipeImage(topRow, recipe.recipe3.path, recipe.recipe3.type)
  addCraftingRecipeImage(topRow, recipe.recipe4.path, recipe.recipe4.type)
  addCraftingResultImage(topRow, recipe.result.path, recipe.result.type)
  addCraftingInfo(
    bottomRow,
    recipe.recipe1.description,
    recipe.recipe2.description,
    recipe.recipe3.description,
    recipe.recipe4.description
  )
  addCraftingResult(
    bottomRow,
    recipe.result.description,
    recipe.result.essential
  )

  let divRecipe = document.querySelector('#racikan')
  divRecipe.appendChild(table)

  function addCraftingRecipeImage(topRow, recipeImg, craftType) {
    let recipe = topRow.insertCell()
    recipe.classList.add('craft', 'center')
    if (craftType) recipe.classList.add(`${craftType}`)

    let recipeImageElement = document.createElement('img')
    recipeImageElement.src = `item/${recipeImg}.png`
    recipe.appendChild(recipeImageElement)
  }

  function addCraftingInfo(bottomRow, recipe1, recipe2, recipe3, recipe4) {
    let craftRecipe = bottomRow.insertCell()
    craftRecipe.classList.add('center', 'craft-recipe')
    craftRecipe.colSpan = '4'
    craftRecipe.innerText = `${recipe1} + ${recipe2} + ${recipe3} + ${recipe4}`
  }

  function addCraftingResult(bottomRow, result) {
    let craftProcess = bottomRow.insertCell()
    craftProcess.classList.add('center', 'arrow')
    craftProcess.innerHTML = '&rightarrow;'
    let craftRecipe = bottomRow.insertCell()
    craftRecipe.classList.add('center', 'result')
    craftRecipe.innerText = `${result}`
  }

  function addCraftingResultImage(topRow, resultImg, craftType) {
    let process = topRow.insertCell()
    process.classList.add('process', 'center')
    process.innerHTML = '>>'

    addCraftingRecipeImage(topRow, resultImg, craftType || 'result')
  }
}

function addSection(title) {
  let divRecipe = document.querySelector('#racikan')
  let section = document.createElement('h2')
  section.classList.add('cute-title')
  section.innerText = title
  divRecipe.appendChild(section)
}

function initCrafting() {
  addSection('Easter Egg')
  for (recipe of generatedRecipes) {
    createCraftingRecipeTable(recipe)
  }

  addSection('Tengkorak')
  for (recipe of generatedEssentialRecipes) {
    createCraftingRecipeTable(recipe)
  }

  addSection('Witch\'s Stuffs')
  for (recipe of generatedGameWitchStuffRecipes) {
    createCraftingRecipeTable(recipe)
  }

  addSection('Painting Game Warnet Life')
  for (recipe of generatedGameEasterEggRecipes) {
    createCraftingRecipeTable(recipe)
  }
}

initCrafting()