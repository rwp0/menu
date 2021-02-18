var selection;
browser.runtime.onMessage.addListener(message => selection = message.selection);
// file: menu.webextensions.content.js, function: browser.runtime.sendMessage
var menus =
[
{id: 'firefox-internal', title: 'firefox (internal)', contexts: ['selection'], 'icons': {'32': 'png/firefox.ico'}},
{id: 'firefox-internal-jsonview', parentId: 'firefox-internal', title: 'jsonview', contexts: ['selection'], 'icons': {'32': 'png/firefox.ico'}},
{id: 'research', title: 'research', contexts: ['selection'], 'icons': { '32': 'png/reader.png' }},
{id: 'pmid', parentId: 'research', title: 'pubmed', contexts: ['selection'], 'icons': {'32': 'png/reader.ico'}},
{id: 'pmc', parentId: 'research', title: 'pubmed central', contexts: ['selection'], 'icons': {'32': 'png/reader.ico'}},
{id: 'doi', parentId: 'research', title: 'doi', contexts: ['selection'], 'icons': {'32': 'png/reader.ico'}},
{id: 'bsd', title: 'bsd', contexts: ['selection'], 'icons': {'16': 'png/bsd.ico'}},
{id: 'openbsd', parentId: 'bsd', title: 'openbsd', contexts: ['selection'], 'icons': {'32': 'png/openbsd.ico'}},
{id: 'openbsd-ports', parentId: 'openbsd', title: 'openbsd ports', contexts: ['selection'], 'icons': {'32': 'png/openbsd.ico'}},
{id: 'openports', parentId: 'openbsd', title: 'openports', contexts: ['selection'], 'icons': {'32': 'png/openbsd.ico'}},
{id: 'openbsd-manuals', parentId: 'openbsd', title: 'openbsd manuals', contexts: ['selection'], 'icons': {'32': 'png/openbsd.ico'}},
{id: 'freebsd', parentId: 'bsd', title: 'freebsd', contexts: ['selection'], 'icons': { '32': 'png/freebsd.ico'}},
{id: 'freebsd-opengrok', parentId: 'freebsd', title: 'freebsd opengrok', contexts: ['selection'], 'icons': {'32': 'png/freebsd.ico'}},
{id: 'freebsd-ports', parentId: 'freebsd', title: 'freebsd ports', contexts: ['selection'], 'icons': {'32': 'png/freebsd.ico'}},
{id: 'freebsd-manuals', parentId: 'freebsd', title: 'freebsd manuals', contexts: ['selection'], 'icons': {'32': 'png/freebsd.ico'}},
{id: 'freebsd-wiki', parentId: 'freebsd', title: 'freebsd wiki', contexts: ['selection'], 'icons': {'32': 'png/freebsd.ico'}},
{id: 'netbsd', parentId: 'bsd', title: 'netbsd', contexts: ['selection'], 'icons': {'32': 'png/netbsd.ico'}},
{id: 'netbsd-opengrok', parentId: 'netbsd', title: 'netbsd opengrok', contexts: ['selection'], 'icons': {'32': 'png/netbsd.ico'}},
{id: 'netbsd-ports', parentId: 'netbsd', title: 'netbsd ports', contexts: ['selection'], 'icons': {'32': 'png/netbsd.ico'}},
{id: 'pkgsrc', parentId: 'netbsd', title: 'pkgsrc', contexts: ['selection'], 'icons': {'32': 'png/pkgsrc.ico'}},
{id: 'netbsd-manuals', parentId: 'netbsd', title: 'netbsd manuals', contexts: ['selection'], 'icons': {'32': 'png/netbsd.ico'}},
{id: 'netbsd-wiki', parentId: 'netbsd', title: 'netbsd wiki', contexts: ['selection'], 'icons': {'32': 'png/netbsd.ico'}},
{id: 'dragonfly', parentId: 'bsd', title: 'dragonfly', contexts: ['selection'], 'icons': {'32': 'png/dragonfly.ico'}},
{id: 'dragonfly-manuals', parentId: 'dragonfly', title: 'dragonfly manuals', contexts: ['selection'], 'icons': {'32': 'png/dragonfly.ico'}},
{id: 'dragonfly-wiki', parentId: 'dragonfly', title: 'dragonfly wiki', contexts: ['selection'], 'icons': {'32': 'png/dragonfly.ico'}},
{id: 'dragonfly-opengrok', parentId: 'dragonfly', title: 'dragonfly opengrok', contexts: ['selection'], 'icons': {'32': 'png/dragonfly.ico'}},
{id: 'solaris', title: 'solaris', contexts: ['selection'], 'icons': {'32': 'png/solaris.png'}},
{id: 'illumos', parentId: 'solaris', title: 'illumos', contexts: ['selection'], 'icons': {'16': 'png/illumos.ico'}},
{id: 'illumos-manuals', parentId: 'illumos', title: 'illumos manuals', contexts: ['selection'], 'icons': {'16': 'png/illumos.ico'}},
{id: 'illumos-opengrok', parentId: 'illumos', title: 'illumos opengrok', contexts: ['selection'], 'icons': {'16': 'png/illumos.ico'}},
{id: 'kernel', title: 'kernel', contexts: ['selection'], 'icons': {'32': 'png/kernel.png'}},


{id: 'debian', parentId: 'kernel', title: 'debian', contexts: ['selection'], 'icons': {'32': 'png/debian.ico'}},

{id: 'debian-packages', parentId: 'debian', title: 'debian packages', contexts: ['selection'], 'icons': {'32': 'png/debian.ico'}},

{id: 'debian-source-packages', parentId: 'debian', title: 'debian source packages', contexts: ['selection'], 'icons': {'32': 'png/debian.ico'}},

{id: 'debian-manuals', parentId: 'debian', title: 'debian manuals', contexts: ['selection'], 'icons': {'32': 'png/debian.ico'}},


{id: 'fedora', parentId: 'kernel', title: 'fedora', contexts: ['selection'], 'icons': {'32': 'png/fedora.ico'}},

{id: 'fedora-package', parentId: 'fedora', title: 'fedora package', contexts: ['selection'], 'icons': {'32': 'png/fedora.ico'}},

{id: 'fedora-spec', parentId: 'fedora', title: 'fedora spec', contexts: ['selection'], 'icons': {'32': 'png/fedora.ico'}},

{id: 'copr', parentId: 'fedora', title: 'copr', contexts: ['selection'], 'icons': {'32': 'png/copr.ico'}},


{id: 'centos', parentId: 'kernel', title: 'centos', contexts: ['selection'], 'icons': {'16': 'png/centos.ico'}},

{id: 'centos-wiki', parentId: 'centos', title: 'centos wiki', contexts: ['selection'], 'icons': {'16': 'png/centos.ico'}},

{id: 'centos-pagure', parentId: 'centos', title: 'centos pagure', contexts: ['selection'], 'icons': {'16': 'png/centos.ico'}},


{id: 'archlinux', parentId: 'kernel', title: 'archlinux', contexts: ['selection'], 'icons': {'16': 'png/archlinux.ico'}},

{id: 'archwiki', parentId: 'archlinux', title: 'archwiki', contexts: ['selection'], 'icons': {'16': 'png/archlinux.ico'}},

{id: 'archlinux-package-core', parentId: 'archlinux', title: 'archlinux core package', contexts: ['selection'], 'icons': {'16': 'png/archlinux.ico'}},

{id: 'archlinux-package-extra', parentId: 'archlinux', title: 'archlinux extra package', contexts: ['selection'], 'icons': {'16': 'png/archlinux.ico'}},

{id: 'archlinux-package-community', parentId: 'archlinux', title: 'archlinux community package', contexts: ['selection'], 'icons': {'16': 'png/archlinux.ico'}},

{id: 'aur', parentId: 'archlinux', title: 'aur', contexts: ['selection'], 'icons': {'16': 'png/archlinux.ico'}},


{id: 'canonical', parentId: 'archlinux', title: 'canonical', contexts: ['selection'], 'icons': {'32': 'png/archlinux.ico'}},


{id: 'dos', title: 'dos', contexts: ['selection'], 'icons': {'32': 'png/microsoft.ico'}},

{id: 'dos-command', parentId: 'dos', title: 'dos command', contexts: ['selection'], 'icons': {'32': 'png/microsoft.ico'}},

{id: 'dos-commandlet', parentId: 'dos', title: 'dos commandlet', contexts: ['selection'], 'icons': {'32': 'png/microsoft.ico'}},


{type: 'separator'},


{id: 'emacs', title: 'emacs', contexts: ['selection'], 'icons': {'32': 'png/emacs.png'}},

{id: 'elpa', parentId: 'emacs', title: 'elpa', contexts: ['selection'], 'icons': {'32': 'png/elpa.png'}},

{id: 'melpa', parentId: 'emacs', title: 'melpa', contexts: ['selection'], 'icons': {'32': 'png/melpa.ico'}},

{id: 'emacswiki', parentId: 'emacs', title: 'emacswiki', contexts: ['selection'], 'icons': {'32': 'png/emacswiki.ico'}},


{id: 'firefox', title: 'firefox', contexts: ['selection'], 'icons': {'32': 'png/firefox.ico'}},

{id: 'mdn', parentId: 'firefox', title: 'mdn', contexts: ['selection'], 'icons': {'32': 'png/mdn.png'}},

{id: 'mdn-element', parentId: 'firefox', title: 'mdn element', contexts: ['selection'], 'icons': {'32': 'png/mdn.png'}},

{id: 'dxr', parentId: 'firefox', title: 'dxr', contexts: ['selection'], 'icons': {'32': 'png/dxr.png'}},


{id: 'perl', title: 'perl', contexts: ['selection'], 'icons': {'32': 'png/perl.ico'}},

{id: 'perldoc-function', parentId: 'perl', title: 'perldoc function', contexts: ['selection'], 'icons': {'32': 'png/perl.ico'}},

{id: 'perldoc-module', parentId: 'perl', title: 'perldoc module', contexts: ['selection'], 'icons': {'32': 'png/perl.ico'}},

{id: 'cpan-distribution', parentId: 'perl', title: 'cpan distribution', contexts: ['selection'], 'icons': {'32': 'png/cpan.ico'}},

{id: 'cpan-pod', parentId: 'perl', title: 'cpan pod', contexts: ['selection'], 'icons': {'32': 'png/cpan.ico'}},

{id: 'cpan-issues', parentId: 'perl', title: 'cpan issues', contexts: ['selection'], 'icons': {'32': 'png/rt.ico'}},


{id: 'tex', title: 'tex', contexts: ['selection'], 'icons': {'16': 'png/ctan.ico'}},

{id: 'ctan', parentId: 'tex', title: 'ctan', contexts: ['selection'], 'icons': {'16': 'png/ctan.ico'}},


{id: 'gnu', title: 'gnu', contexts: ['selection'], 'icons': {'32': 'png/gnu.png'}},

{id: 'gnu-software', parentId: 'gnu', title: 'gnu software', contexts: ['selection'], 'icons': {'32': 'png/gnu.png'}},

{id: 'gnu-manual', parentId: 'gnu', title: 'gnu manual', contexts: ['selection'], 'icons': {'32': 'png/gnu.png'}},


{id: 'ansible', title: 'ansible', contexts: ['selection'], 'icons': {'32': 'png/ansible.png'}},

{id: 'ansible-module', parentId: 'ansible', title: 'ansible module', contexts: ['selection'], 'icons': {'32': 'png/ansible.png'}},

{id: 'galaxy', parentId: 'ansible', title: 'galaxy', contexts: ['selection'], 'icons': {'32': 'png/galaxy.png'}},


{type: 'separator'},


{id: 'rfc', title: 'rfc', contexts: ['selection'], 'icons': {'32': 'png/rfc.png'}},

{id: 'sourceforge', title: 'sourceforge', contexts: ['selection'], 'icons': {'32': 'png/sourceforge.ico'}},

{id: 'iu', title: 'iu', contexts: ['selection'], 'icons': {'16': 'png/iu.ico'}},

{id: 'foldoc', title: 'foldoc', contexts: ['selection'], 'icons': {'32': 'png/foldoc.png'}},


{type: 'separator'},


{id: 'wikimedia', title: 'wikimedia', contexts: ['selection'], 'icons': {'32': 'png/wikimedia.ico'}},

{id: 'wikipedia', parentId: 'wikimedia', title: 'wikipedia', contexts: ['selection'], 'icons': {'32': 'png/wikipedia.ico'}},

{id: 'wiktionary', parentId: 'wikimedia', title: 'wiktionary', contexts: ['selection'], 'icons': {'32': 'png/wiktionary.ico'}},

{id: 'commons', parentId: 'wikimedia', title: 'commons', contexts: ['selection'], 'icons': {'32': 'png/commons.ico'}},

{id: 'mediawiki', parentId: 'wikimedia', title: 'mediawiki', contexts: ['selection'], 'icons': {'16': 'png/mediawiki.ico'}},

{id: 'mediawiki-article', parentId: 'mediawiki', title: 'mediawiki article', contexts: ['selection'], 'icons': {'16': 'png/mediawiki.ico'}},

{id: 'mediawiki-extension', parentId: 'mediawiki', title: 'mediawiki extension', contexts: ['selection'], 'icons': {'16': 'png/mediawiki.ico'}},


{id: 'metallum', title: 'metallum', contexts: ['selection'], 'icons': {'32': 'png/metallum.ico'}},

{id: 'moby', title: 'moby', contexts: ['selection'], 'icons': {'16': 'png/moby.ico'}},


{id: 'mitre', title: 'mitre', contexts: ['selection'], 'icons': {'16': 'png/mitre.ico'}},

];

