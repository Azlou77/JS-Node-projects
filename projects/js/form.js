document.getElementsByTagName('button').addEventListener('click', addWeapons);

function addWeapons() {
    let weapons = document.getElementById('weapons');
    let weapon = document.createElement('li');
    weapon.innerHTML = 'Weapon';
    weapons.appendChild(weapon);
}
