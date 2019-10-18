
function tax() {
    
    var income = document.forms["form"]["income"].value;
    var wealth = document.forms["form"]["wealth"].value;
    
    var res = (0.35 * income) + (0.25 * wealth);
    document.forms["form"]["taxes"].value = res;
    
}