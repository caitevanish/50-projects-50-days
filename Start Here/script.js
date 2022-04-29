// Main idea: Change the class on each of the panels
// #1 Bring in all panels into the javascript file
// #2 Have an event listener on each of the panels sop when they;r clicke dsomething happends
// #3 classList = list of the classes. When you add '.add' method, adds the 'class' into class list
// # Make a function to remove the active class when it is assigned
// #

const panels = document.querySelectorAll('.panel') //puts all panels into a node list (similar to an array)
panels.forEach(panel=> {  
  panel.addEventListener('click', () => { //#2
    removeActiveClasses()         // #4
    panel.classList.add('active') // #3
  })
})


function removeActiveClasses(){
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}