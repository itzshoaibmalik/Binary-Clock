const align = (n,s=2) =>
{
	n = String(n);
	
	for (let x = n.length; x < s; ++x)
	{
		n = "0" + n;
	}
	
	return n;
};

const decToBin = (n) =>
{
	let y = 0;
	let b = "";
	
	while (n > 0 && y <= 100)
	{
		b += n % 2;
		n = Math.floor(n / 2);
		y++;
	}
	
	if (y >= 100)
	{
		throw "Too large number";
	}
	
	if (b !== "")
	{
		b = b.split("");
		b = b.reverse();
		b = b.join("");
	}
	
	b = align(b,6);
	
	return b.split("0").join("<blue>0</blue>").split("1").join("<red>1</red>");
};

const update = () =>
{
	const now = new Date();
	
	document.getElementById("clock")
	.innerHTML = `${align(now.getHours())}:${
align(now.getMinutes())}:${align(now.getSeconds())}`;
	
	document.getElementById("binclock")
	.innerHTML = `<div class="hours">${decToBin(now.getHours())}</div><div class="minutes">${decToBin(now.getMinutes())}</div><div class="seconds">${decToBin(now.getSeconds())}</div>`;
	
	requestAnimationFrame(update);
};

onload = update;