for (var menu of menus)
{

browser.menus.create(menu);

} // menus.forEach(menu=>browser.menus.create(menu)); // alternative syntax


browser.menus.onClicked.addListener
(

(item, tab) =>

{

var url;

switch(item.menuItemId)
{


case 'firefox-internal-jsonview':


url = `data:application/json,${selection}`;


break; // (?): permissions



case 'pmid':

url = `https://pubmed.ncbi.nlm.nih.gov/${selection}`;

break;


case 'pmc':

url = `https://www.ncbi.nlm.nih.gov/pmc/articles/PMC${selection}`;

break;


case 'doi':

url = `https://doi.org/${selection}`;

break;



case 'wikipedia': url=`https://en.wikipedia.org/wiki/${selection}`; break;

case 'wiktionary': url=`https://en.wiktionary.org/wiki/${selection}`; break;

case 'commons':  url=`https://commons.wikimedia.org/wiki/${selection}`; break;

case 'mediawiki-article': url=`https://www.mediawiki.org/wiki/${selection}`; break;

case 'mediawiki-extension': url=`https://www.mediawiki.org/wiki/Extension:${selection}`; break;


case 'freebsd-opengrok': url=`http://bxr.su/search?project=FreeBSD&path=${selection}`; break;

case 'freebsd-ports': url=`https://svnweb.freebsd.org/ports/head/${selection}/Makefile?revision=HEAD&view=markup`; break;

case 'freebsd-manuals': url=`https://www.freebsd.org/cgi/man.cgi?query=${selection}`; break;

case 'freebsd-wiki': url=`https://wiki.freebsd.org/${selection}`; break;


case 'openbsd-ports': url=`https://cvsweb.openbsd.org/cgi-bin/cvsweb/ports/${selection}/Makefile?rev=HEAD&content-type=text/x-cvsweb-markup`; break;

case 'openports': url=`http://openports.se/${selection}`; break;

case 'openbsd-manuals': url=`https://man.openbsd.org/${selection}`; break;


case 'netbsd-opengrok': url=`https://nxr.netbsd.org/search?q=&project=src&path=${selection}`; break;

case 'netbsd-ports': url=`http://cvsweb.netbsd.org/bsdweb.cgi/pkgsrc/${selection}/Makefile?rev=HEAD&content-type=text/x-cvsweb-markup`; break;

case 'pkgsrc': url=`http://pkgsrc.se/${selection}`; break;

case 'netbsd-manuals': url=`https://netbsd.gw.com/cgi-bin/man-cgi?${selection}`; break;

case 'netbsd-wiki': url=`https://wiki.netbsd.org/cgi-bin/ikiwiki?P=${selection}`; break;


case 'dragonfly-manuals': url=`https://man.dragonflybsd.org/?command=${selection}`; break;

case 'dragonfly-wiki': url=`https://www.dragonflybsd.org/wiki.cgi?P=${selection}`; break;

case 'dragonfly-opengrok': url=`https://grok.dragonflybsd.org/search?project=dragonfly&path=${selection}`; break;


case 'debian-packages': url=`https://packages.debian.org/sid/${selection}`; break;

case 'debian-source-packages': url=`https://packages.debian.org/source/sid/${selection}`; break;

case 'debian-manuals': url=`https://manpages.debian.org/unstable/${selection}/`; break;


case 'fedora-package': url=`https://apps.fedoraproject.org/packages/${selection}/`; break;

case 'fedora-spec': url=`https://apps.fedoraproject.org/packages/${selection}/sources/spec/`; break;

case 'copr': url=`https://copr.fedorainfracloud.org/coprs/${selection}/packages/`; break;


case 'archwiki': url=`https://wiki.archlinux.org/index.php/${selection}`; break;

case 'archlinux-package-core': url=`https://www.archlinux.org/packages/core/x86_64/${selection}/`; break;

case 'archlinux-package-extra': url=`https://www.archlinux.org/packages/extra/x86_64/${selection}/`; break;

case 'archlinux-package-community': url=`https://www.archlinux.org/packages/community/x86_64/${selection}/`; break;

case 'aur': url=`https://aur.archlinux.org/packages/${selection}/`; break;


case 'illumos-manuals': url=`https://illumos.org/man/${selection}`; break;

case 'illumos-opengrok': url=`https://src.illumos.org/source/search?project=illumos-gate&path=${selection}`; break;


case 'perldoc function': url=`https://perldoc.perl.org/5.30.0/functions/${selection}.html`; break;

case 'perldoc-module':

url=`https://perldoc.perl.org/${selection}.html`;

if(url.match('::'))
{

url=url.replace(/::/g, '/');

}

break;

case 'cpan-distribution': url=`https://metacpan.org/release/${selection}`; break;

case 'cpan-pod': url=`https://metacpan.org/pod/${selection}`; break;

case 'cpan-issues': url=`https://rt.cpan.org/Public/Dist/Display.html?Name=${selection}`; break; // eg. Net-SSH-Perl


case 'ctan': url=`https://ctan.org/pkg/${selection}`; break;


case 'elpa': url=`https://elpa.gnu.org/packages/${selection}.html`; break;

case 'melpa': url=`https://melpa.org/#/${selection}`; break;

case 'emacswiki': url=`https://www.emacswiki.org/emacs/${selection}`; break;


case 'mdn': url=`https://developer.mozilla.org/en-US/search?q=${selection}`; break;

case 'mdn-element': url=`https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${selection}`; break;

case 'dxr': url=`https://dxr.mozilla.org/firefox/search?q=${selection}`; break;


case 'dos-command': url=`https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/${selection}`; break;

case 'dos-commandlet': url=`https://docs.microsoft.com/en-us/powershell/module/?term=${selection}`; break;


case 'ansible-module': url=`https://docs.ansible.com/ansible/latest/modules/${selection}_module.html`; break;

case 'galaxy': url=`https://galaxy.ansible.com/${selection}`; break; // eg: linux-system-roles/timesync


case 'rfc': url=`https://tools.ietf.org/html/rfc${selection}`; break;

case 'cmatrix': url=`https://sourceforge.net/projects/${selection}/`; break


case 'gnu-software': url=`https://gnu.org/software/${selection}}`; break;

case 'gnu-manual': url=`https://gnu.org/software/${selection}/manual`; break;


case 'iu': url=`https://kb.iu.edu/search?q=${selection}&s=15&a=yes`; break;

case 'foldoc': url=`https://foldoc.org/${selection}`; break;

case 'moby': url=`http://moby-thesaurus.org/search?q=${selection}`; break;

case 'metallum': url=`https://www.metal-archives.com/bands/${selection}`; break;


case 'mitre': url=`https://cve.mitre.org/cgi-bin/cvename.cgi?name=${selection}`; break;

}

browser.tabs.create({'url': url});

}

);
