// Build bounding box for sensor filtering, see: https://www.findlatitudeandlongitude.com/l/Monterrey%2C+mexico/4890167/

// Area Metropolitana de Monterrey

// API call to getAllSensorsInArea
// https://api.purpleair.com/v1/sensors?fields=name,location_type,latitude,longitude&nwlng=-100.649769&nwlat=25.92485&selng=-99.949567&selat=25.459363

// params: {
//   fields: "name,location_type,latitude,longitude",
//   nwlng: -100.649769,
//   nwlat: 25.92485,
//   selng: -99.949567,
//   selat: 25.459363,
// }

export const presetLocations = [
  {
    "country": "Mexico",
    "state": "Nuevo León",
    "city": "Area Metropolitana de Monterrey",
    "emoji": "🇲🇽",
    "nwlat": 25.92485,
    "nwlng": -100.649769,
    "selat": 25.459363,
    "selng": -99.949567,
    "svg": "https://restcountries.eu/data/mex.svg",
  },
  {
    "country": "Mexico",
    "state": "Nuevo León",
    "city": "San Pedro Garza García",
    "emoji": "🇲🇽",
    "nwlat": 25.675258,
    "nwlng": -100.419332,
    "selat": 25.603141,
    "selng": -100.311497,
    "svg": "https://restcountries.eu/data/mex.svg",
  }
];


