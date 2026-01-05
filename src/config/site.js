// Get site URL from environment variable, use default value if not set
// Note: Please set the correct PUBLIC_SITE_URL in .env file after first deployment
const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://elmex.de';

export const siteConfig = {
	title: "elmex - Wissenschaftlich fundierte Zahngesundheit",
	author: "elmex",
	url: SITE_URL,
	mail: "info@elmex.de",
	phone: "+49-40-27174-0",
	foundingYear: 1962,
	parentOrg: "Colgate-Palmolive",
	utm: {
		source: `${SITE_URL}`,
		medium: "referral",
		campaign: "navigation",
	},
	meta:{
		title: "elmex - Wissenschaftlich fundierte Zahngesundheit für die ganze Familie",
		description: "Wissenschaftlich fundierte Zahngesundheit für die ganze Familie - elmex Produkte mit einzigartigem Aminfluorid für effektiven Kariesschutz seit 1962.",
		keywords: "elmex, Zahnpasta, Mundspülung, Kariesschutz, Aminfluorid, Zahngesundheit, Zahnarzt empfohlen, Made in Germany",
		image: `${SITE_URL}/og-image.jpg`,
	},
	// social links (optional for elmex)
	social:{
		facebook: "https://www.facebook.com/elmex",
		instagram: "https://www.instagram.com/elmex",
	},
};

// Footer - elmex footer columns structure
export const footerColumns = [
	{
		title: "Produkte",
		links: [
			{ name: "Alle Produkte", url: "/produkte" },
			{ name: "Zahnpasta", url: "/produkte?category=zahnpasta" },
			{ name: "Mundspülung", url: "/produkte?category=mundspuelung" },
			{ name: "Zahnbürste", url: "/produkte?category=zahnbuerste" },
		]
	},
	{
		title: "Wissen",
		links: [
			{ name: "Alle Artikel", url: "/wissen" },
			{ name: "Zahngesundheits-Tipps", url: "/beratung/zahngesundheit-tipps" },
			{ name: "FAQ", url: "/faq" },
		]
	},
	{
		title: "Kontakt",
		links: [
			{ name: "Über elmex", url: "/ueber-elmex" },
			{ name: "Kontakt", url: "/kontakt" },
			{ name: "Impressum", url: "/impressum" },
			{ name: "Datenschutz", url: "/datenschutz" },
		]
	}
];

// Optional social links (can be empty for elmex)
export const socialLinks = [];


