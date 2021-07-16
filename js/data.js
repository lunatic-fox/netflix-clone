/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 */
`use strict`
const data = [
    
    {   
        id: 0,
        play: `<iframe width="560" height="315" src="https://www.youtube.com/embed/SgZI655GgHk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        titleAlt: 'A Viagem de Chiriro',
        titleImg: '0.png',
        description: `Chihiro é uma menina de 10 anos e está em mudanças com a família, para uma nova casa nos subúrbios, quando o seu pai decide ir por um atalho, uma estrada escura e isolada.`
    },

    {   
        id: 1,
        play: `<iframe width="560" height="315" src="https://www.youtube.com/embed/WIASqPZqnhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        titleAlt: '1408',
        titleImg: '1.png',
        description: `Um promissor romancista, Mike Enslin, resolveu escrever livros que investigam e desmistificam os fenômenos paranormais, nunca tendo encontrado evidências de que exista vida após a morte.`
    },

    {   
        id: 2,
        play: `<iframe width="560" height="315" src="https://www.youtube.com/embed/4s4UCxCv_OE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        titleAlt: 'Até o último homem / O herói de Hacksaw Ridge',
        titleImg: '2.png',
        description: `O sonho do jovem Desmond T. Doss de se tornar médico é adiado devido aos escassos meios financeiros da família. Empenhado em salvar vidas, alista-se no Exército norte-americano para cumprir o que considera ser sua obrigação: ajudar os combatentes da Segunda Grande Guerra, mesmo sabendo que as suas convicções pessoais e religiosas o impossibilitam de possuir uma arma ou matar um inimigo.`
    },

    {   
        id: 3,
        play: `<iframe width="560" height="315" src="https://www.youtube.com/embed/0Jgk65L6VxM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        titleAlt: 'Avatar',
        titleImg: '3.png',
        description: `Jake Sully é um veterano dos Fuzileiros confinado a uma cadeira de rodas. Quando o seu irmão gêmeo, um cientista, morre de maneira inesperada, é recrutado para o Programa Avatar, um programa científico que decorre em Pandora, planeta que os humanos exploram devido ao seu minério raro, o unobtânio, apesar da resistência dos Naavi, os nativos alienígenas.`
    },

    {   
        id: 4,
        play: `<iframe width="560" height="315" src="https://www.youtube.com/embed/vwDhwpwXyZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        titleAlt: 'A voz do silêncio',
        titleImg: '4.png',
        description: `Esta é a história de redenção de Shouya Ishida, um rapaz que intimidava uma menina surda chamada Shouko Nishimiya, a ponto da mesma se mudar para outra escola. Como resultado das suas ações, é posto de parte, não tendo qualquer amigo com quem falar, nem quaisquer planos para o futuro.`
    },

    {   
        id: 5,
        play: `<iframe width="560" height="315" src="https://www.youtube.com/embed/3Zi6jdktWCI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        titleAlt: 'O rapaz e o monstro',
        titleImg: '5.png',
        description: `Um conto de fantasia recheado de ação, sobre a amizade entre Kyuuta , um rapaz solitário e infeliz que vive no mundo dos humanos, em Shibuya, e Kumatetsu, uma criatura igualmente solitária que vive num mundo imaginário, Jutengai, onde habitam apenas animais.`
    },

    {   
        id: 6,
        play: `<iframe width="560" height="315" src="https://www.youtube.com/embed/tr4azS1Kxp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        titleAlt: 'O conto da princesa Kaguya',
        titleImg: '6.png',
        description: `Esta animação é baseada no conto popular japonês "O corte do bambu". Kaguya era um minúsculo bebê quando foi encontrada dentro de um tronco de bambu brilhante. Passado o tempo, ela se transforma em uma bela jovem que passa a ser cobiçada por 5 nobres, dentre eles, o próprio Imperador.`
    },

    {   
        id: 7,
        play: `<iframe width="560" height="315" src="https://www.youtube.com/embed/-tIk8E8Wy68" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        titleAlt: 'O auto da Compadecida',
        titleImg: '7.png',
        description: `As aventuras de João Grilo (Matheus Natchergaele), um sertanejo pobre e mentiroso, e Chicó (Selton Mello), o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos da pequena cidade em que vivem.`
    },

    {   
        id: 8,
        play: `<iframe width="560" height="315" src="https://www.youtube.com/embed/DEa508Xmmio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        titleAlt: 'Constantine',
        titleImg: '8.png',
        description: `Após nascer com um dom sobrenatural indesejado e viver uma vida de sofrimento, John Constantine tentou matar-se, foi ao inferno e voltou, agora consciente do seu poder e do seu papel no mundo: sendo capaz de reconhecer os seres angelicais e demoníacos, deveria agora dedicar a vida a reenviar demônios para o Inferno. O mesmo Inferno para onde fatalmente irá por se tentar matar. A não ser que consiga obter um perdão de Deus.`
    },

    {   
        id: 9,
        play: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Tlzvh0cR9q4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        titleAlt: 'O ataque dos vermes malditos',
        titleImg: '9.png',
        description: `Numa pequena cidade do interior americano, ironicamente chamada Perfection, estranhos tremores assustam a população. Descobre-se que os subterrâneos do local estão infectados de vermes famintos por humanos.`
    },

    {   
        id: 10,
        play: `<iframe width="560" height="315" src="https://www.youtube.com/embed/zQEjE_M2Esw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
        titleAlt: 'Sonic the hedgehog',
        titleImg: '10.png',
        description: `Nesta comédia e aventura live-action, Sonic e o seu novo melhor amigo Tom juntam-se para defender o planeta do gênio do mal, o Dr. Robotnik, e dos seus planos para domínio do mundo.`
    }
   
];

export default data;