export const sensorsInMonterreyArea =
  [
    {
      "sensor_index": 24415,
      "name": "Alcatraces",
      "location_type": 0,
      "latitude": 25.727991,
      "longitude": -100.227165
    },
    {
      "sensor_index": 33027,
      "name": "Lagos del Bosque",
      "location_type": 0,
      "latitude": 25.600061,
      "longitude": -100.26256
    },
    {
      "sensor_index": 33117,
      "name": "Liceo de Monterrey",
      "location_type": 0,
      "latitude": 25.650322,
      "longitude": -100.32849
    },
    {
      "sensor_index": 34511,
      "name": "Rosario",
      "location_type": 0,
      "latitude": 25.640432,
      "longitude": -100.392265
    },
    {
      "sensor_index": 34569,
      "name": "Himalaya International School",
      "location_type": 0,
      "latitude": 25.651388,
      "longitude": -100.41089
    },
    {
      "sensor_index": 34641,
      "name": "UDEM_Campus_Solar",
      "location_type": 0,
      "latitude": 25.662136,
      "longitude": -100.4208
    },
    {
      "sensor_index": 34905,
      "name": "Colegio Tonallí",
      "location_type": 0,
      "latitude": 25.564653,
      "longitude": -100.24257
    },
    {
      "sensor_index": 35011,
      "name": "CECVAC",
      "location_type": 0,
      "latitude": 25.639122,
      "longitude": -100.34141
    },
    {
      "sensor_index": 36709,
      "name": "San Roberto International School Campus San Agustin",
      "location_type": 0,
      "latitude": 25.645615,
      "longitude": -100.3372
    },
    {
      "sensor_index": 36721,
      "name": "San Roberto International School Campus Valle Alto",
      "location_type": 0,
      "latitude": 25.575867,
      "longitude": -100.257454
    },
    {
      "sensor_index": 37747,
      "name": "Servicios Publicos",
      "location_type": 0,
      "latitude": 25.665537,
      "longitude": -100.410095
    },
    {
      "sensor_index": 38475,
      "name": "PPSC_FAMA",
      "location_type": 0,
      "latitude": 25.6712,
      "longitude": -100.43187
    },
    {
      "sensor_index": 38537,
      "name": "Bosque Miyawaki UDEM",
      "location_type": 0,
      "latitude": 25.65955,
      "longitude": -100.42211
    },
    {
      "sensor_index": 38663,
      "name": "Rayon Norte",
      "location_type": 0,
      "latitude": 25.678823,
      "longitude": -100.319695
    },
    {
      "sensor_index": 39285,
      "name": "Santa Catarina",
      "location_type": 0,
      "latitude": 25.675858,
      "longitude": -100.46506
    },
    {
      "sensor_index": 39355,
      "name": "Monterrey",
      "location_type": 0,
      "latitude": 25.664892,
      "longitude": -100.413
    },
    {
      "sensor_index": 39361,
      "name": "Instituto Nezaldi",
      "location_type": 0,
      "latitude": 25.657679,
      "longitude": -100.436844
    },
    {
      "sensor_index": 39471,
      "name": "Instituto Bilingue Stanford",
      "location_type": 0,
      "latitude": 25.741053,
      "longitude": -100.4099
    },
    {
      "sensor_index": 39497,
      "name": "Cadereyta, Monterrey",
      "location_type": 0,
      "latitude": 25.585035,
      "longitude": -100.001495
    },
    {
      "sensor_index": 39509,
      "name": "Instituto Nezaldi II",
      "location_type": 0,
      "latitude": 25.657537,
      "longitude": -100.43686
    },
    {
      "sensor_index": 39733,
      "name": "Ma de los Angeles &amp; Adolfo Lopez Mateos",
      "location_type": 0,
      "latitude": 25.643152,
      "longitude": -100.36523
    },
    {
      "sensor_index": 42211,
      "name": "RF",
      "location_type": 1,
      "latitude": 25.61638,
      "longitude": -100.316124
    },
    {
      "sensor_index": 43627,
      "name": "Liceo Los Rosales",
      "location_type": 0,
      "latitude": 25.673807,
      "longitude": -100.354004
    },
    {
      "sensor_index": 44463,
      "name": "MD-Inside",
      "location_type": 1,
      "latitude": 25.680864,
      "longitude": -100.454346
    },
    {
      "sensor_index": 45769,
      "name": "Huascaran",
      "location_type": 0,
      "latitude": 25.637255,
      "longitude": -100.399216
    },
    {
      "sensor_index": 45903,
      "name": "AGENERAL SNGNL",
      "location_type": 0,
      "latitude": 25.75302,
      "longitude": -100.297615
    },
    {
      "sensor_index": 46841,
      "name": "Instituto de Educación Naciones Unidas",
      "location_type": 0,
      "latitude": 25.744406,
      "longitude": -100.402435
    },
    {
      "sensor_index": 47233,
      "name": "NCIM",
      "location_type": 0,
      "latitude": 25.693592,
      "longitude": -100.35304
    },
    {
      "sensor_index": 47771,
      "name": "La Huasteca - Col. Los Nogales",
      "location_type": 0,
      "latitude": 25.625784,
      "longitude": -100.455536
    },
    {
      "sensor_index": 47883,
      "name": "Internacional KIlimanjaro Monterrey",
      "location_type": 0,
      "latitude": 25.721378,
      "longitude": -100.40059
    },
    {
      "sensor_index": 50555,
      "name": "Treviño",
      "location_type": 0,
      "latitude": 25.638243,
      "longitude": -100.36743
    },
    {
      "sensor_index": 50727,
      "name": "Escobedo TEC",
      "location_type": 0,
      "latitude": 25.79885,
      "longitude": -100.32719
    },
    {
      "sensor_index": 50855,
      "name": "TEC Juárez",
      "location_type": 0,
      "latitude": 25.646063,
      "longitude": -100.095665
    },
    {
      "sensor_index": 50871,
      "name": "TEC Garza Laguera",
      "location_type": 0,
      "latitude": 25.61827,
      "longitude": -100.27293
    },
    {
      "sensor_index": 56439,
      "name": "UT Santa Catarina N.L.",
      "location_type": 0,
      "latitude": 25.690498,
      "longitude": -100.510574
    },
    {
      "sensor_index": 56657,
      "name": "Protección Civil Sta Catarina N.L.",
      "location_type": 0,
      "latitude": 25.68367,
      "longitude": -100.487625
    },
    {
      "sensor_index": 60027,
      "name": "Torre Koi",
      "location_type": 0,
      "latitude": 25.641954,
      "longitude": -100.32199
    },
    {
      "sensor_index": 60085,
      "name": "Colinas del Valle",
      "location_type": 0,
      "latitude": 25.67816,
      "longitude": -100.39298
    },
    {
      "sensor_index": 60227,
      "name": "Calle Volcánica",
      "location_type": 0,
      "latitude": 25.653492,
      "longitude": -100.44073
    },
    {
      "sensor_index": 62831,
      "name": "Koi IdeI",
      "location_type": 1,
      "latitude": 25.64202,
      "longitude": -100.322105
    },
    {
      "sensor_index": 71091,
      "name": "JNAirCare",
      "location_type": 1,
      "latitude": 25.646965,
      "longitude": -100.38512
    },
    {
      "sensor_index": 84411,
      "name": "Sima UANL",
      "location_type": 0,
      "latitude": 25.729715,
      "longitude": -100.31027
    },
    {
      "sensor_index": 93745,
      "name": "Sima UANL 3",
      "location_type": 0,
      "latitude": 25.730293,
      "longitude": -100.31032
    },
    {
      "sensor_index": 93835,
      "name": "Sima UANL 2",
      "location_type": 0,
      "latitude": 25.730259,
      "longitude": -100.31022
    },
    {
      "sensor_index": 93927,
      "name": "Sima Juárez",
      "location_type": 0,
      "latitude": 25.646189,
      "longitude": -100.09566
    },
    {
      "sensor_index": 95337,
      "name": "Sima Apodaca",
      "location_type": 0,
      "latitude": 25.777487,
      "longitude": -100.1882
    },
    {
      "sensor_index": 105714,
      "name": "MADISA-Inside 3er Piso",
      "location_type": 1,
      "latitude": 25.680647,
      "longitude": -100.45453
    },
    {
      "sensor_index": 118909,
      "name": "Colorines",
      "location_type": 1,
      "latitude": 25.631332,
      "longitude": -100.34302
    },
    {
      "sensor_index": 119937,
      "name": "Grupo Reforma Cumbres",
      "location_type": 0,
      "latitude": 25.71012,
      "longitude": -100.37474
    },
    {
      "sensor_index": 119965,
      "name": "Grupo Reforma El Norte",
      "location_type": 0,
      "latitude": 25.674164,
      "longitude": -100.30816
    },
    {
      "sensor_index": 121719,
      "name": "GrupoReforma La Silla",
      "location_type": 0,
      "latitude": 25.637156,
      "longitude": -100.273186
    },
    {
      "sensor_index": 133367,
      "name": "Matimex",
      "location_type": 0,
      "latitude": 25.696999,
      "longitude": -100.366234
    },
    {
      "sensor_index": 140432,
      "name": "Olinala Granado",
      "location_type": 0,
      "latitude": 25.618973,
      "longitude": -100.37201
    },
    {
      "sensor_index": 140440,
      "name": "LS",
      "location_type": 0,
      "latitude": 25.659594,
      "longitude": -100.38791
    },
    {
      "sensor_index": 142670,
      "name": "Estación de Monitoreo de Calidad del Aire Comité Estatal PAN",
      "location_type": 0,
      "latitude": 25.680895,
      "longitude": -100.310295
    },
    {
      "sensor_index": 142678,
      "name": "Estación de Monitoreo de Calidad del Aire Comité Municipal PAN Juarez",
      "location_type": 0,
      "latitude": 25.647034,
      "longitude": -100.0923
    },
    {
      "sensor_index": 142698,
      "name": "Estación de Monitoreo de Calidad del Aire Comité Municipal PAN Sub Comite Poniente",
      "location_type": 0,
      "latitude": 25.679337,
      "longitude": -100.40833
    },
    {
      "sensor_index": 144262,
      "name": "Estación de Monitoreo de Calidad del Aire Comité Municipal PAN Cadereyta",
      "location_type": 0,
      "latitude": 25.595556,
      "longitude": -99.99982
    },
    {
      "sensor_index": 147010,
      "name": "Santa Barbara",
      "location_type": 0,
      "latitude": 25.661701,
      "longitude": -100.38932
    },
    {
      "sensor_index": 154481,
      "name": "MADISA",
      "location_type": 0,
      "latitude": 25.681019,
      "longitude": -100.45439
    },
    {
      "sensor_index": 169221,
      "name": "Imobilem Piso 5",
      "location_type": 1,
      "latitude": 25.634949,
      "longitude": -100.36249
    },
    {
      "sensor_index": 173083,
      "name": "Palo Blanco",
      "location_type": 0,
      "latitude": 25.656317,
      "longitude": -100.39748
    },
    {
      "sensor_index": 174731,
      "name": "Colegio Cambridge de Monterrey Campus Cumbres - Primaria",
      "location_type": 0,
      "latitude": 25.745947,
      "longitude": -100.41292
    },
    {
      "sensor_index": 174777,
      "name": "Colegio Cambridge de Monterrey Campus Dominio - Primaria",
      "location_type": 0,
      "latitude": 25.763601,
      "longitude": -100.45782
    },
    {
      "sensor_index": 174781,
      "name": "Colegio Cambridge de Monterrey Campus Mitras",
      "location_type": 0,
      "latitude": 25.696613,
      "longitude": -100.348114
    },
    {
      "sensor_index": 174787,
      "name": "Colegio Cambridge de Monterrey Campus Norte",
      "location_type": 0,
      "latitude": 25.779613,
      "longitude": -100.28022
    },
    {
      "sensor_index": 174831,
      "name": "Colegio Cambridge de Monterrey Campus Dominio - Secundaria",
      "location_type": 0,
      "latitude": 25.763765,
      "longitude": -100.45728
    },
    {
      "sensor_index": 174839,
      "name": "Colegio Cambridge de Monterrey Campus Cumbres - Secundaria",
      "location_type": 0,
      "latitude": 25.745552,
      "longitude": -100.4123
    },
    {
      "sensor_index": 175565,
      "name": "Garza Garcia",
      "location_type": 0,
      "latitude": 25.6385,
      "longitude": -100.35874
    },
    {
      "sensor_index": 203629,
      "name": "American School Foundation of Monterrey, A.C.",
      "location_type": 0,
      "latitude": 25.659422,
      "longitude": -100.44654
    }
  ];

