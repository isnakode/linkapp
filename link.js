const links = [
  { icon: 'img/vscode.svg', nama: 'VS Code', url: 'https://code.visualstudio.com/download' },
  { icon: 'img/git.svg', nama: 'Git', url: 'https://git-scm.com/downloads' },
  { icon: 'img/composer.svg', nama: 'Composer', url: 'https://getcomposer.org/download' },
  { icon: 'img/xampp.svg', nama: 'XAMPP', url: 'https://www.apachefriends.org/download.html' },
  { icon: 'img/sublimetext.svg', nama: 'Sublime Text', url: 'https://www.sublimetext.com/download' },
  { icon: 'img/androidstudio.svg', nama: 'Android Studio', url: 'https://developer.android.com/studio' },
  { icon: 'img/flutter.svg', nama: 'Flutter', url: 'https://docs.flutter.dev/get-started/install' },
  { icon: 'img/python.svg', nama: 'Python', url: 'https://www.python.org/downloads' },
  { icon: 'img/unity.svg', nama: 'Unity', url: 'https://unity.com/download' },
  { icon: 'img/php.svg', nama: "PHP", url: "https://www.php.net/downloads.php" },
  { icon: "img/go.svg", nama: "Golang", url: "https://go.dev/dl" },
  { icon: "img/codeigniter.svg", nama: "Code Igniter", url: "https://codeigniter.com/download" },
  { icon: "img/nodejs.svg", nama: "Node JS", url: "https://nodejs.org/en/download/prebuilt-installer" },
  { icon: "img/java.svg", nama: "Java", url: "https://www.oracle.com/id/java/technologies/downloads" },
  { icon: "img/eclipse.svg", nama: "Eclipse", url: "https://www.eclipse.org/downloads/packages/installer" },
  { icon: "img/intellij.svg", nama: "Intellij IDEA", url: "https://www.jetbrains.com/idea/download" },
  { icon: "img/mysql.svg", nama: "MySQL", url: "https://dev.mysql.com/downloads/installer" },
  { icon: "img/drawio.svg", nama: "Draw.io", url: "https://get.diagrams.net" },
  { icon: "img/figma.svg", nama: "Figma", url: "https://www.figma.com/downloads" },
  { icon: "img/lunacy.svg", nama: "Lunacy", url: "https://icons8.com/lunacy" },
  { icon: "img/obs.svg", nama: "OBS Studio", url: "https://obsproject.com/download" },
  { icon: "img/notion.svg", nama: "Notion", url: "https://www.notion.so/desktop" },
  { icon: "img/zoom.svg", nama: "Zoom", url: "https://zoom.us/download" },
];

const ul = document.querySelector('ul')
links.sort((a, b) => a.nama.localeCompare(b.nama));
for (const link of links) {
  const a = document.createElement('a')
  const img = document.createElement('img')
  const li = document.createElement('li')
  const p = document.createElement('p')
  a.href = link.url
  img.src = link.icon
  a.target = '_blank'
  p.textContent = link.nama;
  li.appendChild(img)
  li.appendChild(p)
  a.appendChild(li)
  ul.appendChild(a)
}



