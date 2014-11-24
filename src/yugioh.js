
function getCustomAmount()
{
	var elem = document.getElementById("amount");
	return parseInt(elem.value);
}

function addCustom(player)
{
	add(player, getCustomAmount());
}

function subCustom(player)
{
	add(player, -1 * getCustomAmount());
}

function add(player, amount)
{
	set(player, getCurrentLife(player) + amount);
}

function getCurrentLife(player)
{
	return parseInt(document.getElementById('player' + player).innerHTML);
}

function set(player, life)
{
	var elem = document.getElementById('player' + player);
	elem.innerHTML = life;
	adjustBar(player);
}

function setCustom(player)
{
	set(player, getCustomAmount());
}

function reset()
{
	set(1, 8000);
	set(2, 8000);
}

function adjustBar(player)
{
	var elem = document.getElementById('player' + player);
	var currentLife = parseInt(elem.innerHTML);
	if(currentLife >= 8000)
	{
		elem.style.width = "100%";
	}
	else if(currentLife <= 0)
	{
		elem.style.width = "0%";
	}
	else
	{
		elem.style.width = "" + ((currentLife / 8000) * 100) + "%";
	}
}

function coinFlip()
{
	var elem = document.getElementById("coin_die");
	
	elem.innerHTML = "Flipping...";
	setTimeout(completeFlip, 1000);
}

function completeFlip()
{
	var elem = document.getElementById("coin_die");
	
	if(Math.random()<0.5)
	{
		elem.innerHTML = '<img src="img/tails.jpg" />';
	}
	else
	{
		elem.innerHTML = '<img src="img/heads.jpg" />';
	}
}

function dieRoll()
{
	var elem = document.getElementById("coin_die");
	
	elem.innerHTML = "Rolling...";
	setTimeout(completeRoll, 1000);
}

function completeRoll()
{
	var elem = document.getElementById("coin_die");
	
	var roll = Math.random() * 6;
	
	if(roll < 1)
	{
		elem.innerHTML = '<img src="img/die1.png" />';
	}
	else if(roll < 2)
	{
		elem.innerHTML = '<img src="img/die2.png" />';
	}
	else if(roll < 3)
	{
		elem.innerHTML = '<img src="img/die3.png" />';
	}
	else if(roll < 4)
	{
		elem.innerHTML = '<img src="img/die4.png" />';
	}
	else if(roll < 5)
	{
		elem.innerHTML = '<img src="img/die5.png" />';
	}
	else
	{
		elem.innerHTML = '<img src="img/die6.png" />';
	}
}
