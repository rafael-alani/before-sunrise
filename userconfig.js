const CONFIG = new Config({
  // crypto: {
  //   coin: "ETH",
  //   currency: "USD",
  //   refreshIn: 10,
  // },
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: "Delft, Netherlands",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ff7b95",
  },
  search: {
    engines: {
      q: ["https://www.qwant.com/?q=", "Qwant"],
      s: ["https://www.startpage.com/do/dsearch?q=", "Startpage"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      w: ["https://en.wikipedia.org/w/index.php?search=", "Wikipedia"],
    },
  },
  keybindings: {
    s: "search-bar",
  },
  disabled: ["crypto-rate", "todo-list"],
  openLastVisitedTab: false,
  tabs: [
    {
      name: "Work",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "Mails",
          links: [
            {
              name: "/uni/",
              url: "https://outlook.office.com/mail/",
            },
            {
              name: "/proton/",
              url: "mail.proton.me",
            },
            {
              name: "/outlook/",
              url: "https://outlook.live.com/mail/0/",
            },
            {
              name: "/gmail/",
              url: "https://mail.google.com/mail",
            },
            {
              name: "/yahoo/",
              url: "https://mail.yahoo.com",
            },
          ],
        },
        {
          name: "DSV",
          links: [
            {
              name: "/quire/",
              url: "https://quire.io/w/External_relations_team/51",
            },
            {
              name: "/hubspot/",
              url: "https://app.hubspot.com/reports-dashboard/5609995/view/2680638",
            },
            {
              name: "/teams/",
              url: "https://teams.microsoft.com/v2/",
            },
            {
              name: "/outlook/",
              url: "https://outlook.office.com/mail/cubesat-vsv@tudelft.nl/",
            },
          ],
        },
        {
          name: "YesDelft",
          links: [
            {
              name: "/mail/",
              url: "https://mail.google.com/mail/u/0/#inbox",
            },
            {
              name: "/drive/",
              url: "https://drive.google.com/drive/u/0/home",
            },
          ],
        },
      ],
    },
    {
      name: "Chill",
      background_url: "src/img/banners/bg-1.gif",
      categories: [
        {
          name: "fun",
          links: [
            {
              url: "https://www.nt2school.nl/nl/lesmateriaal/delftse-methode-nederlands-voor-anderstaligen",
              name: "/groene boek/",
            },
            {
              url: "https://monkeytype.com/",
              name: "/monkeytype/",
            },
            {
              url: "https://openquant.co/math-game",
              name: "/quant/",
            },
            {
              url: "https://mathheads.net/",
              name: "/mental-math/",
            },
            {
              url: "https://lichess.org/training",
              name: "/lichess/",
            },
          ],
        },
        {
          name: "Homeserver",
          links: [
            {
              name: "/homarr/",
              url: "http://localhost:7575/board",
            },
            {
              name: "/dockge/",
              url: "http://localhost:5001/",
            },
            // {
            //   name: "/prog/",
            //   url: "https://boards.420chan.org/prog/",
            //   icon: "code",
            // },
          ],
        },

        {
          name: "Cinephile",
          links: [
            {
              name: "/jellyfin/",
              url: "http://localhost:8096/web/",
            },
            {
              name: "/jellyseerr/",
              url: "http://localhost:5055/",
            },
            {
              name: "/imdb/",
              url: "https://www.imdb.com/",
            },
          ],
        },
      ],
    },
    {
      name: "AI",
      background_url: "src/img/banners/bg-2.gif",
      categories: [
        {
          name: "Implementations",
          links: [
            {
              name: "/chatgpt/",
              url: "https://chatgpt.com/",
            },
            {
              name: "/claude/",
              url: "https://claude.ai/new/",
            },
            {
              name: "/phind/",
              url: "https://www.phind.com/search?home=true",
            },
          ],
        },
        {
          name: "Reasearch",
          links: [
            {
              name: "/arxiv/",
              url: "https://arxiv.org/",
            },
            {
              name: "/pantheon arxiv trends/",
              url: "https://aipapers.pantheon.so/",
            },
            {
              name: "/pantheon newsletter/",
              url: "https://newsletter.pantheon.so/",
            },
          ],
        },
      ],
    },
    {
      name: "Tech",
      background_url: "src/img/banners/bg-3.gif",
      categories: [
        {
          name: "Interview Practice",
          links: [
            {
              name: "/leetcode/",
              url: "https://leetcode.com/",
            },
            {
              name: "/hackerrank/",
              url: "https://www.hackerrank.com/dashboard",
            },
          ],
        },
        {
          name: "Blogs",
          links: [
            {
              name: "/mataroa collection/",
              url: "https://collection.mataroa.blog/",
            },
          ],
        },
      ],
    },
  ],
});
