var driveSlides = 5;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 800;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
var followPoint = true;

// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 10.7;
var followBearing = 0;
var followPitch = 0;

var config = {
    style: 'mapbox://styles/ctrnslv/ckrq7r0ac0kuz17l5p96vf9qb',
    accessToken: 'pk.eyJ1IjoiY3RybnNsdiIsImEiOiJja3Jpd2tkeHgzN3pyMnVwOGpjcHJ1ODhoIn0.JucVmRdpKDMRmSbHVA9wtg',
    showMarkers: false,
    theme: 'dark',
    use3dTerrain: false,
    //title: 'SENTINELLE',
    //subtitle: 'In viaggio tra le tappe dell\'inchiesta',
    //byline: 'By Anna Berti Suman',
    //footer: 'August 2021.',
    chapters: [
        {
            id: 'slide-a',
            alignment: 'center',
            hidden: false,
            title: 'Ascolta l\'audio e scorri la mappa per seguire il mio cammino lento verso le tappe dell\'inchiesta.',
            description: '<audio controls> <source src="mix per mappa cammino" type="audio/mpeg"></audio>',
            location: {
              center: [8.61185, 45.91026],
              zoom: 10,
              pitch: 45,
              bearing: -0.16
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
                ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
        id: 'slide-b',
        alignment: 'center',
        hidden: true,
        title: 'Ascolta l\'audio e scorri la mappa seguendo per seguire il mio cammino lento verso le tappe dell\'inchiesta.',
        description: '',
        location: {
          center: [8.61185, 45.91026],
          zoom: 10,
          pitch: 45,
          bearing: -0.16
        },
        mapAnimation: 'flyTo',
        rotateAnimation: false,
        callback: '',
        onChapterEnter: [
            // {
            //     layer: 'layer-name',
            //     opacity: 1,
            //     duration: 5000
            // }
            ],
        onChapterExit: [
            // {
            //     layer: 'layer-name',
            //     opacity: 0
            // }
        ]
    },
    {
          id: 'slide-0',
          alignment: 'right',
          hidden: false,
          title: 'Bari',
          //image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
        description: '<img src="Cammino.jpg"><br><br>Cominicia l\'inchiesta, diretta verso le terre lucane, con lentezza...',
          location: {
              // //center: [16.86650, 41.12933],
              // zoom: 11.29,
              // pitch: 45,
              // bearing: -0.16
          },
          //mapAnimation: 'flyTo',
          rotateAnimation: true,
          callback: '',
          onChapterEnter: [],
          onChapterExit: []
      },
      {
            id: 'drive-slide-0',
            alignment: 'left',
            hidden: false,
            title: 'Bitetto',
            //image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
          description: '<img src="il totem.jpg"><br><br>Nello zaino, lo stretto indispensabile e un\'ispirazione, il libro di Alliegro \"Totem Nero\" che definisce la Basilicata <i>\"una sintesi formidabile di paradossi \[...\], isolata ma centrale, depressa ma ricca, densa di opportunità quanto di angoscia.\"</i><br><br><h3><a href="https://www.libreriauniversitaria.it/totem-nero-petrolio-sviluppo-conflitti/libro/9788879755979"target="_blank">Totem Nero</a></h3>',
            location: {
                // //center: [16.86650, 41.12933],
                // zoom: 11.29,
                // pitch: 45,
                // bearing: -0.16
            },
            //mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

{
      id: 'drive-slide-1',
      alignment: 'right',
      hidden: false,
      title: 'Cassano delle Murge',
      //image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
      description: '<img src="Quercia secolare.jpg"><br><br>Una guida incontrata lungo la Via Peuceta, da osservatore esterno, mi parla della Basilicata come di <i>\"una terra cuscinetto, di cui non si deve parlare, dove solo i mediocri restano e regna il silenzio.</i>\" Ammiro una quercia secolare la cui pace stride con la confusione che mi aspetta.',
      location: {
          //center: [16.74949, 41.04042],
          //zoom: 13.34,
          //pitch: 45,
          //bearing: -0.78
        },
        //mapAnimation: 'flyTo',
        rotateAnimation: true,
        callback: '',
        onChapterEnter: [],
        onChapterExit: []
},
{
      id: '-slide-2',
      alignment: 'left',
      hidden: false,
      title: 'Santeramo in Colle',
      //image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
      description: '<iframe width="300" height="250" src="https://www.youtube.com/embed/4sKiwkKBq0U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br><br>Durante il cammino, ascolto la canzone composta da un cantautore per l\'inchiesta; al suon di musica avanzo nella murgia afosa.',
      location: {
          // //center: [16.76992, 40.88505],
          // zoom: 16,
          // pitch: 45,
          // bearing: -0.36
      },
      //mapAnimation: 'flyTo',
      rotateAnimation: true,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
{
      id: 'drive-slide-2',
      alignment: 'right',
      hidden: false,
      title: 'Altamura',
      //image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
      description: '<img src="Rifiuti.jpg"><br><br>Stridenti contrasti tra un cammino curato e ben segnato, e cumuli di rifiuti che marciscono accanto agli ulivi mi fanno presagire il sapore dell\'inchiesta.',
      location: {
          // //center: [16.76992, 40.88505],
          // zoom: 16,
          // pitch: 45,
          // bearing: -0.36
      },
      //mapAnimation: 'flyTo',
      rotateAnimation: true,
      callback: '',
      onChapterEnter: [],
      onChapterExit: []
    },
    {
          id: 'slide-3',
          alignment: 'left',
          hidden: false,
          title: 'Gravina di Puglia',
          //image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
          description: '<img src="sentinella13-0.jpg"><br><br>Incontro Mimmo, sentinella lucana che mi accompagnerà nel percorso dell\'inchiesta.',
  location: {
              // center: [16.75535, 40.79241],
              // zoom: 13.34,
              // pitch: 45,
              // bearing: 0
            },
            //mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
          },
        {
              id: 'drive-slide-4',
              alignment: 'right',
              hidden: true,
              title: 'Pisticci',
              //image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
              description: 'Arrivo a Pisticci, per le prime interviste, tra studi legali, piazze e chiese. Contina a seguire le tappe dell\'inchiesta.',
              location: {
                  // center: [16.75535, 40.79241],
                  // zoom: 13.34,
                  // pitch: 45,
                  // bearing: 0
              },
              //mapAnimation: 'flyTo',
              rotateAnimation: false,
              callback: '',
              onChapterEnter: [],
              onChapterExit: []
            },
            {
                  id: 'drive-slide-5',
                  alignment: 'right',
                  hidden: false,
                  title: 'Pisticci',
                  //image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                  description: 'Arrivo a Pisticci per le prime interviste, tra studi legali, piazze e chiese.Contina a seguire le tappe dell\'inchiesta nella prossima mappa <h3><a href="https://ctrnslv.github.io/ctrnslv5/"</a></h3>' ,
                  location: {
                      // center: [16.42194, 40.81895],
                      // zoom: 13.34,
                      // pitch: 45,
                      // bearing: 0
                  },
                  //mapAnimation: 'flyTo',
                  rotateAnimation: false,
                  callback: '',
                  onChapterEnter: [],
                  onChapterExit: []
                },
                {
                      id: 'drive-slide-6',
                      alignment: 'right',
                      hidden: true,
                      title: 'Pisticci',
                      //image: 'https://lh3.googleusercontent.com/proxy/ftw_SpSYfI1kbOigFYgOtB5khwscLh-aDp_e6lrmNjQiOshyl6vFKrNxuBVsktYgqerp36Sa1LjpVxr43BJ9wqGc-2BxuHC5AiPdpL2IybHJQ9laTx8zocNHbjZBd2iWuN84cqwjAeMquAU4tGd55JX40OKoh17J5H5F',
                      description: 'Arrivo a Pisticci per le prime interviste, tra studi legali, piazze e chiese.Contina a seguire le tappe dell\'inchiesta nella prossima mappa ',
                      location: {
                          // center: [16.55015, 40.39003],
                          // zoom: 15.17,
                          // pitch: 45,
                          // bearing: 0
                      },
                      //mapAnimation: 'flyTo',
                      rotateAnimation: false,
                      callback: '',
                      onChapterEnter: [],
                      onChapterExit: []


                                                                                          }
                                                                                        ]
                                                                                 };