export const warningLevels = {
  "es": [
    {
      "level": 1,
      "aqi": "0-50",
      "color": "#00e400",
      "description": "La calidad del aire es satisfactoria y la contaminación del aire representa poco o ningún riesgo con 24 horas de exposición."
    },
    {
      "level": 2,
      "aqi": "51-100",
      "color": "#ffff00",
      "description": "La calidad del aire es aceptable; sin embargo, para algunos contaminantes puede haber una preocupación moderada por la salud para un número muy pequeño de personas que son inusualmente sensibles a la contaminación del aire."
    },
    {
      "level": 3,
      "aqi": "101-150",
      "color": "#ff7e00",
      "description": "Los miembros de grupos sensibles pueden experimentar efectos en la salud. Es menos probable que el público en general se vea afectado."
    },
    {
      "level": 4,
      "aqi": "151-200",
      "color": "#ff0000",
      "description": "Algunos miembros del público en general pueden experimentar efectos en la salud con 24 horas de exposición; los miembros de grupos sensibles pueden experimentar efectos en la salud más graves."
    }
  ],
  "en": [
    {
      "level": 1,
      "aqi": "0-50",
      "color": "#00e400",
      "description": "Air quality is satisfactory, and air pollution poses little or no risk with 24 hours of exposure."
    },
    {
      "level": 2,
      "aqi": "51-100",
      "color": "#ffff00",
      "description": "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution."
    },
    {
      "level": 3,
      "aqi": "101-150",
      "color": "#ff7e00",
      "description": "Members of sensitive groups may experience health effects. The general public is less likely to be affected."
    },
    {
      "level": 4,
      "aqi": "151-200",
      "color": "#ff0000",
      "description": "Some members of the general public may experience health effects with 24 hours of exposure; members of sensitive groups may experience more serious health effects."
    }
  ]
};