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
      name: "Chill",
      background_url: "src/img/banners/bg-1.gif",
      categories: [
        {
          name: "fun",
          links: [
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
              name: "/aix website/",
              url: "https://lainchan.org/music/",
              icon: "disc",
            },
          ],
        },
      ],
    },
    // {
    //   name: "tech",
    //   background_url: "src/img/banners/bg-3.gif",
    //   categories: [
    //     {
    //       name: "subreddits",
    //       links: [
    //         {
    //           name: "r/startpages/",
    //           url: "https://www.reddit.com/r/startpages/",
    //         },
    //         {
    //           name: "r/unixporn",
    //           url: "https://www.reddit.com/r/unixporn/",
    //         },
    //         {
    //           name: "r/mechkbds/",
    //           url: "https://www.reddit.com/r/MechanicalKeyboards/",
    //           icon: "keyboard",
    //           icon_color: "#a57685",
    //         },
    //         {
    //           name: "r/programming",
    //           url: "https://www.reddit.com/r/programming/",
    //         },
    //       ],
    //     },
    //     {
    //       name: "blogs",
    //       links: [
    //         {
    //           name: "fasterthanli",
    //           url: "https://fasterthanli.me/articles",
    //           icon: "anchor",
    //         },
    //         {
    //           name: "dev.to",
    //           url: "https://dev.to",
    //         },
    //         {
    //           name: "mataroa.blog",
    //           url: "https://collection.mataroa.blog",
    //         },
    //       ],
    //     },
    //     {
    //       name: "misc",
    //       links: [
    //         {
    //           name: "post office",
    //           url: "http://afternoon.dynu.com/letterbox.html",
    //           icon: "mailbox",
    //         },
    //         {
    //           name: "rust docs",
    //           url: "https://doc.rust-lang.org/book/",
    //           icon: "notebook",
    //           icon_color: "#977a3a",
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
});
