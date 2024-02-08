"use strict";
let fileName;

function fileRead(file, readAs)
{
	return new Promise(resolve =>
	{
		const reader = new FileReader();
		reader.addEventListener("load", event => resolve(event.target.result));

		fileName = file.name.slice(0, file.name.lastIndexOf("."));
		reader[readAs](file);
	});
}

function fileDownload(file, name, type)
{
	const a = document.createElement("a");
	a.href = window.URL.createObjectURL(new Blob([file], {type: [type]}));
	a.download = name;
	a.click();
}
function fileDownloadURL(file, name, type)
{
	const a = document.createElement("a");
	a.href = file;
	a.download = name;
	a.click();
}

function formatReplace(name, replace)
{
	return name.slice(0, name.lastIndexOf(".")) + replace;
}



// lemocha - lemocha7.github.io