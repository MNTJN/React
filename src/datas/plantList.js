import monstera from '../assets/monstera.jpg'
import ficuslyrata from '../assets/ficuslyrata.jpg'
import pothosargente from '../assets/pothosargente.jpg'
import yucca from '../assets/yucca.jpg'
import olivier from '../assets/olivier.jpg'
import geranium from '../assets/geranium.jpg'
import basilic from '../assets/basilic.jpg'
import aloe from '../assets/aloe.jpg'
import succulente from '../assets/succulente.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		light: 2,
		water: 3,
		cover: monstera,
		price: 12,
		description: `Les espèces du genre Monstera sont des plantes grimpantes, aux tiges ligneuses. La tige centrale développe d'épaisses racines aériennes qui s'agrippent au support. \n Elles portent de grandes feuilles tendres, vertes ou panachées, pouvant atteindre 60 cm de large. Le limbe en coeur se découpe et se perfore progressivement. \n En serre ou dans un jardin d'hiver, la plante donne parfois des fleurs blanches, portées par un spadice entouré d'une spathe. Une plante adulte produit un fruit comestible dur, vert, au parfum d'Ananas et de Fruit de la Passion.`
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		light: 3,
		water: 1,
		cover: ficuslyrata,
		price: 15,
		description: `Ficus lyrata est une espèce de figuier de la famille des Moraceae. Elle est originaire d'Afrique de l'Ouest. Son habitat va de l'ouest du Cameroun à la Sierra Leone, dans la forêt tropicale pluvieuse. Il s'agit d'un arbre ornemental commun dans les jardins tropicaux et subtropicaux, parfois utilisée comme plante verte d'intérieur. `
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		light: 1,
		water: 2,
		cover: pothosargente,
		price: 16,
		description: `Le Pothos argenté est une plante tropicale grimpante originaire d'Asie. Faisant partie de la famille des Araceae, il est caractérisé par son feuillages en forme d'As et ses taches d'argent.

		Pouvant supporter des températures allant jusqu'à 15°C, le pothos argenté est un bon compagnon d'intérieur. Si vous remarquez une perte de feuilles importante, peut-être que votre Pothos a trop froid et qu'il lui faut un environnement plus chaud ou plus humide`
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
		light: 3,
		water: 1,
		cover: yucca,
		price: 9,
		description: `Yucca est un genre de 40-50 espèces de plantes vivaces arbustives remarquables par leurs rosettes de feuilles dures, en forme d'épée, et par les grappes de fleurs blanches ou tirant sur le blanc. Les yuccas se rencontrent dans les régions chaudes et sèches de l'Amérique du Nord, de l'Amérique centrale, d'Europe du Sud et des Antilles. Ils sont utilisés comme plantes ornementales.`
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		light: 3,
		water: 1,
		cover: olivier,
		price: 14,
		description: `L'Olivier est un arbre fruitier qui produit les olives, un fruit consommé sous diverses formes et dont on extrait une des principales huiles alimentaires, l'huile d'olive. C'est une variété cultivée depuis plusieurs millénaires, principalement dans les régions de climat méditerranéen, de l'une des sous-espèces de Olea europaea, une espèce d'arbres et d'arbustes de la famille des Oléacées. `
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
		light: 2,
		water: 2,
		cover: geranium,
		price: 19,
		description: `Les espèces du genre Geranium sont des plantes herbacées annuelles ou pérennes et parfois des sous-arbrisseaux1.

		Les feuilles stipulées sont opposées ou alternes ; le limbe est palmé avec des divisions allant jusqu'au milieu du limbe (palmatifide) ou presque jusqu'au pétiole (palmatiséqué). Les segments peuvent être entiers ou lobés. `
	},
	{
		name: 'basilic',
		category: 'extérieur',
		id: '7ie',
		light: 2,
		water: 3,
		cover: basilic,
		price: 17,
		description: `Un plant mesure de 20 à 60 cm de haut, possède des feuilles ovales-lancéolées, atteignant 2 à 4 cm. Il peut cependant facilement atteindre plus d'un mètre de longueur lorsqu'il est conservé plusieurs années (à l'intérieur, ou lorsque le climat le permet). `
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
		light: 2,
		water: 1,
		cover: aloe,
		price: 15,
		description: `L'aspect change d'une espèce à l'autre, mais en général elles se caractérisent par une rosette de feuilles épaisses, mais souples, car très charnues, plus ou moins allongées et, pour certaines espèces, dentelées sur les bords`
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: succulente,
		price: 7,
		description: `Une plante succulente, appelée aussi malacophyte, est une plante charnue adaptée pour survivre dans des milieux arides du fait des caractéristiques du sol, du climat ou à forte concentration en sel (dans ce dernier cas, on parle de plante halophyte). L'adaptation de ces végétaux, différente de celles des plantes xérophytes proprement dites, est liée à leur capacité de stocker de l'eau dans les feuilles, les tiges ou les racines. Les plantes succulentes sont très souvent xérophytiques (elles peuvent empêcher la perte d'eau). Par exemple, les feuilles pourront être recouvertes de cire ou de poils, ou présenter une réduction de la surface. `
	}
]