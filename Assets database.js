/* ============================================================
   SPC — IMAGE ASSET DATABASE
   ============================================================
   This file is loaded BEFORE the main chart file
   (turn12-galactic-political-relations.html) and must sit in the
   same folder / repo as it, e.g.:

     /your-repo/
       turn12-galactic-political-relations.html
       assets-database.js   <-- this file
       icons/                <-- suggested place to keep image files
         ethics/...
         civics/...
         authorities/...
         origins/...

   HOW IT WORKS
   ------------
   Every Ethic / Civic / Authority / Origin / Nation Type used on
   the chart has a slot below. Paste an image URL as the value
   (a GitHub raw link, e.g.
   "https://raw.githubusercontent.com/you/repo/main/icons/ethics/spiritualist.png"
   or any public image URL) and the chart will show that image
   next to the text, e.g. "[icon] Fanatic Spiritualist".

   - The image is NEVER a replacement for the text. It is always
     icon + text together.
   - Leave a value as "" (empty string) if you don't have an icon
     yet — the chart will just show the text with no icon and
     will NOT throw an error.
   - Keys are case-sensitive and must match the text used in the
     nation data in the main HTML file EXACTLY. If you rename or
     add an ethic/civic/etc. in the main file, add a matching key
     here too.
   - You do not need to touch the main HTML file to add icons —
     only this file.
   ============================================================ */

const ASSET_DB = {

  // ---- ETHICS ------------------------------------------------
  ethics: {
    "Fanatic Spiritualist": "",
    "Spiritualist": "",
    "Fanatic Xenophile": "",
    "Fanatic Xenophobe": "",
    "Xenophobe": "",
    "Fanatic Materialist": "",
    "Materialist": "",
    "Fanatic Militarist": "",
    "Militarist": "",
    "Fanatic Pacifist": "",
    "Egalitarian": "",
    "Authoritarian": "",
    "Gestalt Consciousness": ""
  },

  // ---- CIVICS --------------------------------------------------
  civics: {
    "Philosopher King": "",
    "Masterful Crafters": "",
    "Empire in Decline": "",
    "Lethargic Leadership": "",
    "Custodian Matrix": "",
    "Fallen Machine Intelligence": "",
    "Fragmented Command": "",
    "Hyper-aggressive Drones": "",
    "Unstable Drones": "",
    "Stunted Drones": "",
    "Galactic Curators": "",
    "Crusader Spirit": "",
    "Technocracy": "",
    "Maid Nation": "",
    "Relentless Industrialists": "",
    "Reanimators": "",
    "Beacon of Liberty": "",
    "Fanatic Purifiers": "",
    "Meritocracy": "",
    "Ascensionists": "",
    "Corvee System": "",
    "[DATA EXPUNGED]": ""
  },

  // ---- AUTHORITY -------------------------------------------------
  authorities: {
    "Imperial": "https://stellaris.paradoxwikis.com/images/5/56/Auth_imperial.png",
    "Democracy": "",
    "Oligarchy": "",
    "Dictatorship": "",
    "Hivemind": "",
    "Machine Intelligence": "",
    "None": ""
  },

  // ---- ORIGIN --------------------------------------------------
  origins: {
    "Imperial Fiefdom": "",
    "Elder Race": "",
    "Starlit Pilgrimmage": "",
    "Throne of Stars": "",
    "Subspace Vanguard": "",
    "Post Apocalyptic": "",
    "Syncretic Evolution": "",
    "Scion": "",
    "Endbringers": "",
    "Prosperous Unification": "",
    "[DATA EXPUNGED]": "",
    "[NO DATA]": ""
  },

  // ---- NATION TYPE (small badge icon, optional) -----------------
  nationTypes: {
    "Normal Nation": "",
    "Fallen Empire": "",
    "Crisis Entity": "",
    "Crisis Countermeasure": ""
  }

};
